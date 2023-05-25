(self["webpackChunkroute_optimizator"] = self["webpackChunkroute_optimizator"] || []).push([["main"],{

/***/ 1143:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/sourceMaps.js */ 1871);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js */ 3577);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".contents {\r\n\tdisplay: flex;\r\n\theight: 100vh;\r\n}\r\n\r\nlabel {\r\n\tfont-size: 0.75rem;\r\n}\r\n\r\n.col-6 {\r\n\tpadding-left: 0;\r\n\tpadding-right: 0;\r\n}\r\n\r\n.stop-type {\r\n\ttext-decoration: underline;\r\n\topacity: 0.75;\r\n}\r\n\r\n.stop-type:hover {\r\n\topacity: 1;\r\n\tcursor: pointer;\r\n}\r\n\r\n.stop-type.active {\r\n\topacity: 1;\r\n\tcolor: #5f99f7;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/app/app.component.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,aAAa;AACd;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,0BAA0B;CAC1B,aAAa;AACd;;AAEA;CACC,UAAU;CACV,eAAe;AAChB;;AAEA;CACC,UAAU;CACV,cAAc;AACf","sourcesContent":[".contents {\r\n\tdisplay: flex;\r\n\theight: 100vh;\r\n}\r\n\r\nlabel {\r\n\tfont-size: 0.75rem;\r\n}\r\n\r\n.col-6 {\r\n\tpadding-left: 0;\r\n\tpadding-right: 0;\r\n}\r\n\r\n.stop-type {\r\n\ttext-decoration: underline;\r\n\topacity: 0.75;\r\n}\r\n\r\n.stop-type:hover {\r\n\topacity: 1;\r\n\tcursor: pointer;\r\n}\r\n\r\n.stop-type.active {\r\n\topacity: 1;\r\n\tcolor: #5f99f7;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 1143);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _leaflet_icon_glyph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaflet-icon-glyph */ 6921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ 8275);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _customer_addresses_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-addresses.json */ 1532);
/* harmony import */ var polyline_encoded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polyline-encoded */ 9740);
/* harmony import */ var polyline_encoded__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(polyline_encoded__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet-routing-machine */ 4630);
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 4027);
/* harmony import */ var _mapbox_v1_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mapbox-v1.service */ 3546);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let AppComponent = (_class = class AppComponent {
  constructor(confirmationService, mapboxService, leafletIconGlyphService) {
    this.confirmationService = confirmationService;
    this.mapboxService = mapboxService;
    this.leafletIconGlyphService = leafletIconGlyphService;
    // LOCATIONS + MODAL
    this.showCustomerAddressesModal = false;
    this.locations = [];
    this.selectedLocations = [];
    this.tmpSelectedLocations = [];
    this.tmpSelectedLocation = {};
    this.suggestedLocations = [];
    // STOP OPTIONS
    this.startTime = "";
    this.endTime = "";
    this.stopOptions = [{
      name: "Parada por descarga",
      id: 1
    }, {
      name: "Parada por repostaje",
      id: 2
    }, {
      name: "Parada por descanso",
      id: 3
    }];
    this.selectedStopOptions = [];
    // FILTERS
    this.selectedFilters = [];
    // Calculate
    this.totalDuration = "";
    this.travelDuration = "";
    this.droppoffsDurations = "";
    // MAP!!
    this.options = {
      layers: [(0,leaflet__WEBPACK_IMPORTED_MODULE_3__.tileLayer)("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors"
      })],
      zoom: 2,
      center: (0,leaflet__WEBPACK_IMPORTED_MODULE_3__.latLng)(46.879966, -121.726909)
    };
    this.map = undefined;
    this.routingControl = undefined;
    this.leafletIconGlyphService.setup();
    this.locations = _customer_addresses_json__WEBPACK_IMPORTED_MODULE_4__.data.map(address => {
      address.isOrigin = false;
      address.isDestination = false;
      return address;
    });
  }
  onAddNewCustomAddressButtonClicked() {
    this.tmpSelectedLocations = [...this.selectedLocations];
    this.showCustomerAddressesModal = true;
  }
  suggestLocations(event) {
    const selectedIds = this.selectedLocations.map(location => location.id);
    this.suggestedLocations = this.locations.filter(location => !selectedIds.includes(location.id)).filter(location => location.company.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
  }
  onLocationSelected() {
    if (this.tmpSelectedLocation.id) {
      this.tmpSelectedLocations = [...this.tmpSelectedLocations, {
        ...this.tmpSelectedLocation
      }];
      this.tmpSelectedLocation = "";
    }
  }
  onAddTmpLocationsButtonClicked(event) {
    const matches = this.tmpSelectedLocations.filter(location => location.isOrigin || location.isDestination);
    if (matches && matches.length == 2) {
      this.selectedLocations = [...this.tmpSelectedLocations];
      this.tmpSelectedLocations = [];
      this.showCustomerAddressesModal = false;
    } else {
      let msg = "Es obligatorio marcar una dirección de origen y otra de destino.";
      if (matches.length == 1) {
        if (matches[0].isOrigin) {
          msg = "Es obligatorio marcar una dirección de destino.";
        } else {
          msg = "Es obligatorio marcar una dirección de origen.";
        }
      }
      this.confirmationService.confirm({
        target: event.target,
        message: msg,
        acceptLabel: "Aceptar",
        rejectVisible: false,
        icon: "pi pi-exclamation-triangle",
        accept: () => {},
        reject: () => {
          this.showCustomerAddressesModal = false;
        }
      });
    }
  }
  resetOrigin() {
    this.tmpSelectedLocations = this.tmpSelectedLocations.map(location => {
      location.isOrigin = false;
      return location;
    });
  }
  resetDestination() {
    this.tmpSelectedLocations = this.tmpSelectedLocations.map(location => {
      location.isDestination = false;
      return location;
    });
  }
  getOriginLocation() {
    const match = this.selectedLocations.find(location => location.isOrigin);
    if (match) {
      return match;
    }
    return {
      company: ""
    };
  }
  getIntermediateLocations() {
    return this.selectedLocations.filter(location => !location.isOrigin && !location.isDestination);
  }
  getDestinationLocation() {
    const match = this.selectedLocations.find(location => location.isDestination);
    if (match) {
      return match;
    }
    return {
      company: ""
    };
  }
  onAddStopOptionButtonClicked() {
    this.selectedStopOptions = [...JSON.parse(JSON.stringify(this.selectedStopOptions || [])), {
      id: 0,
      time: ""
    }];
  }
  onCalculateRouteButtonClicked() {
    const origin = this.selectedLocations.find(location => location.isOrigin);
    const destination = this.selectedLocations.find(location => location.isDestination);
    const stops = this.selectedLocations.filter(location => !location.isOrigin && !location.isDestination);
    this.mapboxService.calculate({
      origin: origin,
      destination: destination,
      stops: stops,
      stopOptions: this.selectedStopOptions,
      startTime: this.startTime,
      endTime: this.endTime
    }).subscribe(res => {
      console.log("RESPUESTA de mapbox", res);
      if (res.solution) {
        const waypoints = res.solution.map(location => L.latLng(location.latitude, location.longitude));
        this.routingControl.setWaypoints(waypoints);
        this.selectedLocations = res.solution;
        const polylineDecoded = polyline_encoded__WEBPACK_IMPORTED_MODULE_5__.decode(res.trips[0].geometry);
        this.droppoffsDurations = this.secondsToHoursAndMinutes(this.stopsToSeconds());
        this.travelDuration = this.secondsToHoursAndMinutes(res.trips[0].duration);
        this.totalDuration = this.secondsToHoursAndMinutes(res.trips[0].duration + this.stopsToSeconds());
        L.geoJSON(polylineDecoded).addTo(this.map);
      }
    });
  }
  stopsToSeconds() {
    let total = 0;
    for (let stop of this.selectedStopOptions) {
      if (stop.id) {
        const [h, m] = stop.time.split(":");
        const hours = Number.parseInt(h) * 60 * 60;
        const minutes = Number.parseInt(m) * 60;
        total += hours + minutes;
      }
    }
    return total;
  }
  secondsToHoursAndMinutes(d) {
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);
    return `${h}h ${m}m ${s}s`;
  }
  onMapReady(map) {
    this.map = map;
    this.routingControl = L.Routing.control({
      show: false,
      draggableWaypoints: false,
      waypoints: [],
      showAlternatives: false,
      routeWhileDragging: false,
      lineOptions: {
        styles: [{
          color: "#5f99f7",
          dashArray: "5,10",
          opacity: 1,
          weight: 5
        }]
      },
      createMarker: (i, wp) => {
        return L.marker(wp.latLng, {
          icon: L.icon.glyph({
            prefix: "",
            glyph: i + 1 + ""
          })
        });
      }
    }).addTo(map);
  }
}, _class.ctorParameters = () => [{
  type: primeng_api__WEBPACK_IMPORTED_MODULE_8__.ConfirmationService
}, {
  type: _mapbox_v1_service__WEBPACK_IMPORTED_MODULE_7__.MapboxV1Service
}, {
  type: _leaflet_icon_glyph__WEBPACK_IMPORTED_MODULE_2__.LeafletIconGlyphService
}], _class);
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: "app-root",
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 3878);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 5236);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 7808);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3557);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 8674);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/scrollpanel */ 7899);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ 2176);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputmask */ 8382);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/divider */ 9244);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/checkbox */ 9516);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ 5235);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/autocomplete */ 841);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tooltip */ 3451);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/confirmpopup */ 979);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ 4027);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 2474);
/* harmony import */ var _leaflet_icon_glyph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaflet-icon-glyph */ 6921);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__.LeafletModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__.AutoCompleteModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_10__.ScrollPanelModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.DropdownModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__.InputMaskModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_divider__WEBPACK_IMPORTED_MODULE_13__.DividerModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__.CheckboxModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_15__.DialogModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__.TooltipModule, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_17__.ConfirmPopupModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule],
  providers: [primeng_api__WEBPACK_IMPORTED_MODULE_19__.ConfirmationService, _leaflet_icon_glyph__WEBPACK_IMPORTED_MODULE_1__.LeafletIconGlyphService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 6921:
/*!***************************************!*\
  !*** ./src/app/leaflet-icon-glyph.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeafletIconGlyphService": () => (/* binding */ LeafletIconGlyphService)
/* harmony export */ });
class LeafletIconGlyphService {
  constructor() {
    this.setup();
  }
  setup() {
    L.Icon.Glyph = L.Icon.extend({
      options: {
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
        // 		iconUrl: 'glyph-marker-icon.png',
        // 		iconSize: [35, 45],
        // 		iconAnchor:   [17, 42],
        // 		popupAnchor: [1, -32],
        // 		shadowAnchor: [10, 12],
        // 		shadowSize: [36, 16],
        // 		bgPos: (Point)
        className: "",
        prefix: "",
        glyph: "home",
        glyphColor: "white",
        glyphSize: "11px",
        glyphAnchor: [0, -7] // In pixels, counting from the center of the image.
      },

      createIcon: function () {
        var div = document.createElement("div"),
          options = this.options;
        if (options.glyph) {
          div.appendChild(this._createGlyph());
        }
        this._setIconStyles(div, options.className);
        return div;
      },
      _createGlyph: function () {
        var glyphClass,
          textContent,
          options = this.options;
        if (!options.prefix) {
          glyphClass = "";
          textContent = options.glyph;
        } else if (options.prefix === "fab" || options.prefix === "fal" || options.prefix === "far" || options.prefix === "fas") {
          // Hack for Font Awesome 5 - it needs two different prefixes.
          glyphClass = "fa-" + options.glyph;
        } else if (options.glyph.slice(0, options.prefix.length + 1) === options.prefix + "-") {
          glyphClass = options.glyph;
        } else {
          glyphClass = options.prefix + "-" + options.glyph;
        }
        var span = L.DomUtil.create("span", options.prefix + " " + glyphClass);
        span.style.fontSize = options.glyphSize;
        span.style.color = options.glyphColor;
        span.style.width = options.iconSize[0] + "px";
        span.style.lineHeight = options.iconSize[1] + "px";
        span.style.textAlign = "center";
        span.style.marginLeft = options.glyphAnchor[0] + "px";
        span.style.marginTop = options.glyphAnchor[1] + "px";
        span.style.pointerEvents = "none";
        span.style.display = "inline-block";
        if (textContent) {
          span.innerHTML = textContent;
        }
        return span;
      },
      _setIconStyles: function (div, name) {
        if (name === "shadow") {
          return L.Icon.prototype._setIconStyles.call(this, div, name);
        }
        var options = this.options,
          size = L.point(options["iconSize"]),
          anchor = L.point(options.iconAnchor);
        if (!anchor && size) {
          anchor = size.divideBy(2, true);
        }
        div.className = "leaflet-marker-icon leaflet-glyph-icon " + name;
        var src = this._getIconUrl("icon");
        if (src) {
          div.style.backgroundImage = "url('" + src + "')";
        }
        if (options.bgPos) {
          div.style.backgroundPosition = -options.bgPos.x + "px " + -options.bgPos.y + "px";
        }
        if (options.bgSize) {
          div.style.backgroundSize = options.bgSize.x + "px " + options.bgSize.y + "px";
        }
        if (anchor) {
          div.style.marginLeft = -anchor.x + "px";
          div.style.marginTop = -anchor.y + "px";
        }
        if (size) {
          div.style.width = size.x + "px";
          div.style.height = size.y + "px";
        }
      }
    });
    L.icon.glyph = function (options) {
      return new L.Icon.Glyph(options);
    };
    // Base64-encoded version of glyph-marker-icon.png
    L.Icon.Glyph.prototype.options.iconUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUlSURBVFjDrZdLiBxVFIb/e289uqt6kkx6zIiIoKgLRReKuMhCcaOIAUEIiCCE4CIPggZ8kBjooPgM0TiYEUUjqBGchZqAQlyYRTA+kJiJQiJGMjN5zYzT3dP1rrr3HBeTjDGTSfc8Dvyruud89Z9z6kIJdBj31763MivsJXKuZYF6dak5++2mh7NOcsXVHq6sHbhOK/24kOJJMO4AE1vKygwZhxlKSHGKiD+RSu09vOXB43OCrHz96y6T2lsh+OmKXzFdlbLne2UopSAupBhjECcZgjDMgiiSxPhcK/nCr1sfOtcWcm/tq9uEsL4rl0vdK67pKVu2jUwTMk0wBBAzpBCQAnAtiZIlwWQwPlHPglZQAFj1Y23VwVkh92zbd59U+Kanp+p2L12mooKQ5AbcpuclS6LiKoRhxOfHzhXMcs3PtVV7Z0DufXH/LSzpSG9vr1/p6kIz0dDUrvx/IYXAsrJCkWc4e/Z0Zpgf+KX26A/TkNtrXziesY9Xq8tvWNZdVfVYg7hzwKVv3O3ZiKMWj46OTrq5fdOh1x5pSADwjdzo2nbv0u6qqkca2jCIMGcZAuqRhu8vEX7ZK2V2WgMAcXdtvyeKbPS662+osCohzMycHVweniNREoShoZO5KYobpciSh23bFq7rIUgNiLFghRkBlg2v7GlpiccsCHrcryzxUk3zmsNskeYGvt/lxVH4hMWEu9xSWaQFYQ7L1B6iGZ5bBoy+zWKiHiltFHpqeIsVhWaosg1iqlgg4wAAEYEXsV3EmNppJmExMFYUxfVSuIs6E0sI5FkBBhLJzH9laQxLSjBj0WQJgSJPweDTkknvS4JGbCuxKOt7UY4lEQfNnAu9TzLxN2nUdAQTLAEw8YIlAVgAkmDCSBL75eCutSeY+GTUqqNkqUVxUbIl4qgJo4vWzecrhyQAMJldYf1MXLLl1EIsYBZgoGwpRI2zMTPtGBhYbSQAlJF9lieRzNMIriVBzPOWawvoIkYaNC0u9IcAIAHgp75NLQl8ENbPZJ6jgAU48RyFqHEuZyE+Pda/vjENAQBD5s209Y+kPJlyM4+r3lUS0AWSyVEhpHnjYu1pyO+7N4ywwPvhxHDiuwo8j1b5rkQwMZIziYHBXetPzIAAgIV8exZOSMoieI6aU5vKtgR0jqw1JtiYbZfW/R/kSN+mcWbxdtwYjn1XTd9B7cQAfNdCWB/OhBR7jvWv/3tWCAAoO3ktjyZZJ0HHbsq2AooERVQXzPKly2vOgPz29jNNBr+e1IcSz5YAM4hmFzPDtyWS+lDK4N2DfU+dbgsBAFHyd+oszE3agt/GjWcrUBEjj5sQBb96pXpXhAzueDJi4u1p41TsuQpCiFln4bkKeXMoJeadg++tG+sYAgBBXOo3RRrruAnfkWDmGfIdCeQhiiQgQbxjtlqzQk59vCZlNluL5lDiORLyMjcA4DsKeXM4AfDKxa97ThAAqPaMfaR1Nq6jOiqOAhOm5TsKJg1QZGGRedY7V6tzVcjBWk1D0JZ8cigt2RJSimkXnqOgW8MxQLUTb6wN5g0BgGPV0c9BekTH41xx5YXrQ8FkTRgdpxU7ea9djbYQ1GokmJ43wUhWtgRcS04tQjAcw9CWw29tThYOAXD03XVfMps/TTTOy30blDZgiqxFK6p7OsnvCDJ1UD9LyUjORoPDkUQyPfdHbXW+qJCjfRsOwOAoNY4z6Xz01rHq3k5zO4ZMHTabYSIhJD87MLB64f8Ys8WdG/tfBljMJedfwY+s/2P4Pv8AAAAASUVORK5CYII=";
  }
}

/***/ }),

/***/ 3546:
/*!**************************************!*\
  !*** ./src/app/mapbox-v1.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapboxV1Service": () => (/* binding */ MapboxV1Service)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 2474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9258);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let MapboxV1Service = (_class = class MapboxV1Service {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  calculate({
    origin,
    destination,
    stops,
    stopOptions,
    startTime,
    endTime
  }) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      "Content-Type": "application/json"
    });
    const coordinates = [origin, ...stops, destination].map(stop => `${stop.longitude},${stop.latitude}`).join(";");
    return this.httpClient.get(`https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${coordinates}?source=first&destination=last&access_token=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mapboxToken}`, {
      headers: headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      res.solution = this.getSolutionWaypoints(res, [origin, ...stops, destination]);
      return res;
    }));
  }
  getSolutionWaypoints(res, locations) {
    const copy = [...locations];
    let sorted = [];
    if (res && res.waypoints) {
      for (let i = 0; i < res.waypoints.length; i++) {
        copy[i].order = res.waypoints[i].waypoint_index;
      }
      sorted = copy.sort((a, b) => a.order - b.order);
    }
    return sorted;
  }
}, _class.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}], _class);
MapboxV1Service = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: "root"
})], MapboxV1Service);


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  mapboxToken: "pk.eyJ1IjoibmlhYmgiLCJhIjoiY2xpMmVydW9kMGk4MzNybzNnaTJkcGRjZyJ9.RQV-lyZFmI2ERiHTUu5Low"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4877);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"contents\">\n\t<p-scrollPanel\n\t\t[style]=\"{\n\t\t\twidth: '29rem',\n\t\t\theight: '100%'\n\t\t}\"\n\t>\n\t\t<div [style]=\"'margin: 1rem 2.5rem 0 2.5rem'\">\n\t\t\t<h3 class=\"p-dialog-title\">Diseña y Optimiza tu ruta</h3>\n\n\t\t\t<!-- DIRECCIONES-->\n\t\t\t<div class=\"flex md:justify-content-end\">\n\t\t\t\t<p-button\n\t\t\t\t\tlabel=\"Añadir dirección\"\n\t\t\t\t\tstyleClass=\"p-button-text\"\n\t\t\t\t\t(click)=\"onAddNewCustomAddressButtonClicked()\"\n\t\t\t\t></p-button>\n\t\t\t</div>\n\t\t\t<p-scrollPanel\n\t\t\t\t[style]=\"{\n\t\t\t\t\twidth: '100%',\n\t\t\t\t\tmaxHeight: '15rem',\n\t\t\t\t\tmargin: 0,\n\t\t\t\t\tpadding: 0\n\t\t\t\t}\"\n\t\t\t>\n\t\t\t\t<div\n\t\t\t\t\tclass=\"flex flex-column row-gap-3\"\n\t\t\t\t\tstyle=\"margin: 1rem 0 1rem 0\"\n\t\t\t\t>\n\t\t\t\t\t<div class=\"flex flex-column row-gap-1\">\n\t\t\t\t\t\t<label htmlFor=\"origin-location\"\n\t\t\t\t\t\t\t>Dirección de origen</label\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tpInputText\n\t\t\t\t\t\t\tid=\"origin-location\"\n\t\t\t\t\t\t\tplaceholder=\"Añadir dirección\"\n\t\t\t\t\t\t\t[ngModel]=\"getOriginLocation().company\"\n\t\t\t\t\t\t\tdisabled\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass=\"flex flex-column row-gap-1\"\n\t\t\t\t\t\t*ngFor=\"\n\t\t\t\t\t\t\tlet location of selectedLocations.length > 0\n\t\t\t\t\t\t\t\t? getIntermediateLocations()\n\t\t\t\t\t\t\t\t: ['', ''];\n\t\t\t\t\t\t\tlet i = index\n\t\t\t\t\t\t\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<label [htmlFor]=\"'stop-location-' + (i + 1)\"\n\t\t\t\t\t\t\t>Parada {{ i + 1 }}</label\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tpInputText\n\t\t\t\t\t\t\t[id]=\"'stop-location-' + (i + 1)\"\n\t\t\t\t\t\t\tplaceholder=\"Añadir dirección\"\n\t\t\t\t\t\t\t[ngModel]=\"location.company\"\n\t\t\t\t\t\t\tdisabled\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"flex flex-column row-gap-1\">\n\t\t\t\t\t\t<label htmlFor=\"destination-location\"\n\t\t\t\t\t\t\t>Dirección de destino</label\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tpInputText\n\t\t\t\t\t\t\tid=\"destination-location\"\n\t\t\t\t\t\t\t[ngModel]=\"getDestinationLocation().company\"\n\t\t\t\t\t\t\tplaceholder=\"Añadir dirección\"\n\t\t\t\t\t\t\tdisabled\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</p-scrollPanel>\n\n\t\t\t<!-- TIPOS DE PARADA-->\n\t\t\t<div style=\"margin-top: 2rem\" *ngIf=\"selectedStopOptions\">\n\t\t\t\t<div\n\t\t\t\t\tclass=\"flex justify-content-between column-gap-3\"\n\t\t\t\t\tstyle=\"margin-top: 1rem\"\n\t\t\t\t\t*ngFor=\"let selected of selectedStopOptions; let i = index\"\n\t\t\t\t>\n\t\t\t\t\t<div class=\"flex flex-column row-gap-1\" style=\"width: 50%\">\n\t\t\t\t\t\t<label htmlFor=\"origin-location\">Tipo de parada</label>\n\t\t\t\t\t\t<p-dropdown\n\t\t\t\t\t\t\t[options]=\"stopOptions\"\n\t\t\t\t\t\t\toptionLabel=\"name\"\n\t\t\t\t\t\t\toptionValue=\"id\"\n\t\t\t\t\t\t\tplaceholder=\"Añadir tipo de parada\"\n\t\t\t\t\t\t\t[(ngModel)]=\"selectedStopOptions[i].id\"\n\t\t\t\t\t\t></p-dropdown>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"flex flex-column row-gap-1\">\n\t\t\t\t\t\t<label\n\t\t\t\t\t\t\thtmlFor=\"origin-location\"\n\t\t\t\t\t\t\tpTooltip=\"Tiempo extra que haya que tener en cuenta\"\n\t\t\t\t\t\t\t>Duración de parada*</label\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div class=\"p-inputgroup w-full\">\n\t\t\t\t\t\t\t<p-inputMask\n\t\t\t\t\t\t\t\tmask=\"99:99\"\n\t\t\t\t\t\t\t\tplaceholder=\"00:00\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"selectedStopOptions[i].time\"\n\t\t\t\t\t\t\t\t[style]=\"{\n\t\t\t\t\t\t\t\t\twidth: '4rem',\n\t\t\t\t\t\t\t\t\tborderTopRightRadius: '0',\n\t\t\t\t\t\t\t\t\tborderBottomRightRadius: '0'\n\t\t\t\t\t\t\t\t}\"\n\t\t\t\t\t\t\t></p-inputMask>\n\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\tstyle=\"width: 0.5rem\"\n\t\t\t\t\t\t\t\tclass=\"p-inputgroup-addon\"\n\t\t\t\t\t\t\t\t>X1</span\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"flex md:justify-content-end\" style=\"margin-top: 1rem\">\n\t\t\t\t<p-button\n\t\t\t\t\tlabel=\"+ Añadir tiempo de parada\"\n\t\t\t\t\tstyleClass=\"p-button-text\"\n\t\t\t\t\t(click)=\"onAddStopOptionButtonClicked()\"\n\t\t\t\t\t[disabled]=\"\n\t\t\t\t\t\tselectedStopOptions.length > 0 &&\n\t\t\t\t\t\t(selectedStopOptions[selectedStopOptions.length - 1]\n\t\t\t\t\t\t\t.id === 0 ||\n\t\t\t\t\t\t\tselectedStopOptions[selectedStopOptions.length - 1]\n\t\t\t\t\t\t\t\t.time === '')\n\t\t\t\t\t\"\n\t\t\t\t></p-button>\n\t\t\t</div>\n\n\t\t\t<p-divider></p-divider>\n\n\t\t\t<!-- FILTROS -->\n\t\t\t<div class=\"flex flex-column row-gap-3\">\n\t\t\t\t<div class=\"flex justify-content-between column-gap-3\">\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass=\"flex flex-column row-gap-1 col-6\"\n\t\t\t\t\t\tstyle=\"max-width: 46%\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<label htmlFor=\"start-time\">Hora de salida</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tpInputText\n\t\t\t\t\t\t\tid=\"start-time\"\n\t\t\t\t\t\t\t[(ngModel)]=\"startTime\"\n\t\t\t\t\t\t\tmask=\"99:99\"\n\t\t\t\t\t\t\tplaceholder=\"00:00\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass=\"flex flex-column row-gap-1 col-6\"\n\t\t\t\t\t\tstyle=\"max-width: 46%\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<label htmlFor=\"end-time\">Hora de llegada</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tpInputText\n\t\t\t\t\t\t\tid=\"end-time\"\n\t\t\t\t\t\t\t[(ngModel)]=\"endTime\"\n\t\t\t\t\t\t\tmask=\"99:99\"\n\t\t\t\t\t\t\tplaceholder=\"00:00\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"flex flex-column row-gap-1\">\n\t\t\t\t\t<label htmlFor=\"avoid-filters\">Evitar</label>\n\t\t\t\t\t<div class=\"flex justify-content-between\">\n\t\t\t\t\t\t<div class=\"flex align-items-center gap-1\">\n\t\t\t\t\t\t\t<p-checkbox\n\t\t\t\t\t\t\t\tname=\"selected-filters\"\n\t\t\t\t\t\t\t\tvalue=\"highway\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"selectedFilters\"\n\t\t\t\t\t\t\t\tinputId=\"highway\"\n\t\t\t\t\t\t\t></p-checkbox>\n\t\t\t\t\t\t\t<label for=\"ny\">Autopista</label>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"flex align-items-center gap-1\">\n\t\t\t\t\t\t\t<p-checkbox\n\t\t\t\t\t\t\t\tname=\"selected-filters\"\n\t\t\t\t\t\t\t\tvalue=\"toll\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"selectedFilters\"\n\t\t\t\t\t\t\t\tinputId=\"toll\"\n\t\t\t\t\t\t\t></p-checkbox>\n\t\t\t\t\t\t\t<label for=\"sf\">Peajes</label>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"flex align-items-center gap-1\">\n\t\t\t\t\t\t\t<p-checkbox\n\t\t\t\t\t\t\t\tname=\"selected-filters\"\n\t\t\t\t\t\t\t\tvalue=\"ferries\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"selectedFilters\"\n\t\t\t\t\t\t\t\tinputId=\"ferries\"\n\t\t\t\t\t\t\t></p-checkbox>\n\t\t\t\t\t\t\t<label for=\"la\">Ferris</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<!-- BOTÓN -->\n\t\t\t<div\n\t\t\t\tclass=\"flex justify-content-center\"\n\t\t\t\t[style]=\"'margin-top: 3rem; margin-bottom: 2rem'\"\n\t\t\t>\n\t\t\t\t<p-button\n\t\t\t\t\t(click)=\"onCalculateRouteButtonClicked()\"\n\t\t\t\t\tlabel=\"Calcular y ordenar ruta\"\n\t\t\t\t\t[disabled]=\"selectedLocations.length == 0\"\n\t\t\t\t></p-button>\n\t\t\t</div>\n\t\t</div>\n\t</p-scrollPanel>\n\t<div style=\"height: 100%; width: 100%\">\n\t\t<div\n\t\t\tclass=\"column-gap-4\"\n\t\t\t[class.flex]=\"totalDuration\"\n\t\t\t[hidden]=\"!totalDuration\"\n\t\t\tstyle=\"width: 100%; padding: 1rem; padding-left: 0\"\n\t\t>\n\t\t\t<div class=\"flex flex-column row-gap-1\">\n\t\t\t\t<label htmlFor=\"total-duration\"\n\t\t\t\t\t>Duración total del recorrido</label\n\t\t\t\t>\n\t\t\t\t<input\n\t\t\t\t\tpInputText\n\t\t\t\t\tid=\"total-duration\"\n\t\t\t\t\t[(ngModel)]=\"totalDuration\"\n\t\t\t\t\tdisabled\n\t\t\t\t/>\n\t\t\t</div>\n\t\t\t<div class=\"flex flex-column row-gap-1\">\n\t\t\t\t<label htmlFor=\"travel-duration\">Tiempo en carretera</label>\n\t\t\t\t<input\n\t\t\t\t\tpInputText\n\t\t\t\t\tid=\"travel-duration\"\n\t\t\t\t\t[(ngModel)]=\"travelDuration\"\n\t\t\t\t\tdisabled\n\t\t\t\t/>\n\t\t\t</div>\n\t\t\t<div class=\"flex flex-column row-gap-1\">\n\t\t\t\t<label htmlFor=\"dropoffs-duration\">Tiempo en parada</label>\n\t\t\t\t<input\n\t\t\t\t\tpInputText\n\t\t\t\t\tid=\"dropoffs-duration\"\n\t\t\t\t\t[(ngModel)]=\"droppoffsDurations\"\n\t\t\t\t\tdisabled\n\t\t\t\t/>\n\t\t\t</div>\n\t\t</div>\n\t\t<div\n\t\t\tstyle=\"height: 100%; width: 100%; overflow: hidden\"\n\t\t\t[style.height]=\"!totalDuration ? '100%' : '86%'\"\n\t\t\tleaflet\n\t\t\t[leafletOptions]=\"options\"\n\t\t\t(leafletMapReady)=\"onMapReady($event)\"\n\t\t></div>\n\t</div>\n</div>\n\n<!-- MODAL -->\n<p-dialog\n\theader=\"Mi biblioteca de clientes\"\n\t[(visible)]=\"showCustomerAddressesModal\"\n\t[modal]=\"true\"\n\t[style]=\"{ width: '50vw' }\"\n\t[draggable]=\"false\"\n\t[resizable]=\"false\"\n>\n\t<div\n\t\tclass=\"flex col-12 column-gap-3\"\n\t\tstyle=\"padding-bottom: 0; padding-top: 0\"\n\t>\n\t\t<div class=\"col-6\" style=\"padding-bottom: 0\">\n\t\t\t<p-autoComplete\n\t\t\t\t[(ngModel)]=\"tmpSelectedLocation\"\n\t\t\t\t(ngModelChange)=\"onLocationSelected()\"\n\t\t\t\t[suggestions]=\"suggestedLocations\"\n\t\t\t\t(completeMethod)=\"suggestLocations($event)\"\n\t\t\t\tplaceholder=\"Buscar dirección\"\n\t\t\t\tshowClear=\"true\"\n\t\t\t\tfield=\"company\"\n\t\t\t\t[style]=\"{ display: 'block', width: '100%' }\"\n\t\t\t\t[inputStyle]=\"{ width: '100%' }\"\n\t\t\t></p-autoComplete>\n\t\t\t<p-scrollPanel\n\t\t\t\t[style]=\"{\n\t\t\t\t\theight: '15rem'\n\t\t\t\t}\"\n\t\t\t>\n\t\t\t\t<div\n\t\t\t\t\tstyle=\"padding: 0.5rem; padding-bottom: 0; padding-left: 0\"\n\t\t\t\t>\n\t\t\t\t\t<div\n\t\t\t\t\t\t*ngFor=\"let location of locations\"\n\t\t\t\t\t\tclass=\"field-checkbox\"\n\t\t\t\t\t\tstyle=\"margin-top: 1rem\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<p-checkbox\n\t\t\t\t\t\t\tname=\"tmp-locations\"\n\t\t\t\t\t\t\t[inputId]=\"location.id\"\n\t\t\t\t\t\t\t[value]=\"location\"\n\t\t\t\t\t\t\t[(ngModel)]=\"tmpSelectedLocations\"\n\t\t\t\t\t\t></p-checkbox>\n\t\t\t\t\t\t<label [for]=\"location.id\">{{\n\t\t\t\t\t\t\tlocation.company\n\t\t\t\t\t\t}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</p-scrollPanel>\n\t\t</div>\n\t\t<div class=\"col-6\">\n\t\t\t<div style=\"margin-top: 1rem\">\n\t\t\t\t<label>Direcciones seleccionadas:</label>\n\t\t\t</div>\n\t\t\t<p-scrollPanel\n\t\t\t\t[style]=\"{\n\t\t\t\t\theight: '10rem'\n\t\t\t\t}\"\n\t\t\t>\n\t\t\t\t<div\n\t\t\t\t\tclass=\"flex flex-column row-gap-4\"\n\t\t\t\t\tstyle=\"padding: 0.5rem; padding-left: 0\"\n\t\t\t\t>\n\t\t\t\t\t<div style=\"margin-top: 1rem\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngFor=\"let selected of tmpSelectedLocations\"\n\t\t\t\t\t\t\tclass=\"flex justify-content-between\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div class=\"field-checkbox\">\n\t\t\t\t\t\t\t\t<p-checkbox\n\t\t\t\t\t\t\t\t\tname=\"tmp-locations\"\n\t\t\t\t\t\t\t\t\t[inputId]=\"selected.id\"\n\t\t\t\t\t\t\t\t\t[value]=\"selected\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"tmpSelectedLocations\"\n\t\t\t\t\t\t\t\t></p-checkbox>\n\t\t\t\t\t\t\t\t<label\n\t\t\t\t\t\t\t\t\t[for]=\"selected.id\"\n\t\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\t\tmargin-right: 0.5rem;\n\t\t\t\t\t\t\t\t\t\tmargin-left: 0.5rem;\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t\t>{{ selected.company }}</label\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"flex gap-2\">\n\t\t\t\t\t\t\t\t<label\n\t\t\t\t\t\t\t\t\tclass=\"stop-type\"\n\t\t\t\t\t\t\t\t\t[class.active]=\"selected.isOrigin\"\n\t\t\t\t\t\t\t\t\t(click)=\"\n\t\t\t\t\t\t\t\t\t\tresetOrigin();\n\t\t\t\t\t\t\t\t\t\tselected.isOrigin = !selected.isOrigin\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t\t>Salida</label\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<label\n\t\t\t\t\t\t\t\t\tclass=\"stop-type\"\n\t\t\t\t\t\t\t\t\t[class.active]=\"selected.isDestination\"\n\t\t\t\t\t\t\t\t\t(click)=\"\n\t\t\t\t\t\t\t\t\t\tresetDestination();\n\t\t\t\t\t\t\t\t\t\tselected.isDestination =\n\t\t\t\t\t\t\t\t\t\t\t!selected.isDestination\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t\t>Destino</label\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</p-scrollPanel>\n\t\t\t<p-divider></p-divider>\n\t\t\t<!-- BOTÓN -->\n\t\t\t<div class=\"flex justify-content-center\">\n\t\t\t\t<p-button\n\t\t\t\t\t[label]=\"\n\t\t\t\t\t\t'Añadir ' + tmpSelectedLocations.length + ' destinos'\n\t\t\t\t\t\"\n\t\t\t\t\t(click)=\"onAddTmpLocationsButtonClicked($event)\"\n\t\t\t\t\t[disabled]=\"tmpSelectedLocations.length === 0\"\n\t\t\t\t\tclass=\"is-invalid\"\n\t\t\t\t></p-button>\n\t\t\t\t<p-confirmPopup></p-confirmPopup>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</p-dialog>\n";

/***/ }),

/***/ 1532:
/*!*****************************************!*\
  !*** ./src/app/customer-addresses.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":[{"id":0,"company":"Almacén","street":"Poligono Industrial Trapaga-Ugarte, Carretera, BI-3746","postalCode":"48510","locality":"Valle de Trápaga-Trapagaran","province":"Vizcaya","latitude":43.29999378879064,"longitude":-3.0166534815507715},{"id":1,"company":"San Jorge hotela","street":"Plaza de Antonio Alzaga, 51","postalCode":"48980","locality":"Santurce","province":"Vizcaya","latitude":43.32264866661891,"longitude":-3.0309646055149218},{"id":2,"company":"Estación de Servicio Petronor - Repsol Mungia","street":"Bi-3121, 24, 2 D","postalCode":"48610","locality":"Mungia","province":"Vizcaya","latitude":43.366701143717904,"longitude":-2.9227744691202404},{"id":3,"company":"Aloka Rooms Sopela","street":"Goiene Kalea, 6","postalCode":"48600","locality":"Sopela","province":"Vizcaya","latitude":43.381809471897064,"longitude":-2.985463511821506},{"id":4,"company":"Asador Urizar Erretegia","street":"Carretera Alto Andraka-Armintza, 32","postalCode":"48620","locality":"Lemoiz","province":"Vizcaya","latitude":43.403316543270044,"longitude":-2.9080533729798224},{"id":5,"company":"Casa Rural Errota-barri","street":"Bidea, Bajo (CASERIO ERROTABARRI, Zumetxaga Bidea), 6","postalCode":"48120","locality":"Mungia","province":"Vizcaya","latitude":43.38161728682207,"longitude":-2.8240382379346602},{"id":6,"company":"EROSKI ABADIÑO","street":"Murueta","postalCode":"48220","locality":"Abadiño","province":"Vizcaya","latitude":43.173241391563835,"longitude":-2.6173965805483146},{"id":7,"company":"Casa Cámara","street":"Donibane, 79","postalCode":"20110","locality":"Abadiño","province":"Guipúzcoa","latitude":43.328094822121706,"longitude":-1.9144679051145286},{"id":8,"company":"Alcampo Oiartzun","street":"C.C. Mamut, Astigarrako Bidea, 4","postalCode":"20180","locality":"Oiartzun","province":"Guipúzcoa","latitude":43.30227780138663,"longitude":-1.882358398645203},{"id":9,"company":"Fuerte De San Marcos","street":"33, San Marko Gunea Aldea","postalCode":"20100","locality":"Errenteria","province":"Guipúzcoa","latitude":43.299368153782304,"longitude":-1.9139681456509519},{"id":10,"company":"Lidl Hernani","street":"Florida Auzoa, 23","postalCode":"20120","locality":"Hernani","province":"Guipúzcoa","latitude":43.272483159354266,"longitude":-1.9712733362274009},{"id":11,"company":"Centro Comercial Urbil","street":"Bo. Txiki-Erdi, 7","postalCode":"20170","locality":"Usurbil","province":"Guipúzcoa","latitude":43.27680460207754,"longitude":-2.023851415492336},{"id":12,"company":"Saizar Sagardotegia","street":"Kalezar Auzoa, 39","postalCode":"20170","locality":"Usurbil","province":"Guipúzcoa","latitude":43.27662247139709,"longitude":-2.0413627396966088},{"id":13,"company":"Adarra Jatetxea","street":"Lugar Barrio Goiburu, 37","postalCode":"20130","locality":"Urnieta","province":"Guipúzcoa","latitude":43.22834634110119,"longitude":-1.9854892935783612},{"id":14,"company":"Ama Jatetxea","street":"Martin Jose Iraola Hiribidea, 4","postalCode":"20400","locality":"Tolosa","province":"Guipúzcoa","latitude":43.13300684009967,"longitude":-2.077885323653407},{"id":15,"company":"Kikara Gozotegia","street":"Larraitz Auz., 7","postalCode":"20260","locality":"Alegia","province":"Guipúzcoa","latitude":43.09847211509311,"longitude":-2.095937538834831},{"id":16,"company":"CALERA DE ALZO S.L.","street":"Barrio Egileor, s/n","postalCode":"20268","locality":"Altzo","province":"Guipúzcoa","latitude":43.08743997644743,"longitude":-2.067335903089554},{"id":17,"company":"Larraitz Gain Jatetxea","street":"Larraitz Auzoa, 3","postalCode":"20269","locality":"Abaltzisketa","province":"Guipúzcoa","latitude":43.08743997644743,"longitude":-2.067335903089554}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map