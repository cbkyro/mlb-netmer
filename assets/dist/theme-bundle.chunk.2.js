webpackJsonp([2],{161:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(18),c=n(401),s=n(1),u=n.n(s),p=n(402),f=function(t){function e(){return o(this,e),r(this,t.apply(this,arguments))}return i(e,t),e.prototype.loaded=function(){u()("#facetedSearch").length>0?this.initFacetedSearch():(this.onSortBySubmit=this.onSortBySubmit.bind(this),a.c.on("sortBy-submitted",this.onSortBySubmit))},e.prototype.initFacetedSearch=function(){var t=u()("#product-listing-container"),e=u()("#faceted-search-container"),n=this.context.brandProductsPerPage,o={template:{productListing:"brand/product-listing",sidebar:"brand/sidebar"},config:{shop_by_brand:!0,brand:{products:{limit:n}}},showMore:"brand/show-more"};this.facetedSearch=new p.a(o,function(n){t.html(n.productListing),e.html(n.sidebar),u()("html, body").animate({scrollTop:0},100)})},e}(c.a);e.default=f}});