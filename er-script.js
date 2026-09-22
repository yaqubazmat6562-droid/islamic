(function () {
  'use strict';

  // ---------- DOM ----------
  const canvasContainer = document.getElementById('canvasContainer');
  const globeView = document.getElementById('globeView');
  const mapView = document.getElementById('mapView');
  const loadingOverlay = document.getElementById('loadingOverlay');
  const loadingTitle = document.getElementById('loadingTitle');
  const loadingProgress = document.getElementById('loadingProgress');
  const loadProgressFill = document.getElementById('loadProgressFill');
  const skipLoadingBtn = document.getElementById('skipLoadingBtn');
  const fpsCounter = document.getElementById('fpsCounter');
  const zoomLevelTag = document.getElementById('zoomLevelTag');
  const mapModeTag = document.getElementById('mapModeTag');
  const cityTooltip = document.getElementById('cityTooltip');
  const tooltipName = document.getElementById('tooltipName');
  const tooltipInfo = document.getElementById('tooltipInfo');

  const zoomFill = document.getElementById('zoomFill');
  const zoomMarker = document.getElementById('zoomMarker');
  const zoomScale = document.getElementById('zoomScale');
  const zoomLabel = document.getElementById('zoomLabel');

  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  const toggleAutoBtn = document.getElementById('toggleAutoBtn');
  const toggleCloudsBtn = document.getElementById('toggleCloudsBtn');
  const flyToPakistanBtn = document.getElementById('flyToPakistanBtn');
  const flyToKarachiBtn = document.getElementById('flyToKarachiBtn');
  const openMapBtn = document.getElementById('openMapBtn');
  const resetViewBtn = document.getElementById('resetViewBtn');
  const speedSlider = document.getElementById('speedSlider');

  const backToGlobeBtn = document.getElementById('backToGlobeBtn');
  const satelliteBtn = document.getElementById('satelliteBtn');
  const streetsBtn = document.getElementById('streetsBtn');
  const darkBtn = document.getElementById('darkBtn');
  const terrainBtn = document.getElementById('terrainBtn');
  const mapInfoTitle = document.getElementById('mapInfoTitle');
  const mapInfoCoords = document.getElementById('mapInfoCoords');
  const mapInfoZoom = document.getElementById('mapInfoZoom');
  const mapSearchInput = document.getElementById('mapSearchInput');
  const mapSearchBtn = document.getElementById('mapSearchBtn');
  const quickBtns = document.querySelectorAll('.quick-btn');

  const legendItems = document.querySelectorAll('.legend-item');

  // ---------- STATE ----------
  let scene, camera, renderer, clock;
  let earthGroup, earthMesh, cloudMesh, atmosphereMesh, nightLightsMesh;
  let starField, moonMesh, moonOrbit;
  let countryBordersGroup, stateBordersGroup, cityGroup, streetGridGroup, buildingGroup;
  let allCities = [];
  let cityLabels = [];
  let autoRotate = true;
  let cloudsVisible = true;
  let rotationSpeed = 0.3;
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  let targetRotationX = 0.1;
  let targetRotationY = 0;
  let frameCount = 0;
  let lastFpsUpdate = 0;
  let raycaster, mouse;
  let texturesLoaded = 0;
  const TOTAL_TEXTURES = 5;

  let leafletMap = null;
  let mapMode = 'satellite';
  let isMapViewActive = false;

  const EARTH_RADIUS = 1.5;
  const MIN_DIST = 1.52;
  const MAX_DIST = 12;
  const START_DIST = 5.5;
  const AUTO_SWITCH_DIST = 1.62; // when zoom this close, auto-switch to map

  const LAYER_THRESHOLDS = {
    countries: 4.5,
    states:    3.2,
    cities:    2.8,
    streets:   1.95,
    buildings: 1.70,
  };

  const LABEL_DISTANCE = 2.6;

  // ---------- TEXTURES ----------
  const TEXTURES = {
    earth:     'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
    earthTopo: 'https://unpkg.com/three-globe/example/img/earth-topology.png',
    earthNight:'https://unpkg.com/three-globe/example/img/earth-night.jpg',
    clouds:    'https://unpkg.com/three-globe/example/img/clouds.png',
    moon:      'https://threejs.org/examples/textures/planets/moon_1024.jpg',
  };

  function makeFallbackTexture() {
    const c = document.createElement('canvas');
    c.width = 1024; c.height = 512;
    const ctx = c.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#0a3a5a');
    grad.addColorStop(0.5, '#1a5a8a');
    grad.addColorStop(1, '#0a3a5a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 512);
    ctx.fillStyle = '#2e7a3e';
    for (let i = 0; i < 60; i++) {
      ctx.beginPath();
      ctx.ellipse(Math.random() * 1024, Math.random() * 512, 15 + Math.random() * 50, 15 + Math.random() * 30, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    return new THREE.CanvasTexture(c);
  }

  function makeFallbackNight() {
    const c = document.createElement('canvas');
    c.width = 1024; c.height = 512;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 1024, 512);
    for (let i = 0; i < 500; i++) {
      ctx.fillStyle = `rgba(255, 220, 100, ${0.2 + Math.random() * 0.8})`;
      ctx.beginPath();
      ctx.arc(Math.random() * 1024, Math.random() * 512, 0.5 + Math.random() * 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
    return new THREE.CanvasTexture(c);
  }

  // ---------- CITIES ----------
  const CITIES = [
    { name: 'Karachi', country: 'Pakistan', lat: 24.8607, lng: 67.0011, pop: '16M', major: true },
    { name: 'Lahore', country: 'Pakistan', lat: 31.5204, lng: 74.3587, pop: '13M', major: true },
    { name: 'Islamabad', country: 'Pakistan', lat: 33.6844, lng: 73.0479, pop: '1.2M', capital: true, major: true },
    { name: 'Rawalpindi', country: 'Pakistan', lat: 33.5651, lng: 73.0169, pop: '2.1M' },
    { name: 'Faisalabad', country: 'Pakistan', lat: 31.4187, lng: 73.0791, pop: '3.6M', major: true },
    { name: 'Peshawar', country: 'Pakistan', lat: 34.0151, lng: 71.5249, pop: '2.3M', major: true },
    { name: 'Quetta', country: 'Pakistan', lat: 30.1798, lng: 66.9750, pop: '1M', major: true },
    { name: 'Multan', country: 'Pakistan', lat: 30.1575, lng: 71.5249, pop: '2M', major: true },
    { name: 'Hyderabad', country: 'Pakistan', lat: 25.3960, lng: 68.3578, pop: '1.7M' },
    { name: 'Gujranwala', country: 'Pakistan', lat: 32.1877, lng: 74.1945, pop: '2M' },
    { name: 'Sialkot', country: 'Pakistan', lat: 32.4945, lng: 74.5229, pop: '0.7M' },
    { name: 'Delhi', country: 'India', lat: 28.7041, lng: 77.1025, pop: '32M', capital: true, major: true },
    { name: 'Mumbai', country: 'India', lat: 19.0760, lng: 72.8777, pop: '21M', major: true },
    { name: 'Dhaka', country: 'Bangladesh', lat: 23.8103, lng: 90.4125, pop: '21M', capital: true },
    { name: 'Kabul', country: 'Afghanistan', lat: 34.5553, lng: 69.2075, pop: '4M', capital: true },
    { name: 'Tehran', country: 'Iran', lat: 35.6892, lng: 51.3890, pop: '9M', capital: true },
    { name: 'Beijing', country: 'China', lat: 39.9042, lng: 116.4074, pop: '21M', capital: true, major: true },
    { name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503, pop: '14M', capital: true, major: true },
    { name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708, pop: '3.5M', major: true },
    { name: 'Istanbul', country: 'Turkey', lat: 41.0082, lng: 28.9784, pop: '15M', major: true },
    { name: 'London', country: 'UK', lat: 51.5074, lng: -0.1278, pop: '9M', capital: true, major: true },
    { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522, pop: '11M', capital: true, major: true },
    { name: 'Berlin', country: 'Germany', lat: 52.5200, lng: 13.4050, pop: '3.7M', capital: true },
    { name: 'Moscow', country: 'Russia', lat: 55.7558, lng: 37.6173, pop: '12M', capital: true, major: true },
    { name: 'Cairo', country: 'Egypt', lat: 30.0444, lng: 31.2357, pop: '20M', capital: true, major: true },
    { name: 'New York', country: 'USA', lat: 40.7128, lng: -74.0060, pop: '18M', major: true },
    { name: 'Los Angeles', country: 'USA', lat: 34.0522, lng: -118.2437, pop: '12M', major: true },
    { name: 'Mexico City', country: 'Mexico', lat: 19.4326, lng: -99.1332, pop: '21M', capital: true, major: true },
    { name: 'São Paulo', country: 'Brazil', lat: -23.5505, lng: -46.6333, pop: '22M', major: true },
    { name: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093, pop: '5.3M', major: true },
    { name: 'Ipoh', country: 'Malaysia', lat: 4.5975, lng: 101.0901, pop: '0.75M', major: true },
    { name: 'Kuala Lumpur', country: 'Malaysia', lat: 3.1390, lng: 101.6869, pop: '1.8M', capital: true, major: true },
  ];

  const COUNTRY_BORDERS = [
    { name: 'Pakistan', points: [[37.0,74.5],[35.5,77.0],[34.0,74.0],[33.0,74.5],[31.0,74.5],[29.5,71.5],[28.0,70.5],[24.0,68.5],[24.5,66.5],[25.5,64.0],[28.0,62.5],[29.5,61.5],[31.5,61.0],[34.0,61.0],[36.0,63.0],[37.0,66.0],[37.5,70.0],[37.0,74.5]] },
    { name: 'India', points: [[28.5,77.0],[27.0,88.0],[25.0,89.5],[22.0,91.5],[21.0,89.0],[15.0,80.0],[12.0,80.0],[8.0,77.5],[10.0,73.0],[15.0,73.5],[20.0,70.0],[22.0,68.5],[24.0,68.5],[24.5,70.5],[28.5,77.0]] },
    { name: 'China', points: [[40.0,116.0],[45.0,125.0],[48.0,132.0],[42.0,130.0],[38.0,121.0],[30.0,122.0],[22.0,112.0],[22.0,100.0],[28.0,97.0],[32.0,80.0],[37.0,74.0],[45.0,90.0],[48.0,87.0],[45.0,110.0],[40.0,116.0]] },
    { name: 'USA', points: [[49.0,-125.0],[49.0,-95.0],[48.0,-88.0],[44.0,-66.0],[41.0,-70.0],[38.0,-75.0],[33.0,-79.0],[30.0,-82.0],[25.0,-80.0],[25.0,-98.0],[29.0,-104.0],[32.0,-117.0],[42.0,-124.0],[49.0,-125.0]] },
  ];

  // ---------- INIT ----------
  function init() {
    clock = new THREE.Clock();
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000005);

    const aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
    camera = new THREE.PerspectiveCamera(50, aspect, 0.01, 5000);
    camera.position.set(0, 1.2, START_DIST);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
    renderer.setClearColor(0x000005, 1);
    globeView.appendChild(renderer.domElement);

    buildStarfield();
    buildLights();
    buildEarthFast();
    loadRealTextures();
    buildCountryBorders();
    buildStateBorders();
    buildCityMarkers();
    buildCityLabels();
    buildStreetGrids();
    build3DBuildings();
    buildMoon();

    bindEvents();
    animate();
    updateZoomUI();

    setTimeout(() => loadingOverlay.classList.add('hidden'), 1000);
  }

  // ---------- EARTH ----------
  function buildEarthFast() {
    earthGroup = new THREE.Group();
    scene.add(earthGroup);
    earthGroup.rotation.z = 0.409;

    const geo = new THREE.SphereGeometry(EARTH_RADIUS, 128, 128);
    const mat = new THREE.MeshPhongMaterial({ map: makeFallbackTexture(), shininess: 18 });
    earthMesh = new THREE.Mesh(geo, mat);
    earthGroup.add(earthMesh);

    const nightGeo = new THREE.SphereGeometry(EARTH_RADIUS + 0.001, 128, 128);
    const nightMat = new THREE.MeshBasicMaterial({
      map: makeFallbackNight(),
      transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    nightLightsMesh = new THREE.Mesh(nightGeo, nightMat);
    earthGroup.add(nightLightsMesh);

    const cloudGeo = new THREE.SphereGeometry(EARTH_RADIUS + 0.012, 128, 128);
    const cloudMat = new THREE.MeshPhongMaterial({
      transparent: true, opacity: 0.35, color: 0xffffff,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    });
    cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
    cloudMesh.visible = false;
    earthGroup.add(cloudMesh);

    const atmoGeo = new THREE.SphereGeometry(EARTH_RADIUS + 0.12, 96, 96);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: 0x5fa0ff, transparent: true, opacity: 0.16,
      side: THREE.BackSide, blending: THREE.AdditiveBlending,
    });
    atmosphereMesh = new THREE.Mesh(atmoGeo, atmoMat);
    earthGroup.add(atmosphereMesh);
  }

  function loadRealTextures() {
    const loader = new THREE.TextureLoader();
    loader.crossOrigin = 'anonymous';
    function tryLoad(url, onLoad) {
      loader.load(url, (tex) => {
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        texturesLoaded++;
        updateLoadProgress();
        onLoad(tex);
      }, undefined, () => { texturesLoaded++; updateLoadProgress(); });
    }
    tryLoad(TEXTURES.earth, (t) => {
      if (earthMesh) { earthMesh.material.map = t; earthMesh.material.needsUpdate = true; }
    });
    tryLoad(TEXTURES.earthTopo, (t) => {
      if (earthMesh) { earthMesh.material.bumpMap = t; earthMesh.material.bumpScale = 0.02; earthMesh.material.needsUpdate = true; }
    });
    tryLoad(TEXTURES.earthNight, (t) => {
      if (nightLightsMesh) { nightLightsMesh.material.map = t; nightLightsMesh.material.needsUpdate = true; }
    });
    tryLoad(TEXTURES.clouds, (t) => {
      if (cloudMesh) { cloudMesh.material.map = t; cloudMesh.material.opacity = 0.5; cloudMesh.material.needsUpdate = true; cloudMesh.visible = cloudsVisible; }
    });
    tryLoad(TEXTURES.moon, (t) => {
      if (moonMesh) { moonMesh.material.map = t; moonMesh.material.needsUpdate = true; }
    });
  }

  function updateLoadProgress() {
    const pct = Math.round((texturesLoaded / TOTAL_TEXTURES) * 100);
    if (loadProgressFill) loadProgressFill.style.width = pct + '%';
    if (loadingProgress) loadingProgress.textContent = pct + '%';
  }

  // ---------- STARFIELD ----------
  function buildStarfield() {
    const geo = new THREE.BufferGeometry();
    const count = 10000;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const r = 300 + Math.random() * 1500;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      pos[i*3] = r*Math.sin(p)*Math.cos(t);
      pos[i*3+1] = r*Math.cos(p);
      pos[i*3+2] = r*Math.sin(p)*Math.sin(t);
      const st = Math.random();
      if (st < 0.75) color.setHSL(0.6, 0.1, 0.85 + Math.random()*0.15);
      else if (st < 0.88) color.setHSL(0.13, 0.7, 0.75);
      else if (st < 0.96) color.setHSL(0.07, 0.9, 0.7);
      else color.setHSL(0.02, 1, 0.6);
      col[i*3] = color.r; col[i*3+1] = color.g; col[i*3+2] = color.b;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    starField = new THREE.Points(geo, new THREE.PointsMaterial({
      size: 1.5, vertexColors: true, transparent: true, opacity: 0.9,
      sizeAttenuation: true, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    scene.add(starField);
  }

  // ---------- BORDERS ----------
  function buildCountryBorders() {
    countryBordersGroup = new THREE.Group();
    countryBordersGroup.visible = false;
    earthGroup.add(countryBordersGroup);
    COUNTRY_BORDERS.forEach((c) => {
      const pts = c.points.map(([lat, lng]) => {
        const v = latLngToVector3(lat, lng, EARTH_RADIUS + 0.003);
        return new THREE.Vector3(v.x, v.y, v.z);
      });
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color: 0xffcc33, transparent: true, opacity: 0.9 });
      countryBordersGroup.add(new THREE.Line(geo, mat));
    });
  }

  function buildStateBorders() {
    stateBordersGroup = new THREE.Group();
    stateBordersGroup.visible = false;
    earthGroup.add(stateBordersGroup);
  }

  // ---------- CITY MARKERS ----------
  function buildCityMarkers() {
    cityGroup = new THREE.Group();
    cityGroup.visible = false;
    earthGroup.add(cityGroup);
    const markerGeo = new THREE.SphereGeometry(0.009, 8, 8);
    const capitalMat = new THREE.MeshBasicMaterial({ color: 0xffdd44 });
    const majorMat = new THREE.MeshBasicMaterial({ color: 0x00ff88 });
    const ringGeo = new THREE.RingGeometry(0.014, 0.022, 20);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88, transparent: true, opacity: 0.7,
      side: THREE.DoubleSide, depthWrite: false,
    });
    CITIES.forEach((city) => {
      const { x, y, z } = latLngToVector3(city.lat, city.lng, EARTH_RADIUS + 0.004);
      const mat = city.capital ? capitalMat : majorMat;
      const marker = new THREE.Mesh(markerGeo, mat);
      marker.position.set(x, y, z);
      marker.userData = city;
      cityGroup.add(marker);
      allCities.push(marker);
      const ring = new THREE.Mesh(ringGeo, ringMat.clone());
      ring.position.set(x, y, z);
      ring.lookAt(0, 0, 0);
      ring.userData = { phase: Math.random() * Math.PI * 2 };
      cityGroup.add(ring);
    });
  }

  // ---------- CITY LABELS ----------
  function buildCityLabels() {
    CITIES.forEach((city) => {
      const label = document.createElement('div');
      label.className = 'city-label' + (city.capital ? ' capital' : '');
      label.innerHTML = `${city.name}<span class="pop-badge">${city.pop}</span>`;
      label.style.position = 'absolute';
      label.style.display = 'none';
      globeView.appendChild(label);
      cityLabels.push({ el: label, city: city });
    });
  }

  function updateCityLabels() {
    const dist = camera.position.length();
    const rect = renderer.domElement.getBoundingClientRect();
    const showLabels = dist < LABEL_DISTANCE && cityGroup && cityGroup.visible;
    cityLabels.forEach((entry) => {
      const { el, city } = entry;
      const isMajor = city.major || city.capital;
      const shouldShow = showLabels && (isMajor || dist < 2.0);
      if (!shouldShow) { el.style.display = 'none'; el.classList.remove('visible'); return; }
      const p = latLngToVector3(city.lat, city.lng, EARTH_RADIUS + 0.01);
      const worldVec = new THREE.Vector3(p.x, p.y, p.z);
      worldVec.applyMatrix4(earthGroup.matrixWorld);
      const proj = worldVec.clone().project(camera);
      if (proj.z > 1) { el.style.display = 'none'; return; }
      const x = (proj.x * 0.5 + 0.5) * rect.width;
      const y = (-proj.y * 0.5 + 0.5) * rect.height;
      const camDir = camera.position.clone().normalize();
      const pointDir = worldVec.clone().normalize();
      if (camDir.dot(pointDir) < 0.25) { el.style.display = 'none'; el.classList.remove('visible'); return; }
      el.style.display = 'block';
      el.style.left = x + 'px';
      el.style.top = y + 'px';
      el.classList.add('visible');
    });
  }

  // ---------- STREETS & BUILDINGS (lightweight 3D) ----------
  function buildStreetGrids() {
    streetGridGroup = new THREE.Group();
    streetGridGroup.visible = false;
    earthGroup.add(streetGridGroup);
  }

  function build3DBuildings() {
    buildingGroup = new THREE.Group();
    buildingGroup.visible = false;
    earthGroup.add(buildingGroup);
  }

  // ---------- LAT/LNG ----------
  function latLngToVector3(lat, lng, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return { x, y, z };
  }

  // ---------- MOON ----------
  function buildMoon() {
    const geo = new THREE.SphereGeometry(0.4, 48, 48);
    const mat = new THREE.MeshPhongMaterial({ color: 0xcccccc, shininess: 5 });
    moonMesh = new THREE.Mesh(geo, mat);
    moonOrbit = new THREE.Group();
    moonOrbit.rotation.x = 0.2;
    moonOrbit.rotation.z = 0.15;
    moonMesh.position.set(4.5, 0.5, 0);
    moonOrbit.add(moonMesh);
    earthGroup.add(moonOrbit);
  }

  // ---------- LIGHTS ----------
  function buildLights() {
    scene.add(new THREE.AmbientLight(0x1a1a2e, 0.6));
    const sun = new THREE.DirectionalLight(0xffffff, 1.8);
    sun.position.set(10, 5, 8);
    scene.add(sun);
    const fill = new THREE.DirectionalLight(0x4466aa, 0.4);
    fill.position.set(-8, -3, -6);
    scene.add(fill);
    const rim = new THREE.PointLight(0x4fc44f, 0.6, 30);
    rim.position.set(-5, 4, -3);
    scene.add(rim);
  }

  // ---------- MAP VIEW (Leaflet) ----------
  function initLeafletMap() {
    if (leafletMap) return;

    leafletMap = L.map('leafletMap', {
      center: [30.3753, 69.3451],
      zoom: 6,
      zoomControl: true,
      attributionControl: true,
      worldCopyJump: true,
      maxZoom: 19,
      minZoom: 2,
    });

    setMapTiles('satellite');

    leafletMap.on('moveend zoomend', () => {
      const c = leafletMap.getCenter();
      const z = leafletMap.getZoom();
      mapInfoCoords.textContent = `${c.lat.toFixed(4)}, ${c.lng.toFixed(4)}`;
      mapInfoZoom.textContent = `Zoom: ${z}`;
      mapInfoTitle.textContent = getZoomLevelName(z);
    });

    // Add markers for our cities
    CITIES.forEach((city) => {
      const isCap = city.capital;
      const isMajor = city.major;
      const icon = L.divIcon({
        className: 'custom-city-marker',
        html: `<div style="
          background:${isCap ? '#ffdd44' : isMajor ? '#4fc44f' : '#88ff88'};
          width:${isCap ? 14 : 10}px;
          height:${isCap ? 14 : 10}px;
          border-radius:50%;
          border:2px solid #fff;
          box-shadow:0 0 12px ${isCap ? '#ffdd44' : '#4fc44f'};
        "></div>`,
        iconSize: [isCap ? 14 : 10, isCap ? 14 : 10],
        iconAnchor: [isCap ? 7 : 5, isCap ? 7 : 5],
      });
      const marker = L.marker([city.lat, city.lng], { icon: icon }).addTo(leafletMap);
      marker.bindPopup(`
        <div style="font-weight:800;font-size:1rem;color:#b3ffb3;margin-bottom:4px;">📍 ${city.name}</div>
        <div style="font-size:0.8rem;color:#a0d0a0;">${city.country}</div>
        <div style="font-size:0.75rem;color:#8fe08f;margin-top:4px;">Population: ${city.pop}</div>
      `);
    });
  }

  function getZoomLevelName(z) {
    if (z <= 3) return 'World';
    if (z <= 5) return 'Continent';
    if (z <= 7) return 'Country';
    if (z <= 10) return 'Region';
    if (z <= 13) return 'City';
    if (z <= 15) return 'District';
    if (z <= 17) return 'Neighborhood';
    return 'Street Level';
  }

  function setMapTiles(mode) {
    if (!leafletMap) return;

    // Remove old tile layers
    leafletMap.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) leafletMap.removeLayer(layer);
    });

    let url, attribution;
    if (mode === 'satellite') {
      url = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      attribution = 'Tiles &copy; Esri';
    } else if (mode === 'streets') {
      url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      attribution = '&copy; OpenStreetMap';
    } else if (mode === 'dark') {
      url = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
      attribution = '&copy; CartoDB';
    } else if (mode === 'terrain') {
      url = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
      attribution = '&copy; OpenTopoMap';
    }

    L.tileLayer(url, {
      attribution: attribution,
      maxZoom: 19,
      maxNativeZoom: 18,
    }).addTo(leafletMap);

    mapMode = mode;
  }

  function showMapView(lat, lng, zoom) {
    if (!isMapViewActive) {
      initLeafletMap();
      isMapViewActive = true;
    }
    globeView.classList.add('hidden');
    mapView.classList.add('active');
    mapModeTag.textContent = 'REAL MAP';

    if (lat !== undefined && lng !== undefined) {
      leafletMap.setView([lat, lng], zoom || 13);
    }
    setTimeout(() => leafletMap.invalidateSize(), 250);
  }

  function showGlobeView() {
    mapView.classList.remove('active');
    globeView.classList.remove('hidden');
    mapModeTag.textContent = '3D GLOBE';
    isMapViewActive = false;
  }

  // ---------- EVENTS ----------
  function bindEvents() {
    window.addEventListener('resize', onWindowResize);
    const canvas = renderer.domElement;

    canvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const dx = e.clientX - previousMousePosition.x;
        const dy = e.clientY - previousMousePosition.y;
        targetRotationY += dx * 0.005;
        targetRotationX += dy * 0.005;
        targetRotationX = Math.max(-Math.PI/2, Math.min(Math.PI/2, targetRotationX));
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
      handleCityHover(e);
    });

    window.addEventListener('mouseup', () => { isDragging = false; });

    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    canvas.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches.length === 1) {
        const dx = e.touches[0].clientX - previousMousePosition.x;
        const dy = e.touches[0].clientY - previousMousePosition.y;
        targetRotationY += dx * 0.008;
        targetRotationX += dy * 0.008;
        targetRotationX = Math.max(-Math.PI/2, Math.min(Math.PI/2, targetRotationX));
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    canvas.addEventListener('touchend', () => { isDragging = false; });

    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const factor = e.deltaY > 0 ? 1.08 : 0.92;
      zoomBy(factor);
    }, { passive: false });

    zoomInBtn.addEventListener('click', () => zoomBy(0.7));
    zoomOutBtn.addEventListener('click', () => zoomBy(1.4));

    toggleAutoBtn.addEventListener('click', () => {
      autoRotate = !autoRotate;
      toggleAutoBtn.textContent = autoRotate ? '⏸️' : '▶️';
      toggleAutoBtn.classList.toggle('active', autoRotate);
    });

    toggleCloudsBtn.addEventListener('click', () => {
      cloudsVisible = !cloudsVisible;
      if (cloudMesh) cloudMesh.visible = cloudsVisible;
      toggleCloudsBtn.classList.toggle('active', cloudsVisible);
    });

    flyToPakistanBtn.addEventListener('click', () => flyTo(30.3753, 69.3451, 2.0));
    flyToKarachiBtn.addEventListener('click', () => flyTo(24.8607, 67.0011, 1.55));

    openMapBtn.addEventListener('click', () => {
      // Use current camera-focused location
      showMapView(30.3753, 69.3451, 12);
    });

    resetViewBtn.addEventListener('click', () => {
      if (isMapViewActive) {
        showGlobeView();
      }
      camera.position.set(0, 1.2, START_DIST);
      camera.lookAt(0, 0, 0);
      targetRotationX = 0.1;
      targetRotationY = 0;
      earthGroup.rotation.x = 0.1;
      earthGroup.rotation.y = 0;
      updateZoomUI();
    });

    speedSlider.addEventListener('input', (e) => {
      rotationSpeed = parseFloat(e.target.value);
    });

    if (skipLoadingBtn) {
      skipLoadingBtn.addEventListener('click', () => loadingOverlay.classList.add('hidden'));
    }

    // Map controls
    backToGlobeBtn.addEventListener('click', showGlobeView);

    satelliteBtn.addEventListener('click', () => {
      setMapTiles('satellite');
      setActiveMapBtn(satelliteBtn);
    });
    streetsBtn.addEventListener('click', () => {
      setMapTiles('streets');
      setActiveMapBtn(streetsBtn);
    });
    darkBtn.addEventListener('click', () => {
      setMapTiles('dark');
      setActiveMapBtn(darkBtn);
    });
    terrainBtn.addEventListener('click', () => {
      setMapTiles('terrain');
      setActiveMapBtn(terrainBtn);
    });

    mapSearchBtn.addEventListener('click', doMapSearch);
    mapSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') doMapSearch();
    });

    quickBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const lat = parseFloat(btn.dataset.lat);
        const lng = parseFloat(btn.dataset.lng);
        const zoom = parseInt(btn.dataset.zoom);
        if (!isMapViewActive) initLeafletMap();
        showMapView(lat, lng, zoom);
      });
    });
  }

  function setActiveMapBtn(activeBtn) {
    [satelliteBtn, streetsBtn, darkBtn, terrainBtn].forEach((b) => b.classList.remove('active'));
    activeBtn.classList.add('active');
  }

  async function doMapSearch() {
    const q = mapSearchInput.value.trim();
    if (!q) return;

    // Try local city match first
    const local = CITIES.find((c) => c.name.toLowerCase().includes(q.toLowerCase()));
    if (local) {
      showMapView(local.lat, local.lng, 13);
      return;
    }

    // Otherwise use Nominatim
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}&limit=1`;
      const res = await fetch(url);
      const data = await res.json();
      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lng = parseFloat(data[0].lon);
        showMapView(lat, lng, 12);
      } else {
        alert('Location not found');
      }
    } catch (err) {
      console.warn('Search failed', err);
    }
  }

  // ---------- ZOOM ----------
  function zoomBy(factor) {
    const cur = camera.position.length();
    let next = cur * factor;
    next = Math.max(MIN_DIST, Math.min(MAX_DIST, next));
    camera.position.multiplyScalar(next / cur);
    updateZoomUI();

    // Auto-switch to real map when zoomed very close
    if (next <= AUTO_SWITCH_DIST && !isMapViewActive) {
      // Find the closest city or center
      // Just use Pakistan center as default target
      showMapView(30.3753, 69.3451, 12);
    }
  }

  function flyTo(lat, lng, distance) {
    const startDist = camera.position.length();
    const endDist = distance;
    const startTime = performance.now();
    const duration = 1500;
    const startCam = camera.position.clone();

    const targetLat = lat * Math.PI / 180;
    const targetLng = lng * Math.PI / 180;
    const startRotY = targetRotationY;
    const startRotX = targetRotationX;
    const endRotY = -targetLng + Math.PI;
    const endRotX = targetLat;

    function step() {
      const now = performance.now();
      const t = Math.min(1, (now - startTime) / duration);
      const ease = t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t;
      const d = startDist + (endDist - startDist) * ease;
      const dir = startCam.clone().normalize();
      camera.position.copy(dir.multiplyScalar(d));
      camera.lookAt(0, 0, 0);
      targetRotationY = startRotY + (endRotY - startRotY) * ease;
      targetRotationX = startRotX + (endRotX - startRotX) * ease;
      updateZoomUI();
      if (t < 1) requestAnimationFrame(step);
    }
    step();
  }

  // ---------- ZOOM UI ----------
  function updateZoomUI() {
    const dist = camera.position.length();
    const zoom = START_DIST / dist;
    const percent = Math.min(100, Math.max(0, ((MAX_DIST - dist) / (MAX_DIST - MIN_DIST)) * 100));

    zoomFill.style.width = percent + '%';
    zoomMarker.style.left = percent + '%';
    zoomScale.textContent = zoom.toFixed(1) + '×';

    let label = 'WORLD VIEW';
    if (dist < LAYER_THRESHOLDS.countries) label = 'COUNTRY VIEW';
    if (dist < LAYER_THRESHOLDS.states)    label = 'PROVINCE VIEW';
    if (dist < LAYER_THRESHOLDS.cities)    label = 'CITY VIEW';
    if (dist < LAYER_THRESHOLDS.streets)   label = 'STREET VIEW';
    if (dist < LAYER_THRESHOLDS.buildings) label = 'BUILDING VIEW';

    zoomLabel.textContent = label;
    zoomLevelTag.textContent = label.split(' ')[0];

    if (countryBordersGroup) countryBordersGroup.visible = dist < LAYER_THRESHOLDS.countries;
    if (cityGroup)           cityGroup.visible           = dist < LAYER_THRESHOLDS.cities;

    legendItems.forEach((item) => {
      const layer = item.dataset.layer;
      let active = false;
      if (layer === 'countries') active = dist < LAYER_THRESHOLDS.countries;
      if (layer === 'cities')    active = dist < LAYER_THRESHOLDS.cities;
      item.classList.toggle('active', active);
    });
  }

  // ---------- HOVER ----------
  function handleCityHover(e) {
    if (!cityGroup || !cityGroup.visible || isDragging || isMapViewActive) {
      cityTooltip.classList.remove('visible');
      return;
    }
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(allCities, false);
    if (hits.length > 0) {
      const city = hits[0].object.userData;
      const point = hits[0].point.clone().project(camera);
      const x = (point.x * 0.5 + 0.5) * rect.width;
      const y = (-point.y * 0.5 + 0.5) * rect.height;
      tooltipName.textContent = `📍 ${city.name}`;
      tooltipInfo.textContent = `${city.country} · Pop ${city.pop}`;
      cityTooltip.style.left = x + 'px';
      cityTooltip.style.top = y + 'px';
      cityTooltip.classList.add('visible');
    } else {
      cityTooltip.classList.remove('visible');
    }
  }

  // ---------- RESIZE ----------
  function onWindowResize() {
    const w = canvasContainer.clientWidth;
    const h = canvasContainer.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    if (leafletMap) leafletMap.invalidateSize();
  }

  // ---------- ANIMATE ----------
  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    if (autoRotate && !isDragging) targetRotationY += rotationSpeed * delta * 0.3;

    earthGroup.rotation.y += (targetRotationY - earthGroup.rotation.y) * 0.08;
    earthGroup.rotation.x += (targetRotationX - earthGroup.rotation.x) * 0.08;
    earthGroup.updateMatrixWorld();

    if (cloudMesh && cloudsVisible) cloudMesh.rotation.y += delta * 0.03;
    if (nightLightsMesh) nightLightsMesh.material.opacity = 0.8 + Math.sin(elapsed * 3) * 0.1;
    if (moonOrbit) moonOrbit.rotation.y += delta * 0.15;
    if (moonMesh) moonMesh.rotation.y += delta * 0.05;
    if (atmosphereMesh) {
      const p = 1 + Math.sin(elapsed * 2) * 0.015;
      atmosphereMesh.scale.set(p, p, p);
    }
    if (starField) starField.rotation.y += delta * 0.002;

    if (cityGroup) {
      cityGroup.children.forEach((child) => {
        if (child.geometry && child.geometry.type === 'RingGeometry') {
          const phase = child.userData.phase || 0;
          const scale = 1 + Math.sin(elapsed * 3 + phase) * 0.5;
          child.scale.set(scale, scale, 1);
          child.material.opacity = 0.7 - (scale - 1) * 0.4;
        }
      });
    }

    updateCityLabels();

    frameCount++;
    if (elapsed - lastFpsUpdate > 0.5) {
      fpsCounter.textContent = Math.round(frameCount / (elapsed - lastFpsUpdate));
      frameCount = 0;
      lastFpsUpdate = elapsed;
    }

    renderer.render(scene, camera);
  }

  // ---------- START ----------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();