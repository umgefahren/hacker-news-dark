(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key2 of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key2) && key2 !== "default")
          __defProp(target, key2, { get: () => module[key2], enumerable: !(desc = __getOwnPropDesc(module, key2)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // .svelte-kit/output/server/chunks/index-81055637.js
  function noop() {
  }
  function is_promise(value) {
    return value && typeof value === "object" && typeof value.then === "function";
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  function setContext(key2, context) {
    get_current_component().$$.context.set(key2, context);
  }
  function escape(html) {
    return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
  }
  function each(items, fn) {
    let str = "";
    for (let i = 0; i < items.length; i += 1) {
      str += fn(items[i], i);
    }
    return str;
  }
  function validate_component(component, name) {
    if (!component || !component.$$render) {
      if (name === "svelte:component")
        name += " this={...}";
      throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
  }
  function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
      const parent_component = current_component;
      const $$ = {
        on_destroy,
        context: new Map(context || (parent_component ? parent_component.$$.context : [])),
        on_mount: [],
        before_update: [],
        after_update: [],
        callbacks: blank_object()
      };
      set_current_component({ $$ });
      const html = fn(result, props, bindings, slots);
      set_current_component(parent_component);
      return html;
    }
    return {
      render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
        on_destroy = [];
        const result = { title: "", head: "", css: new Set() };
        const html = $$render(result, props, {}, $$slots, context);
        run_all(on_destroy);
        return {
          html,
          css: {
            code: Array.from(result.css).map((css5) => css5.code).join("\n"),
            map: null
          },
          head: result.title + result.head
        };
      },
      $$render
    };
  }
  function add_attribute(name, value, boolean) {
    if (value == null || boolean && !value)
      return "";
    return ` ${name}${value === true && boolean_attributes.has(name) ? "" : `=${typeof value === "string" ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
  }
  var current_component, boolean_attributes, escaped, missing_component, on_destroy;
  var init_index_81055637 = __esm({
    ".svelte-kit/output/server/chunks/index-81055637.js"() {
      Promise.resolve();
      boolean_attributes = new Set([
        "allowfullscreen",
        "allowpaymentrequest",
        "async",
        "autofocus",
        "autoplay",
        "checked",
        "controls",
        "default",
        "defer",
        "disabled",
        "formnovalidate",
        "hidden",
        "ismap",
        "loop",
        "multiple",
        "muted",
        "nomodule",
        "novalidate",
        "open",
        "playsinline",
        "readonly",
        "required",
        "reversed",
        "selected"
      ]);
      escaped = {
        '"': "&quot;",
        "'": "&#39;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
      };
      missing_component = {
        $$render: () => ""
      };
    }
  });

  // .svelte-kit/output/server/entries/pages/__layout.svelte.js
  var layout_svelte_exports = {};
  __export(layout_svelte_exports, {
    default: () => _layout
  });
  var _layout;
  var init_layout_svelte = __esm({
    ".svelte-kit/output/server/entries/pages/__layout.svelte.js"() {
      init_index_81055637();
      _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `${slots.default ? slots.default({}) : ``}`;
      });
    }
  });

  // .svelte-kit/output/server/nodes/0.js
  var __exports = {};
  __export(__exports, {
    css: () => css,
    entry: () => entry,
    js: () => js,
    module: () => layout_svelte_exports
  });
  var entry, js, css;
  var init__ = __esm({
    ".svelte-kit/output/server/nodes/0.js"() {
      init_layout_svelte();
      entry = "pages/__layout.svelte-6b3f54c7.js";
      js = ["pages/__layout.svelte-6b3f54c7.js", "chunks/vendor-aefc53be.js"];
      css = ["assets/pages/__layout.svelte-604d72a0.css"];
    }
  });

  // .svelte-kit/output/server/entries/pages/error.svelte.js
  var error_svelte_exports = {};
  __export(error_svelte_exports, {
    default: () => Error2,
    load: () => load
  });
  function load({ error: error2, status }) {
    return { props: { error: error2, status } };
  }
  var Error2;
  var init_error_svelte = __esm({
    ".svelte-kit/output/server/entries/pages/error.svelte.js"() {
      init_index_81055637();
      Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let { status } = $$props;
        let { error: error2 } = $$props;
        if ($$props.status === void 0 && $$bindings.status && status !== void 0)
          $$bindings.status(status);
        if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
          $$bindings.error(error2);
        return `<h1>${escape(status)}</h1>

<pre>${escape(error2.message)}</pre>



${error2.frame ? `<pre>${escape(error2.frame)}</pre>` : ``}
${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
      });
    }
  });

  // .svelte-kit/output/server/nodes/1.js
  var __exports2 = {};
  __export(__exports2, {
    css: () => css2,
    entry: () => entry2,
    js: () => js2,
    module: () => error_svelte_exports
  });
  var entry2, js2, css2;
  var init__2 = __esm({
    ".svelte-kit/output/server/nodes/1.js"() {
      init_error_svelte();
      entry2 = "error.svelte-0ff4e35f.js";
      js2 = ["error.svelte-0ff4e35f.js", "chunks/vendor-aefc53be.js"];
      css2 = [];
    }
  });

  // .svelte-kit/output/server/entries/pages/index.svelte.js
  var index_svelte_exports = {};
  __export(index_svelte_exports, {
    default: () => Routes,
    load: () => load2
  });
  async function load2({}) {
    const topStoriesUrl = hn + "/topstories.json";
    const topStoriesResponse = await fetch(topStoriesUrl);
    const topStories = await topStoriesResponse.json();
    let articlesPromises = [];
    for (let i = 0; i < 100; i++) {
      const num = topStories[i];
      const articlePromise = fetch(hn + `/item/${num}.json`);
      const jsonPromise = articlePromise.then(function(article) {
        return article.json();
      }, function(reason) {
        console.log(reason);
      });
      articlesPromises.push(jsonPromise);
    }
    return { props: { articlesPromises } };
  }
  var css3, hn, Routes;
  var init_index_svelte = __esm({
    ".svelte-kit/output/server/entries/pages/index.svelte.js"() {
      init_index_81055637();
      css3 = {
        code: "body{background-color:black}",
        map: null
      };
      hn = "https://hacker-news.firebaseio.com/v0";
      Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let { articlesPromises = [] } = $$props;
        if ($$props.articlesPromises === void 0 && $$bindings.articlesPromises && articlesPromises !== void 0)
          $$bindings.articlesPromises(articlesPromises);
        $$result.css.add(css3);
        return `${$$result.head += `${$$result.title = `<title>Hacker News Reader (dark)</title>`, ""}`, ""}



<div class="${"w-screen h-screen"}"><table class="${"table-auto m-4 bg-gray-700 border mx-auto"}"><thead class="${"bg-gray-800"}"><tr class="${"border"}"><th class="${"text-white"}">Id</th>
				<th class="${"text-white"}">Title</th>
                <th class="${"text-white"}">Age</th>
				<th class="${"text-white"}">GoTo</th></tr></thead>
		<tbody>${each(articlesPromises, (articlePromise) => {
          return `${function(__value) {
            if (is_promise(__value)) {
              __value.then(null, noop);
              return `
					<tr class="${"border"}"><td colspan="${"4"}" class="${"text-white"}">Loading...</td></tr>
				`;
            }
            return function(article) {
              return `
					${article.type == "story" ? `<tr class="${"border"}"><td class="${"text-white font-mono border"}"><p class="${"m-2"}">${escape(article.id)}</p></td>
							<td class="${"text-white border"}"><p class="${"ml-2 mr-2"}">${escape(article.title)}
								</p></td>
                            <td class="${"text-white border"}"><p>${escape(Math.round((Date.now() / 1e3 - article.time) / 60 / 60))}h</p></td>
							<td class="${"text-white"}"><a${add_attribute("href", article.url, 0)} class="${"ml-2 mr-2"}">(${escape(new URL(article.url).host)})</a></td>
						</tr>` : ``}
				`;
            }(__value);
          }(articlePromise)}`;
        })}</tbody></table>
</div>`;
      });
    }
  });

  // .svelte-kit/output/server/nodes/2.js
  var __exports3 = {};
  __export(__exports3, {
    css: () => css4,
    entry: () => entry3,
    js: () => js3,
    module: () => index_svelte_exports
  });
  var entry3, js3, css4;
  var init__3 = __esm({
    ".svelte-kit/output/server/nodes/2.js"() {
      init_index_svelte();
      entry3 = "pages/index.svelte-4426c848.js";
      js3 = ["pages/index.svelte-4426c848.js", "chunks/vendor-aefc53be.js"];
      css4 = ["assets/pages/index.svelte-d97b8bd2.css"];
    }
  });

  // .svelte-kit/cloudflare-workers-tmp/node_modules/mime/Mime.js
  var require_Mime = __commonJS({
    ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/Mime.js"(exports, module) {
      "use strict";
      function Mime() {
        this._types = Object.create(null);
        this._extensions = Object.create(null);
        for (let i = 0; i < arguments.length; i++) {
          this.define(arguments[i]);
        }
        this.define = this.define.bind(this);
        this.getType = this.getType.bind(this);
        this.getExtension = this.getExtension.bind(this);
      }
      Mime.prototype.define = function(typeMap, force) {
        for (let type in typeMap) {
          let extensions = typeMap[type].map(function(t) {
            return t.toLowerCase();
          });
          type = type.toLowerCase();
          for (let i = 0; i < extensions.length; i++) {
            const ext = extensions[i];
            if (ext[0] === "*") {
              continue;
            }
            if (!force && ext in this._types) {
              throw new Error('Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".');
            }
            this._types[ext] = type;
          }
          if (force || !this._extensions[type]) {
            const ext = extensions[0];
            this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
          }
        }
      };
      Mime.prototype.getType = function(path) {
        path = String(path);
        let last = path.replace(/^.*[/\\]/, "").toLowerCase();
        let ext = last.replace(/^.*\./, "").toLowerCase();
        let hasPath = last.length < path.length;
        let hasDot = ext.length < last.length - 1;
        return (hasDot || !hasPath) && this._types[ext] || null;
      };
      Mime.prototype.getExtension = function(type) {
        type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
        return type && this._extensions[type.toLowerCase()] || null;
      };
      module.exports = Mime;
    }
  });

  // .svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/standard.js
  var require_standard = __commonJS({
    ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/standard.js"(exports, module) {
      module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
    }
  });

  // .svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/other.js
  var require_other = __commonJS({
    ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/other.js"(exports, module) {
      module.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
    }
  });

  // .svelte-kit/cloudflare-workers-tmp/node_modules/mime/index.js
  var require_mime = __commonJS({
    ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/index.js"(exports, module) {
      "use strict";
      var Mime = require_Mime();
      module.exports = new Mime(require_standard(), require_other());
    }
  });

  // .svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/types.js
  var require_types = __commonJS({
    ".svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.KVError = void 0;
      var KVError = class extends Error {
        constructor(message, status = 500) {
          super(message);
          Object.setPrototypeOf(this, new.target.prototype);
          this.name = KVError.name;
          this.status = status;
        }
      };
      exports.KVError = KVError;
      var MethodNotAllowedError = class extends KVError {
        constructor(message = `Not a valid request method`, status = 405) {
          super(message, status);
        }
      };
      exports.MethodNotAllowedError = MethodNotAllowedError;
      var NotFoundError = class extends KVError {
        constructor(message = `Not Found`, status = 404) {
          super(message, status);
        }
      };
      exports.NotFoundError = NotFoundError;
      var InternalError = class extends KVError {
        constructor(message = `Internal Error in KV Asset Handler`, status = 500) {
          super(message, status);
        }
      };
      exports.InternalError = InternalError;
    }
  });

  // .svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/index.js
  var require_dist = __commonJS({
    ".svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/index.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve2) {
            resolve2(value);
          });
        }
        return new (P || (P = Promise))(function(resolve2, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.serveSinglePageApp = exports.mapRequestToAsset = exports.getAssetFromKV = void 0;
      var mime = require_mime();
      var types_1 = require_types();
      Object.defineProperty(exports, "MethodNotAllowedError", { enumerable: true, get: function() {
        return types_1.MethodNotAllowedError;
      } });
      Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
        return types_1.NotFoundError;
      } });
      Object.defineProperty(exports, "InternalError", { enumerable: true, get: function() {
        return types_1.InternalError;
      } });
      var defaultCacheControl = {
        browserTTL: null,
        edgeTTL: 2 * 60 * 60 * 24,
        bypassCache: false
      };
      var parseStringAsObject = (maybeString) => typeof maybeString === "string" ? JSON.parse(maybeString) : maybeString;
      var getAssetFromKVDefaultOptions = {
        ASSET_NAMESPACE: typeof __STATIC_CONTENT !== "undefined" ? __STATIC_CONTENT : void 0,
        ASSET_MANIFEST: typeof __STATIC_CONTENT_MANIFEST !== "undefined" ? parseStringAsObject(__STATIC_CONTENT_MANIFEST) : void 0,
        cacheControl: defaultCacheControl,
        defaultMimeType: "text/plain",
        defaultDocument: "index.html"
      };
      function assignOptions(options) {
        return Object.assign({}, getAssetFromKVDefaultOptions, options);
      }
      var mapRequestToAsset = (request, options) => {
        options = assignOptions(options);
        const parsedUrl = new URL(request.url);
        let pathname = parsedUrl.pathname;
        if (pathname.endsWith("/")) {
          pathname = pathname.concat(options.defaultDocument);
        } else if (!mime.getType(pathname)) {
          pathname = pathname.concat("/" + options.defaultDocument);
        }
        parsedUrl.pathname = pathname;
        return new Request(parsedUrl.toString(), request);
      };
      exports.mapRequestToAsset = mapRequestToAsset;
      function serveSinglePageApp(request, options) {
        options = assignOptions(options);
        request = mapRequestToAsset(request, options);
        const parsedUrl = new URL(request.url);
        if (parsedUrl.pathname.endsWith(".html")) {
          return new Request(`${parsedUrl.origin}/${options.defaultDocument}`, request);
        } else {
          return request;
        }
      }
      exports.serveSinglePageApp = serveSinglePageApp;
      var getAssetFromKV2 = (event, options) => __awaiter(void 0, void 0, void 0, function* () {
        options = assignOptions(options);
        const request = event.request;
        const ASSET_NAMESPACE = options.ASSET_NAMESPACE;
        const ASSET_MANIFEST = parseStringAsObject(options.ASSET_MANIFEST);
        if (typeof ASSET_NAMESPACE === "undefined") {
          throw new types_1.InternalError(`there is no KV namespace bound to the script`);
        }
        const rawPathKey = new URL(request.url).pathname.replace(/^\/+/, "");
        let pathIsEncoded = false;
        let requestKey;
        if (options.mapRequestToAsset) {
          requestKey = options.mapRequestToAsset(request);
        } else if (ASSET_MANIFEST[rawPathKey]) {
          requestKey = request;
        } else if (ASSET_MANIFEST[decodeURIComponent(rawPathKey)]) {
          pathIsEncoded = true;
          requestKey = request;
        } else {
          const mappedRequest = mapRequestToAsset(request);
          const mappedRawPathKey = new URL(mappedRequest.url).pathname.replace(/^\/+/, "");
          if (ASSET_MANIFEST[decodeURIComponent(mappedRawPathKey)]) {
            pathIsEncoded = true;
            requestKey = mappedRequest;
          } else {
            requestKey = mapRequestToAsset(request, options);
          }
        }
        const SUPPORTED_METHODS = ["GET", "HEAD"];
        if (!SUPPORTED_METHODS.includes(requestKey.method)) {
          throw new types_1.MethodNotAllowedError(`${requestKey.method} is not a valid request method`);
        }
        const parsedUrl = new URL(requestKey.url);
        const pathname = pathIsEncoded ? decodeURIComponent(parsedUrl.pathname) : parsedUrl.pathname;
        let pathKey = pathname.replace(/^\/+/, "");
        const cache = caches.default;
        let mimeType = mime.getType(pathKey) || options.defaultMimeType;
        if (mimeType.startsWith("text") || mimeType === "application/javascript") {
          mimeType += "; charset=utf-8";
        }
        let shouldEdgeCache = false;
        if (typeof ASSET_MANIFEST !== "undefined") {
          if (ASSET_MANIFEST[pathKey]) {
            pathKey = ASSET_MANIFEST[pathKey];
            shouldEdgeCache = true;
          }
        }
        let cacheKey = new Request(`${parsedUrl.origin}/${pathKey}`, request);
        const evalCacheOpts = (() => {
          switch (typeof options.cacheControl) {
            case "function":
              return options.cacheControl(request);
            case "object":
              return options.cacheControl;
            default:
              return defaultCacheControl;
          }
        })();
        const formatETag = (entityId = pathKey, validatorType = "strong") => {
          if (!entityId) {
            return "";
          }
          switch (validatorType) {
            case "weak":
              if (!entityId.startsWith("W/")) {
                return `W/${entityId}`;
              }
              return entityId;
            case "strong":
              if (entityId.startsWith(`W/"`)) {
                entityId = entityId.replace("W/", "");
              }
              if (!entityId.endsWith(`"`)) {
                entityId = `"${entityId}"`;
              }
              return entityId;
            default:
              return "";
          }
        };
        options.cacheControl = Object.assign({}, defaultCacheControl, evalCacheOpts);
        if (options.cacheControl.bypassCache || options.cacheControl.edgeTTL === null || request.method == "HEAD") {
          shouldEdgeCache = false;
        }
        const shouldSetBrowserCache = typeof options.cacheControl.browserTTL === "number";
        let response = null;
        if (shouldEdgeCache) {
          response = yield cache.match(cacheKey);
        }
        if (response) {
          if (response.status > 300 && response.status < 400) {
            if (response.body && "cancel" in Object.getPrototypeOf(response.body)) {
              response.body.cancel();
              console.log("Body exists and environment supports readable streams. Body cancelled");
            } else {
              console.log("Environment doesnt support readable streams");
            }
            response = new Response(null, response);
          } else {
            let opts = {
              headers: new Headers(response.headers),
              status: 0,
              statusText: ""
            };
            opts.headers.set("cf-cache-status", "HIT");
            if (response.status) {
              opts.status = response.status;
              opts.statusText = response.statusText;
            } else if (opts.headers.has("Content-Range")) {
              opts.status = 206;
              opts.statusText = "Partial Content";
            } else {
              opts.status = 200;
              opts.statusText = "OK";
            }
            response = new Response(response.body, opts);
          }
        } else {
          const body = yield ASSET_NAMESPACE.get(pathKey, "arrayBuffer");
          if (body === null) {
            throw new types_1.NotFoundError(`could not find ${pathKey} in your content namespace`);
          }
          response = new Response(body);
          if (shouldEdgeCache) {
            response.headers.set("Accept-Ranges", "bytes");
            response.headers.set("Content-Length", body.length);
            if (!response.headers.has("etag")) {
              response.headers.set("etag", formatETag(pathKey, "strong"));
            }
            response.headers.set("Cache-Control", `max-age=${options.cacheControl.edgeTTL}`);
            event.waitUntil(cache.put(cacheKey, response.clone()));
            response.headers.set("CF-Cache-Status", "MISS");
          }
        }
        response.headers.set("Content-Type", mimeType);
        if (response.status === 304) {
          let etag = formatETag(response.headers.get("etag"), "strong");
          let ifNoneMatch = cacheKey.headers.get("if-none-match");
          let proxyCacheStatus = response.headers.get("CF-Cache-Status");
          if (etag) {
            if (ifNoneMatch && ifNoneMatch === etag && proxyCacheStatus === "MISS") {
              response.headers.set("CF-Cache-Status", "EXPIRED");
            } else {
              response.headers.set("CF-Cache-Status", "REVALIDATED");
            }
            response.headers.set("etag", formatETag(etag, "weak"));
          }
        }
        if (shouldSetBrowserCache) {
          response.headers.set("Cache-Control", `max-age=${options.cacheControl.browserTTL}`);
        } else {
          response.headers.delete("Cache-Control");
        }
        return response;
      });
      exports.getAssetFromKV = getAssetFromKV2;
    }
  });

  // .svelte-kit/output/server/app.js
  init_index_81055637();
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };
  var _use_hashes;
  var _dev;
  var _script_needs_csp;
  var _style_needs_csp;
  var _directives;
  var _script_src;
  var _style_src;
  function afterUpdate() {
  }
  var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { stores } = $$props;
    let { page } = $$props;
    let { components } = $$props;
    let { props_0 = null } = $$props;
    let { props_1 = null } = $$props;
    let { props_2 = null } = $$props;
    setContext("__svelte__", stores);
    afterUpdate(stores.page.notify);
    if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
      $$bindings.stores(stores);
    if ($$props.page === void 0 && $$bindings.page && page !== void 0)
      $$bindings.page(page);
    if ($$props.components === void 0 && $$bindings.components && components !== void 0)
      $$bindings.components(components);
    if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
      $$bindings.props_0(props_0);
    if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
      $$bindings.props_1(props_1);
    if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
      $$bindings.props_2(props_2);
    {
      stores.page.set(page);
    }
    return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
      default: () => {
        return `${components[2] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
          default: () => {
            return `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}`;
          }
        })}` : `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {})}`}`;
      }
    })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {})}`}

${``}`;
  });
  function to_headers(object) {
    const headers = new Headers();
    if (object) {
      for (const key2 in object) {
        const value = object[key2];
        if (!value)
          continue;
        if (typeof value === "string") {
          headers.set(key2, value);
        } else {
          value.forEach((value2) => {
            headers.append(key2, value2);
          });
        }
      }
    }
    return headers;
  }
  function hash(value) {
    let hash2 = 5381;
    let i = value.length;
    if (typeof value === "string") {
      while (i)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else {
      while (i)
        hash2 = hash2 * 33 ^ value[--i];
    }
    return (hash2 >>> 0).toString(36);
  }
  function decode_params(params) {
    for (const key2 in params) {
      params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
    }
    return params;
  }
  function error(body) {
    return new Response(body, {
      status: 500
    });
  }
  function is_string(s2) {
    return typeof s2 === "string" || s2 instanceof String;
  }
  var text_types = new Set([
    "application/xml",
    "application/json",
    "application/x-www-form-urlencoded",
    "multipart/form-data"
  ]);
  function is_text(content_type) {
    if (!content_type)
      return true;
    const type = content_type.split(";")[0].toLowerCase();
    return type.startsWith("text/") || type.endsWith("+xml") || text_types.has(type);
  }
  async function render_endpoint(event, route, match) {
    const mod = await route.load();
    const handler = mod[event.request.method.toLowerCase().replace("delete", "del")];
    if (!handler) {
      return;
    }
    event.params = route.params ? decode_params(route.params(match)) : {};
    const response = await handler(event);
    const preface = `Invalid response from route ${event.url.pathname}`;
    if (typeof response !== "object") {
      return error(`${preface}: expected an object, got ${typeof response}`);
    }
    if (response.fallthrough) {
      return;
    }
    const { status = 200, body = {} } = response;
    const headers = response.headers instanceof Headers ? response.headers : to_headers(response.headers);
    const type = headers.get("content-type");
    if (!is_text(type) && !(body instanceof Uint8Array || is_string(body))) {
      return error(`${preface}: body must be an instance of string or Uint8Array if content-type is not a supported textual content-type`);
    }
    let normalized_body;
    if (is_pojo(body) && (!type || type.startsWith("application/json"))) {
      headers.set("content-type", "application/json; charset=utf-8");
      normalized_body = JSON.stringify(body);
    } else {
      normalized_body = body;
    }
    if ((typeof normalized_body === "string" || normalized_body instanceof Uint8Array) && !headers.has("etag")) {
      const cache_control = headers.get("cache-control");
      if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
        headers.set("etag", `"${hash(normalized_body)}"`);
      }
    }
    return new Response(normalized_body, {
      status,
      headers
    });
  }
  function is_pojo(body) {
    if (typeof body !== "object")
      return false;
    if (body) {
      if (body instanceof Uint8Array)
        return false;
      if (body._readableState && body._writableState && body._events)
        return false;
      if (body[Symbol.toStringTag] === "ReadableStream")
        return false;
    }
    return true;
  }
  var chars$1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
  var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
  var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
  var escaped2 = {
    "<": "\\u003C",
    ">": "\\u003E",
    "/": "\\u002F",
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  function devalue(value) {
    var counts = new Map();
    function walk(thing) {
      if (typeof thing === "function") {
        throw new Error("Cannot stringify a function");
      }
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (!isPrimitive(thing)) {
        var type = getType(thing);
        switch (type) {
          case "Number":
          case "String":
          case "Boolean":
          case "Date":
          case "RegExp":
            return;
          case "Array":
            thing.forEach(walk);
            break;
          case "Set":
          case "Map":
            Array.from(thing).forEach(walk);
            break;
          default:
            var proto = Object.getPrototypeOf(thing);
            if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
              throw new Error("Cannot stringify arbitrary non-POJOs");
            }
            if (Object.getOwnPropertySymbols(thing).length > 0) {
              throw new Error("Cannot stringify POJOs with symbolic keys");
            }
            Object.keys(thing).forEach(function(key2) {
              return walk(thing[key2]);
            });
        }
      }
    }
    walk(value);
    var names = new Map();
    Array.from(counts).filter(function(entry4) {
      return entry4[1] > 1;
    }).sort(function(a, b) {
      return b[1] - a[1];
    }).forEach(function(entry4, i) {
      names.set(entry4[0], getName(i));
    });
    function stringify(thing) {
      if (names.has(thing)) {
        return names.get(thing);
      }
      if (isPrimitive(thing)) {
        return stringifyPrimitive(thing);
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          return "Object(" + stringify(thing.valueOf()) + ")";
        case "RegExp":
          return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
        case "Date":
          return "new Date(" + thing.getTime() + ")";
        case "Array":
          var members = thing.map(function(v, i) {
            return i in thing ? stringify(v) : "";
          });
          var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
          return "[" + members.join(",") + tail + "]";
        case "Set":
        case "Map":
          return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
        default:
          var obj = "{" + Object.keys(thing).map(function(key2) {
            return safeKey(key2) + ":" + stringify(thing[key2]);
          }).join(",") + "}";
          var proto = Object.getPrototypeOf(thing);
          if (proto === null) {
            return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
          }
          return obj;
      }
    }
    var str = stringify(value);
    if (names.size) {
      var params_1 = [];
      var statements_1 = [];
      var values_1 = [];
      names.forEach(function(name, thing) {
        params_1.push(name);
        if (isPrimitive(thing)) {
          values_1.push(stringifyPrimitive(thing));
          return;
        }
        var type = getType(thing);
        switch (type) {
          case "Number":
          case "String":
          case "Boolean":
            values_1.push("Object(" + stringify(thing.valueOf()) + ")");
            break;
          case "RegExp":
            values_1.push(thing.toString());
            break;
          case "Date":
            values_1.push("new Date(" + thing.getTime() + ")");
            break;
          case "Array":
            values_1.push("Array(" + thing.length + ")");
            thing.forEach(function(v, i) {
              statements_1.push(name + "[" + i + "]=" + stringify(v));
            });
            break;
          case "Set":
            values_1.push("new Set");
            statements_1.push(name + "." + Array.from(thing).map(function(v) {
              return "add(" + stringify(v) + ")";
            }).join("."));
            break;
          case "Map":
            values_1.push("new Map");
            statements_1.push(name + "." + Array.from(thing).map(function(_a) {
              var k = _a[0], v = _a[1];
              return "set(" + stringify(k) + ", " + stringify(v) + ")";
            }).join("."));
            break;
          default:
            values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
            Object.keys(thing).forEach(function(key2) {
              statements_1.push("" + name + safeProp(key2) + "=" + stringify(thing[key2]));
            });
        }
      });
      statements_1.push("return " + str);
      return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
    } else {
      return str;
    }
  }
  function getName(num) {
    var name = "";
    do {
      name = chars$1[num % chars$1.length] + name;
      num = ~~(num / chars$1.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
  }
  function isPrimitive(thing) {
    return Object(thing) !== thing;
  }
  function stringifyPrimitive(thing) {
    if (typeof thing === "string")
      return stringifyString(thing);
    if (thing === void 0)
      return "void 0";
    if (thing === 0 && 1 / thing < 0)
      return "-0";
    var str = String(thing);
    if (typeof thing === "number")
      return str.replace(/^(-)?0\./, "$1.");
    return str;
  }
  function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
  }
  function escapeUnsafeChar(c) {
    return escaped2[c] || c;
  }
  function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
  }
  function safeKey(key2) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escapeUnsafeChars(JSON.stringify(key2));
  }
  function safeProp(key2) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? "." + key2 : "[" + escapeUnsafeChars(JSON.stringify(key2)) + "]";
  }
  function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
      var char = str.charAt(i);
      var code = char.charCodeAt(0);
      if (char === '"') {
        result += '\\"';
      } else if (char in escaped2) {
        result += escaped2[char];
      } else if (code >= 55296 && code <= 57343) {
        var next = str.charCodeAt(i + 1);
        if (code <= 56319 && (next >= 56320 && next <= 57343)) {
          result += char + str[++i];
        } else {
          result += "\\u" + code.toString(16).toUpperCase();
        }
      } else {
        result += char;
      }
    }
    result += '"';
    return result;
  }
  function noop2() {
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  Promise.resolve();
  var subscriber_queue = [];
  function writable(value, start = noop2) {
    let stop;
    const subscribers = new Set();
    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update(fn) {
      set(fn(value));
    }
    function subscribe(run2, invalidate = noop2) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set) || noop2;
      }
      run2(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0) {
          stop();
          stop = null;
        }
      };
    }
    return { set, update, subscribe };
  }
  function coalesce_to_error(err) {
    return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
  }
  var escape_json_string_in_html_dict = {
    '"': '\\"',
    "<": "\\u003C",
    ">": "\\u003E",
    "/": "\\u002F",
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  function escape_json_string_in_html(str) {
    return escape2(str, escape_json_string_in_html_dict, (code) => `\\u${code.toString(16).toUpperCase()}`);
  }
  var escape_html_attr_dict = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function escape_html_attr(str) {
    return '"' + escape2(str, escape_html_attr_dict, (code) => `&#${code};`) + '"';
  }
  function escape2(str, dict, unicode_encoder) {
    let result = "";
    for (let i = 0; i < str.length; i += 1) {
      const char = str.charAt(i);
      const code = char.charCodeAt(0);
      if (char in dict) {
        result += dict[char];
      } else if (code >= 55296 && code <= 57343) {
        const next = str.charCodeAt(i + 1);
        if (code <= 56319 && next >= 56320 && next <= 57343) {
          result += char + str[++i];
        } else {
          result += unicode_encoder(code);
        }
      } else {
        result += char;
      }
    }
    return result;
  }
  var s = JSON.stringify;
  function create_prerendering_url_proxy(url) {
    return new Proxy(url, {
      get: (target, prop, receiver) => {
        if (prop === "search" || prop === "searchParams") {
          throw new Error(`Cannot access url.${prop} on a page with prerendering enabled`);
        }
        return Reflect.get(target, prop, receiver);
      }
    });
  }
  var encoder = new TextEncoder();
  function sha256(data) {
    if (!key[0])
      precompute();
    const out = init.slice(0);
    const array = encode(data);
    for (let i = 0; i < array.length; i += 16) {
      const w = array.subarray(i, i + 16);
      let tmp;
      let a;
      let b;
      let out0 = out[0];
      let out1 = out[1];
      let out2 = out[2];
      let out3 = out[3];
      let out4 = out[4];
      let out5 = out[5];
      let out6 = out[6];
      let out7 = out[7];
      for (let i2 = 0; i2 < 64; i2++) {
        if (i2 < 16) {
          tmp = w[i2];
        } else {
          a = w[i2 + 1 & 15];
          b = w[i2 + 14 & 15];
          tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
        }
        tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
        out7 = out6;
        out6 = out5;
        out5 = out4;
        out4 = out3 + tmp | 0;
        out3 = out2;
        out2 = out1;
        out1 = out0;
        out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
      }
      out[0] = out[0] + out0 | 0;
      out[1] = out[1] + out1 | 0;
      out[2] = out[2] + out2 | 0;
      out[3] = out[3] + out3 | 0;
      out[4] = out[4] + out4 | 0;
      out[5] = out[5] + out5 | 0;
      out[6] = out[6] + out6 | 0;
      out[7] = out[7] + out7 | 0;
    }
    const bytes = new Uint8Array(out.buffer);
    reverse_endianness(bytes);
    return base64(bytes);
  }
  var init = new Uint32Array(8);
  var key = new Uint32Array(64);
  function precompute() {
    function frac(x) {
      return (x - Math.floor(x)) * 4294967296;
    }
    let prime = 2;
    for (let i = 0; i < 64; prime++) {
      let is_prime = true;
      for (let factor = 2; factor * factor <= prime; factor++) {
        if (prime % factor === 0) {
          is_prime = false;
          break;
        }
      }
      if (is_prime) {
        if (i < 8) {
          init[i] = frac(prime ** (1 / 2));
        }
        key[i] = frac(prime ** (1 / 3));
        i++;
      }
    }
  }
  function reverse_endianness(bytes) {
    for (let i = 0; i < bytes.length; i += 4) {
      const a = bytes[i + 0];
      const b = bytes[i + 1];
      const c = bytes[i + 2];
      const d = bytes[i + 3];
      bytes[i + 0] = d;
      bytes[i + 1] = c;
      bytes[i + 2] = b;
      bytes[i + 3] = a;
    }
  }
  function encode(str) {
    const encoded = encoder.encode(str);
    const length = encoded.length * 8;
    const size = 512 * Math.ceil((length + 65) / 512);
    const bytes = new Uint8Array(size / 8);
    bytes.set(encoded);
    bytes[encoded.length] = 128;
    reverse_endianness(bytes);
    const words = new Uint32Array(bytes.buffer);
    words[words.length - 2] = Math.floor(length / 4294967296);
    words[words.length - 1] = length;
    return words;
  }
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  function base64(bytes) {
    const l = bytes.length;
    let result = "";
    let i;
    for (i = 2; i < l; i += 3) {
      result += chars[bytes[i - 2] >> 2];
      result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
      result += chars[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
      result += chars[bytes[i] & 63];
    }
    if (i === l + 1) {
      result += chars[bytes[i - 2] >> 2];
      result += chars[(bytes[i - 2] & 3) << 4];
      result += "==";
    }
    if (i === l) {
      result += chars[bytes[i - 2] >> 2];
      result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
      result += chars[(bytes[i - 1] & 15) << 2];
      result += "=";
    }
    return result;
  }
  var csp_ready;
  var generate_nonce;
  var generate_hash;
  if (typeof crypto !== "undefined") {
    const array = new Uint8Array(16);
    generate_nonce = () => {
      crypto.getRandomValues(array);
      return base64(array);
    };
    generate_hash = sha256;
  } else {
    const name = "crypto";
    csp_ready = import(name).then((crypto2) => {
      generate_nonce = () => {
        return crypto2.randomBytes(16).toString("base64");
      };
      generate_hash = (input) => {
        return crypto2.createHash("sha256").update(input, "utf-8").digest().toString("base64");
      };
    });
  }
  var quoted = new Set([
    "self",
    "unsafe-eval",
    "unsafe-hashes",
    "unsafe-inline",
    "none",
    "strict-dynamic",
    "report-sample"
  ]);
  var crypto_pattern = /^(nonce|sha\d\d\d)-/;
  var Csp = class {
    constructor({ mode, directives }, { dev, prerender, needs_nonce }) {
      __privateAdd(this, _use_hashes, void 0);
      __privateAdd(this, _dev, void 0);
      __privateAdd(this, _script_needs_csp, void 0);
      __privateAdd(this, _style_needs_csp, void 0);
      __privateAdd(this, _directives, void 0);
      __privateAdd(this, _script_src, void 0);
      __privateAdd(this, _style_src, void 0);
      __privateSet(this, _use_hashes, mode === "hash" || mode === "auto" && prerender);
      __privateSet(this, _directives, dev ? { ...directives } : directives);
      __privateSet(this, _dev, dev);
      const d = __privateGet(this, _directives);
      if (dev) {
        const effective_style_src2 = d["style-src"] || d["default-src"];
        if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
          d["style-src"] = [...effective_style_src2, "unsafe-inline"];
        }
      }
      __privateSet(this, _script_src, []);
      __privateSet(this, _style_src, []);
      const effective_script_src = d["script-src"] || d["default-src"];
      const effective_style_src = d["style-src"] || d["default-src"];
      __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
      __privateSet(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
      this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
      this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
      if (this.script_needs_nonce || this.style_needs_nonce || needs_nonce) {
        this.nonce = generate_nonce();
      }
    }
    add_script(content) {
      if (__privateGet(this, _script_needs_csp)) {
        if (__privateGet(this, _use_hashes)) {
          __privateGet(this, _script_src).push(`sha256-${generate_hash(content)}`);
        } else if (__privateGet(this, _script_src).length === 0) {
          __privateGet(this, _script_src).push(`nonce-${this.nonce}`);
        }
      }
    }
    add_style(content) {
      if (__privateGet(this, _style_needs_csp)) {
        if (__privateGet(this, _use_hashes)) {
          __privateGet(this, _style_src).push(`sha256-${generate_hash(content)}`);
        } else if (__privateGet(this, _style_src).length === 0) {
          __privateGet(this, _style_src).push(`nonce-${this.nonce}`);
        }
      }
    }
    get_header(is_meta = false) {
      const header = [];
      const directives = { ...__privateGet(this, _directives) };
      if (__privateGet(this, _style_src).length > 0) {
        directives["style-src"] = [
          ...directives["style-src"] || directives["default-src"] || [],
          ...__privateGet(this, _style_src)
        ];
      }
      if (__privateGet(this, _script_src).length > 0) {
        directives["script-src"] = [
          ...directives["script-src"] || directives["default-src"] || [],
          ...__privateGet(this, _script_src)
        ];
      }
      for (const key2 in directives) {
        if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
          continue;
        }
        const value = directives[key2];
        if (!value)
          continue;
        const directive = [key2];
        if (Array.isArray(value)) {
          value.forEach((value2) => {
            if (quoted.has(value2) || crypto_pattern.test(value2)) {
              directive.push(`'${value2}'`);
            } else {
              directive.push(value2);
            }
          });
        }
        header.push(directive.join(" "));
      }
      return header.join("; ");
    }
    get_meta() {
      const content = escape_html_attr(this.get_header(true));
      return `<meta http-equiv="content-security-policy" content=${content}>`;
    }
  };
  _use_hashes = new WeakMap();
  _dev = new WeakMap();
  _script_needs_csp = new WeakMap();
  _style_needs_csp = new WeakMap();
  _directives = new WeakMap();
  _script_src = new WeakMap();
  _style_src = new WeakMap();
  async function render_response({
    branch,
    options,
    state,
    $session,
    page_config,
    status,
    error: error2,
    url,
    params,
    ssr,
    stuff
  }) {
    if (state.prerender) {
      if (options.csp.mode === "nonce") {
        throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
      }
      if (options.template_contains_nonce) {
        throw new Error("Cannot use prerendering if page template contains %svelte.nonce%");
      }
    }
    const stylesheets = new Set(options.manifest._.entry.css);
    const modulepreloads = new Set(options.manifest._.entry.js);
    const styles = new Map();
    const serialized_data = [];
    let rendered;
    let is_private = false;
    let maxage;
    if (error2) {
      error2.stack = options.get_stack(error2);
    }
    if (ssr) {
      branch.forEach(({ node, loaded, fetched, uses_credentials }) => {
        if (node.css)
          node.css.forEach((url2) => stylesheets.add(url2));
        if (node.js)
          node.js.forEach((url2) => modulepreloads.add(url2));
        if (node.styles)
          Object.entries(node.styles).forEach(([k, v]) => styles.set(k, v));
        if (fetched && page_config.hydrate)
          serialized_data.push(...fetched);
        if (uses_credentials)
          is_private = true;
        maxage = loaded.maxage;
      });
      const session = writable($session);
      const props = {
        stores: {
          page: writable(null),
          navigating: writable(null),
          session
        },
        page: {
          url: state.prerender ? create_prerendering_url_proxy(url) : url,
          params,
          status,
          error: error2,
          stuff
        },
        components: branch.map(({ node }) => node.module.default)
      };
      const print_error = (property, replacement) => {
        Object.defineProperty(props.page, property, {
          get: () => {
            throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
          }
        });
      };
      print_error("origin", "origin");
      print_error("path", "pathname");
      print_error("query", "searchParams");
      for (let i = 0; i < branch.length; i += 1) {
        props[`props_${i}`] = await branch[i].loaded.props;
      }
      let session_tracking_active = false;
      const unsubscribe = session.subscribe(() => {
        if (session_tracking_active)
          is_private = true;
      });
      session_tracking_active = true;
      try {
        rendered = options.root.render(props);
      } finally {
        unsubscribe();
      }
    } else {
      rendered = { head: "", html: "", css: { code: "", map: null } };
    }
    let { head, html: body } = rendered;
    const inlined_style = Array.from(styles.values()).join("\n");
    await csp_ready;
    const csp = new Csp(options.csp, {
      dev: options.dev,
      prerender: !!state.prerender,
      needs_nonce: options.template_contains_nonce
    });
    const init_app = `
		import { start } from ${s(options.prefix + options.manifest._.entry.file)};
		start({
			target: ${options.target ? `document.querySelector(${s(options.target)})` : "document.body"},
			paths: ${s(options.paths)},
			session: ${try_serialize($session, (error3) => {
      throw new Error(`Failed to serialize session data: ${error3.message}`);
    })},
			route: ${!!page_config.router},
			spa: ${!ssr},
			trailing_slash: ${s(options.trailing_slash)},
			hydrate: ${ssr && page_config.hydrate ? `{
				status: ${status},
				error: ${serialize_error(error2)},
				nodes: [
					${(branch || []).map(({ node }) => `import(${s(options.prefix + node.entry)})`).join(",\n						")}
				],
				url: new URL(${s(url.href)}),
				params: ${devalue(params)}
			}` : "null"}
		});
	`;
    const init_service_worker = `
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('${options.service_worker}');
		}
	`;
    if (options.amp) {
      head += `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>

		<style amp-custom>${inlined_style}
${rendered.css.code}</style>`;
      if (options.service_worker) {
        head += '<script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"><\/script>';
        body += `<amp-install-serviceworker src="${options.service_worker}" layout="nodisplay"></amp-install-serviceworker>`;
      }
    } else {
      if (inlined_style) {
        const attributes = [];
        if (options.dev)
          attributes.push(" data-svelte");
        if (csp.style_needs_nonce)
          attributes.push(` nonce="${csp.nonce}"`);
        csp.add_style(inlined_style);
        head += `
	<style${attributes.join("")}>${inlined_style}</style>`;
      }
      head += Array.from(stylesheets).map((dep) => {
        const attributes = [
          'rel="stylesheet"',
          `href="${options.prefix + dep}"`
        ];
        if (csp.style_needs_nonce) {
          attributes.push(`nonce="${csp.nonce}"`);
        }
        if (styles.has(dep)) {
          attributes.push("disabled", 'media="(max-width: 0)"');
        }
        return `
	<link ${attributes.join(" ")}>`;
      }).join("");
      if (page_config.router || page_config.hydrate) {
        head += Array.from(modulepreloads).map((dep) => `
	<link rel="modulepreload" href="${options.prefix + dep}">`).join("");
        const attributes = ['type="module"'];
        csp.add_script(init_app);
        if (csp.script_needs_nonce) {
          attributes.push(`nonce="${csp.nonce}"`);
        }
        head += `<script ${attributes.join(" ")}>${init_app}<\/script>`;
        body += serialized_data.map(({ url: url2, body: body2, json }) => {
          let attributes2 = `type="application/json" data-type="svelte-data" data-url=${escape_html_attr(url2)}`;
          if (body2)
            attributes2 += ` data-body="${hash(body2)}"`;
          return `<script ${attributes2}>${json}<\/script>`;
        }).join("\n\n	");
      }
      if (options.service_worker) {
        csp.add_script(init_service_worker);
        head += `
				<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
      }
    }
    if (state.prerender) {
      const http_equiv = [];
      const csp_headers = csp.get_meta();
      if (csp_headers) {
        http_equiv.push(csp_headers);
      }
      if (maxage) {
        http_equiv.push(`<meta http-equiv="cache-control" content="max-age=${maxage}">`);
      }
      if (http_equiv.length > 0) {
        head = http_equiv.join("\n") + head;
      }
    }
    const segments = url.pathname.slice(options.paths.base.length).split("/").slice(2);
    const assets2 = options.paths.assets || (segments.length > 0 ? segments.map(() => "..").join("/") : ".");
    const html = options.template({ head, body, assets: assets2, nonce: csp.nonce });
    const headers = new Headers({
      "content-type": "text/html",
      etag: `"${hash(html)}"`
    });
    if (maxage) {
      headers.set("cache-control", `${is_private ? "private" : "public"}, max-age=${maxage}`);
    }
    if (!options.floc) {
      headers.set("permissions-policy", "interest-cohort=()");
    }
    if (!state.prerender) {
      const csp_header = csp.get_header();
      if (csp_header) {
        headers.set("content-security-policy", csp_header);
      }
    }
    return new Response(html, {
      status,
      headers
    });
  }
  function try_serialize(data, fail) {
    try {
      return devalue(data);
    } catch (err) {
      if (fail)
        fail(coalesce_to_error(err));
      return null;
    }
  }
  function serialize_error(error2) {
    if (!error2)
      return null;
    let serialized = try_serialize(error2);
    if (!serialized) {
      const { name, message, stack } = error2;
      serialized = try_serialize({ ...error2, name, message, stack });
    }
    if (!serialized) {
      serialized = "{}";
    }
    return serialized;
  }
  function normalize(loaded) {
    const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
    if (loaded.error || has_error_status) {
      const status = loaded.status;
      if (!loaded.error && has_error_status) {
        return {
          status: status || 500,
          error: new Error()
        };
      }
      const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
      if (!(error2 instanceof Error)) {
        return {
          status: 500,
          error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
        };
      }
      if (!status || status < 400 || status > 599) {
        console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
        return { status: 500, error: error2 };
      }
      return { status, error: error2 };
    }
    if (loaded.redirect) {
      if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
        return {
          status: 500,
          error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
        };
      }
      if (typeof loaded.redirect !== "string") {
        return {
          status: 500,
          error: new Error('"redirect" property returned from load() must be a string')
        };
      }
    }
    if (loaded.context) {
      throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
    }
    return loaded;
  }
  var absolute = /^([a-z]+:)?\/?\//;
  var scheme = /^[a-z]+:/;
  function resolve(base2, path) {
    if (scheme.test(path))
      return path;
    const base_match = absolute.exec(base2);
    const path_match = absolute.exec(path);
    if (!base_match) {
      throw new Error(`bad base path: "${base2}"`);
    }
    const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
    const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
    baseparts.pop();
    for (let i = 0; i < pathparts.length; i += 1) {
      const part = pathparts[i];
      if (part === ".")
        continue;
      else if (part === "..")
        baseparts.pop();
      else
        baseparts.push(part);
    }
    const prefix2 = path_match && path_match[0] || base_match && base_match[0] || "";
    return `${prefix2}${baseparts.join("/")}`;
  }
  function is_root_relative(path) {
    return path[0] === "/" && path[1] !== "/";
  }
  async function load_node({
    event,
    options,
    state,
    route,
    url,
    params,
    node,
    $session,
    stuff,
    is_error,
    status,
    error: error2
  }) {
    const { module } = node;
    let uses_credentials = false;
    const fetched = [];
    let set_cookie_headers = [];
    let loaded;
    if (module.load) {
      const load_input = {
        url: state.prerender ? create_prerendering_url_proxy(url) : url,
        params,
        get session() {
          uses_credentials = true;
          return $session;
        },
        fetch: async (resource, opts = {}) => {
          let requested;
          if (typeof resource === "string") {
            requested = resource;
          } else {
            requested = resource.url;
            opts = {
              method: resource.method,
              headers: resource.headers,
              body: resource.body,
              mode: resource.mode,
              credentials: resource.credentials,
              cache: resource.cache,
              redirect: resource.redirect,
              referrer: resource.referrer,
              integrity: resource.integrity,
              ...opts
            };
          }
          opts.headers = new Headers(opts.headers);
          const resolved = resolve(event.url.pathname, requested.split("?")[0]);
          let response;
          let dependency;
          const prefix2 = options.paths.assets || options.paths.base;
          const filename = (resolved.startsWith(prefix2) ? resolved.slice(prefix2.length) : resolved).slice(1);
          const filename_html = `${filename}/index.html`;
          const is_asset = options.manifest.assets.has(filename);
          const is_asset_html = options.manifest.assets.has(filename_html);
          if (is_asset || is_asset_html) {
            const file = is_asset ? filename : filename_html;
            if (options.read) {
              const type = is_asset ? options.manifest._.mime[filename.slice(filename.lastIndexOf("."))] : "text/html";
              response = new Response(options.read(file), {
                headers: type ? { "content-type": type } : {}
              });
            } else {
              response = await fetch(`${url.origin}/${file}`, opts);
            }
          } else if (is_root_relative(resolved)) {
            if (opts.credentials !== "omit") {
              uses_credentials = true;
              const cookie = event.request.headers.get("cookie");
              const authorization = event.request.headers.get("authorization");
              if (cookie) {
                opts.headers.set("cookie", cookie);
              }
              if (authorization && !opts.headers.has("authorization")) {
                opts.headers.set("authorization", authorization);
              }
            }
            if (opts.body && typeof opts.body !== "string") {
              throw new Error("Request body must be a string");
            }
            response = await respond(new Request(new URL(requested, event.url).href, opts), options, {
              fetched: requested,
              initiator: route
            });
            if (state.prerender) {
              dependency = { response, body: null };
              state.prerender.dependencies.set(resolved, dependency);
            }
          } else {
            if (resolved.startsWith("//")) {
              throw new Error(`Cannot request protocol-relative URL (${requested}) in server-side fetch`);
            }
            if (`.${new URL(requested).hostname}`.endsWith(`.${event.url.hostname}`) && opts.credentials !== "omit") {
              uses_credentials = true;
              const cookie = event.request.headers.get("cookie");
              if (cookie)
                opts.headers.set("cookie", cookie);
            }
            const external_request = new Request(requested, opts);
            response = await options.hooks.externalFetch.call(null, external_request);
          }
          const proxy = new Proxy(response, {
            get(response2, key2, _receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key3, value] of response2.headers) {
                  if (key3 === "set-cookie") {
                    set_cookie_headers = set_cookie_headers.concat(value);
                  } else if (key3 !== "etag") {
                    headers[key3] = value;
                  }
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url: requested,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":"${escape_json_string_in_html(body)}"}`
                  });
                }
                if (dependency) {
                  dependency.body = body;
                }
                return body;
              }
              if (key2 === "arrayBuffer") {
                return async () => {
                  const buffer = await response2.arrayBuffer();
                  if (dependency) {
                    dependency.body = new Uint8Array(buffer);
                  }
                  return buffer;
                };
              }
              if (key2 === "text") {
                return text;
              }
              if (key2 === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key2, response2);
            }
          });
          return proxy;
        },
        stuff: { ...stuff }
      };
      if (options.dev) {
        Object.defineProperty(load_input, "page", {
          get: () => {
            throw new Error("`page` in `load` functions has been replaced by `url` and `params`");
          }
        });
      }
      if (is_error) {
        load_input.status = status;
        load_input.error = error2;
      }
      loaded = await module.load.call(null, load_input);
      if (!loaded) {
        throw new Error(`load function must return a value${options.dev ? ` (${node.entry})` : ""}`);
      }
    } else {
      loaded = {};
    }
    if (loaded.fallthrough && !is_error) {
      return;
    }
    return {
      node,
      loaded: normalize(loaded),
      stuff: loaded.stuff || stuff,
      fetched,
      set_cookie_headers,
      uses_credentials
    };
  }
  async function respond_with_error({ event, options, state, $session, status, error: error2, ssr }) {
    try {
      const default_layout = await options.manifest._.nodes[0]();
      const default_error = await options.manifest._.nodes[1]();
      const params = {};
      const layout_loaded = await load_node({
        event,
        options,
        state,
        route: null,
        url: event.url,
        params,
        node: default_layout,
        $session,
        stuff: {},
        is_error: false
      });
      const error_loaded = await load_node({
        event,
        options,
        state,
        route: null,
        url: event.url,
        params,
        node: default_error,
        $session,
        stuff: layout_loaded ? layout_loaded.stuff : {},
        is_error: true,
        status,
        error: error2
      });
      return await render_response({
        options,
        state,
        $session,
        page_config: {
          hydrate: options.hydrate,
          router: options.router
        },
        stuff: error_loaded.stuff,
        status,
        error: error2,
        branch: [layout_loaded, error_loaded],
        url: event.url,
        params,
        ssr
      });
    } catch (err) {
      const error3 = coalesce_to_error(err);
      options.handle_error(error3, event);
      return new Response(error3.stack, {
        status: 500
      });
    }
  }
  async function respond$1(opts) {
    const { event, options, state, $session, route, ssr } = opts;
    let nodes;
    if (!ssr) {
      return await render_response({
        ...opts,
        branch: [],
        page_config: {
          hydrate: true,
          router: true
        },
        status: 200,
        url: event.url,
        stuff: {}
      });
    }
    try {
      nodes = await Promise.all(route.a.map((n) => options.manifest._.nodes[n] && options.manifest._.nodes[n]()));
    } catch (err) {
      const error3 = coalesce_to_error(err);
      options.handle_error(error3, event);
      return await respond_with_error({
        event,
        options,
        state,
        $session,
        status: 500,
        error: error3,
        ssr
      });
    }
    const leaf = nodes[nodes.length - 1].module;
    let page_config = get_page_config(leaf, options);
    if (!leaf.prerender && state.prerender && !state.prerender.all) {
      return new Response(void 0, {
        status: 204
      });
    }
    let branch = [];
    let status = 200;
    let error2;
    let set_cookie_headers = [];
    let stuff = {};
    ssr:
      if (ssr) {
        for (let i = 0; i < nodes.length; i += 1) {
          const node = nodes[i];
          let loaded;
          if (node) {
            try {
              loaded = await load_node({
                ...opts,
                url: event.url,
                node,
                stuff,
                is_error: false
              });
              if (!loaded)
                return;
              set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
              if (loaded.loaded.redirect) {
                return with_cookies(new Response(void 0, {
                  status: loaded.loaded.status,
                  headers: {
                    location: loaded.loaded.redirect
                  }
                }), set_cookie_headers);
              }
              if (loaded.loaded.error) {
                ({ status, error: error2 } = loaded.loaded);
              }
            } catch (err) {
              const e = coalesce_to_error(err);
              options.handle_error(e, event);
              status = 500;
              error2 = e;
            }
            if (loaded && !error2) {
              branch.push(loaded);
            }
            if (error2) {
              while (i--) {
                if (route.b[i]) {
                  const error_node = await options.manifest._.nodes[route.b[i]]();
                  let node_loaded;
                  let j = i;
                  while (!(node_loaded = branch[j])) {
                    j -= 1;
                  }
                  try {
                    const error_loaded = await load_node({
                      ...opts,
                      url: event.url,
                      node: error_node,
                      stuff: node_loaded.stuff,
                      is_error: true,
                      status,
                      error: error2
                    });
                    if (error_loaded.loaded.error) {
                      continue;
                    }
                    page_config = get_page_config(error_node.module, options);
                    branch = branch.slice(0, j + 1).concat(error_loaded);
                    stuff = { ...node_loaded.stuff, ...error_loaded.stuff };
                    break ssr;
                  } catch (err) {
                    const e = coalesce_to_error(err);
                    options.handle_error(e, event);
                    continue;
                  }
                }
              }
              return with_cookies(await respond_with_error({
                event,
                options,
                state,
                $session,
                status,
                error: error2,
                ssr
              }), set_cookie_headers);
            }
          }
          if (loaded && loaded.loaded.stuff) {
            stuff = {
              ...stuff,
              ...loaded.loaded.stuff
            };
          }
        }
      }
    try {
      return with_cookies(await render_response({
        ...opts,
        stuff,
        url: event.url,
        page_config,
        status,
        error: error2,
        branch: branch.filter(Boolean)
      }), set_cookie_headers);
    } catch (err) {
      const error3 = coalesce_to_error(err);
      options.handle_error(error3, event);
      return with_cookies(await respond_with_error({
        ...opts,
        status: 500,
        error: error3
      }), set_cookie_headers);
    }
  }
  function get_page_config(leaf, options) {
    if ("ssr" in leaf) {
      throw new Error("`export const ssr` has been removed \u2014 use the handle hook instead: https://kit.svelte.dev/docs#hooks-handle");
    }
    return {
      router: "router" in leaf ? !!leaf.router : options.router,
      hydrate: "hydrate" in leaf ? !!leaf.hydrate : options.hydrate
    };
  }
  function with_cookies(response, set_cookie_headers) {
    if (set_cookie_headers.length) {
      set_cookie_headers.forEach((value) => {
        response.headers.append("set-cookie", value);
      });
    }
    return response;
  }
  async function render_page(event, route, match, options, state, ssr) {
    if (state.initiator === route) {
      return new Response(`Not found: ${event.url.pathname}`, {
        status: 404
      });
    }
    const params = route.params ? decode_params(route.params(match)) : {};
    const $session = await options.hooks.getSession(event);
    const response = await respond$1({
      event,
      options,
      state,
      $session,
      route,
      params,
      ssr
    });
    if (response) {
      return response;
    }
    if (state.fetched) {
      return new Response(`Bad request in load function: failed to fetch ${state.fetched}`, {
        status: 500
      });
    }
  }
  async function respond(request, options, state = {}) {
    const url = new URL(request.url);
    if (url.pathname !== "/" && options.trailing_slash !== "ignore") {
      const has_trailing_slash = url.pathname.endsWith("/");
      if (has_trailing_slash && options.trailing_slash === "never" || !has_trailing_slash && options.trailing_slash === "always" && !(url.pathname.split("/").pop() || "").includes(".")) {
        url.pathname = has_trailing_slash ? url.pathname.slice(0, -1) : url.pathname + "/";
        if (url.search === "?")
          url.search = "";
        return new Response(void 0, {
          status: 301,
          headers: {
            location: url.pathname + url.search
          }
        });
      }
    }
    const { parameter, allowed } = options.method_override;
    const method_override = url.searchParams.get(parameter)?.toUpperCase();
    if (method_override) {
      if (request.method === "POST") {
        if (allowed.includes(method_override)) {
          request = new Proxy(request, {
            get: (target, property, _receiver) => {
              if (property === "method")
                return method_override;
              return Reflect.get(target, property, target);
            }
          });
        } else {
          const verb = allowed.length === 0 ? "enabled" : "allowed";
          const body = `${parameter}=${method_override} is not ${verb}. See https://kit.svelte.dev/docs#configuration-methodoverride`;
          return new Response(body, {
            status: 400
          });
        }
      } else {
        throw new Error(`${parameter}=${method_override} is only allowed with POST requests`);
      }
    }
    const event = {
      request,
      url,
      params: {},
      locals: {},
      platform: state.platform
    };
    const removed = (property, replacement, suffix = "") => ({
      get: () => {
        throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
      }
    });
    const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
    const body_getter = {
      get: () => {
        throw new Error("To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details);
      }
    };
    Object.defineProperties(event, {
      method: removed("method", "request.method", details),
      headers: removed("headers", "request.headers", details),
      origin: removed("origin", "url.origin"),
      path: removed("path", "url.pathname"),
      query: removed("query", "url.searchParams"),
      body: body_getter,
      rawBody: body_getter
    });
    let ssr = true;
    try {
      const response = await options.hooks.handle({
        event,
        resolve: async (event2, opts) => {
          if (opts && "ssr" in opts)
            ssr = opts.ssr;
          if (state.prerender && state.prerender.fallback) {
            return await render_response({
              url: event2.url,
              params: event2.params,
              options,
              state,
              $session: await options.hooks.getSession(event2),
              page_config: { router: true, hydrate: true },
              stuff: {},
              status: 200,
              branch: [],
              ssr: false
            });
          }
          let decoded = decodeURI(event2.url.pathname);
          if (options.paths.base) {
            if (!decoded.startsWith(options.paths.base)) {
              return new Response(void 0, { status: 404 });
            }
            decoded = decoded.slice(options.paths.base.length) || "/";
          }
          for (const route of options.manifest._.routes) {
            const match = route.pattern.exec(decoded);
            if (!match)
              continue;
            const response2 = route.type === "endpoint" ? await render_endpoint(event2, route, match) : await render_page(event2, route, match, options, state, ssr);
            if (response2) {
              if (response2.status === 200 && response2.headers.has("etag")) {
                let if_none_match_value = request.headers.get("if-none-match");
                if (if_none_match_value?.startsWith('W/"')) {
                  if_none_match_value = if_none_match_value.substring(2);
                }
                const etag = response2.headers.get("etag");
                if (if_none_match_value === etag) {
                  const headers = new Headers({ etag });
                  for (const key2 of [
                    "cache-control",
                    "content-location",
                    "date",
                    "expires",
                    "vary"
                  ]) {
                    const value = response2.headers.get(key2);
                    if (value)
                      headers.set(key2, value);
                  }
                  return new Response(void 0, {
                    status: 304,
                    headers
                  });
                }
              }
              return response2;
            }
          }
          if (!state.initiator) {
            const $session = await options.hooks.getSession(event2);
            return await respond_with_error({
              event: event2,
              options,
              state,
              $session,
              status: 404,
              error: new Error(`Not found: ${event2.url.pathname}`),
              ssr
            });
          }
          return await fetch(request);
        },
        get request() {
          throw new Error("request in handle has been replaced with event" + details);
        }
      });
      if (response && !(response instanceof Response)) {
        throw new Error("handle must return a Response object" + details);
      }
      return response;
    } catch (e) {
      const error2 = coalesce_to_error(e);
      options.handle_error(error2, event);
      try {
        const $session = await options.hooks.getSession(event);
        return await respond_with_error({
          event,
          options,
          state,
          $session,
          status: 500,
          error: error2,
          ssr
        });
      } catch (e2) {
        const error3 = coalesce_to_error(e2);
        return new Response(options.dev ? error3.stack : error3.message, {
          status: 500
        });
      }
    }
  }
  var base = "";
  var assets = "";
  function set_paths(paths) {
    base = paths.base;
    assets = paths.assets || base;
  }
  var user_hooks = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module"
  });
  var template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<meta name="description" content="" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
  var read = null;
  set_paths({ "base": "", "assets": "" });
  var get_hooks = (hooks) => ({
    getSession: hooks.getSession || (() => ({})),
    handle: hooks.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
    handleError: hooks.handleError || (({ error: error2 }) => console.error(error2.stack)),
    externalFetch: hooks.externalFetch || fetch
  });
  var App = class {
    constructor(manifest2) {
      const hooks = get_hooks(user_hooks);
      this.options = {
        amp: false,
        csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
        dev: false,
        floc: false,
        get_stack: (error2) => String(error2),
        handle_error: (error2, event) => {
          hooks.handleError({
            error: error2,
            event,
            get request() {
              throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
            }
          });
          error2.stack = this.options.get_stack(error2);
        },
        hooks,
        hydrate: true,
        manifest: manifest2,
        method_override: { "parameter": "_method", "allowed": [] },
        paths: { base, assets },
        prefix: assets + "/_app/",
        prerender: true,
        read,
        root: Root,
        service_worker: null,
        router: true,
        target: "#svelte",
        template,
        template_contains_nonce: false,
        trailing_slash: "never"
      };
    }
    render(request, options = {}) {
      if (!(request instanceof Request)) {
        throw new Error("The first argument to app.render must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
      }
      return respond(request, this.options, options);
    }
  };

  // .svelte-kit/cloudflare-workers-tmp/manifest.js
  var manifest = {
    appDir: "_app",
    assets: new Set(["favicon.png"]),
    _: {
      mime: { ".png": "image/png" },
      entry: { "file": "start-4672b1e6.js", "js": ["start-4672b1e6.js", "chunks/vendor-aefc53be.js"], "css": [] },
      nodes: [
        () => Promise.resolve().then(() => (init__(), __exports)),
        () => Promise.resolve().then(() => (init__2(), __exports2)),
        () => Promise.resolve().then(() => (init__3(), __exports3))
      ],
      routes: [
        {
          type: "page",
          pattern: /^\/$/,
          params: null,
          path: "/",
          a: [0, 2],
          b: [1]
        }
      ]
    }
  };
  var prerendered = new Set([]);

  // .svelte-kit/cloudflare-workers-tmp/entry.js
  var import_kv_asset_handler = __toModule(require_dist());
  var app = new App(manifest);
  var prefix = `/${manifest.appDir}/`;
  addEventListener("fetch", (event) => {
    event.respondWith(handle(event));
  });
  async function handle(event) {
    const { request } = event;
    const url = new URL(request.url);
    if (url.pathname.startsWith(prefix)) {
      const res = await (0, import_kv_asset_handler.getAssetFromKV)(event);
      return new Response(res.body, {
        headers: {
          "cache-control": "public, immutable, max-age=31536000",
          "content-type": res.headers.get("content-type")
        }
      });
    }
    const pathname = url.pathname.replace(/\/$/, "");
    let file = pathname.substring(1);
    try {
      file = decodeURIComponent(file);
    } catch (err) {
    }
    if (manifest.assets.has(file) || manifest.assets.has(file + "/index.html") || prerendered.has(pathname || "/")) {
      return await (0, import_kv_asset_handler.getAssetFromKV)(event);
    }
    try {
      return await app.render(request);
    } catch (e) {
      return new Response("Error rendering route:" + (e.message || e.toString()), { status: 500 });
    }
  }
})();
