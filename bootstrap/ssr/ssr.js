import { unref, useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, createSSRApp, h } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Head, Link, router, useForm, createInertiaApp } from "@inertiajs/vue3";
import { Button } from "flowbite-vue";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$6 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "About Page" }, null, _parent));
      _push(`<h1>About</h1><br><!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "Paginate",
  __ssrInlineRender: true,
  props: ["prev", "next", "currentPage", "lastPage", "lastPageUrl"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-5 text-center" }, _attrs))}><nav aria-label="Page navigation example"><ul class="inline-flex items-center -space-x-px"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: __props.prev,
        class: "block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Previous</span><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Previous"),
              (openBlock(), createBlock("svg", {
                "aria-hidden": "true",
                class: "w-5 h-5",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                  "clip-rule": "evenodd"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><!--[-->`);
      ssrRenderList(__props.lastPage, (page) => {
        _push(`<a class="${ssrRenderClass(__props.currentPage == page ? "z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white")}"${ssrRenderAttr("href", __props.next)}>${ssrInterpolate(page)}</a>`);
      });
      _push(`<!--]--></li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: __props.lastPageUrl,
        class: "block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Next</span><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Next"),
              (openBlock(), createBlock("svg", {
                "aria-hidden": "true",
                class: "w-5 h-5",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                  "clip-rule": "evenodd"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Paginate.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "MonitorList",
  __ssrInlineRender: true,
  props: ["monitors"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="relative overflow-x-auto shadow-md sm:rounded-lg"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"><tr><th scope="col" class="px-6 py-3"> Name </th><th scope="col" class="px-6 py-3"> Url </th><th scope="col" class="px-6 py-3"> Status </th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.monitors.data, (monitor) => {
        _push(`<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"><td class="px-6 py-4">${ssrInterpolate(monitor.site_name)}</td><td class="px-6 py-4">${ssrInterpolate(monitor.site_url)}</td><td class="px-6 py-4">${ssrInterpolate(monitor.status)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        next: __props.monitors.next_page_url,
        prev: __props.monitors.prev_page_url,
        currentPage: __props.monitors.current_page,
        lastPage: __props.monitors.last_page,
        lastPageUrl: __props.monitors.last_page_url
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/MonitorList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Home",
  __ssrInlineRender: true,
  props: ["monitors"],
  setup(__props) {
    function createSite() {
      router.visit("create-site");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Home" }, null, _parent));
      _push(`<div class="mt-5"><h1 class="text-center text-rose-700 text-large">Monitor List</h1></div>`);
      _push(ssrRenderComponent(unref(Button), {
        onClick: createSite,
        class: "flex-row mx-4 my-8",
        gradient: "cyan"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Add New Monitors`);
          } else {
            return [
              createTextVNode("Add New Monitors")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-4",
        monitors: __props.monitors
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {
  name: "GuestLayout"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/GuestLayout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const GuestLayout = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ layout: GuestLayout }, {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      email: null,
      password: null,
      remember: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" }, _attrs))}><div class="sm:mx-auto sm:w-full sm:max-w-sm"><img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Your Company"><h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2></div><div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"><form class="space-y-6" action="#" method="POST"><div><label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label><div class="mt-2"><input${ssrRenderAttr("value", unref(form).email)} id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">`);
      if (unref(form).errors.email) {
        _push(`<div class="text-red-700">${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div><div class="flex items-center justify-between"><label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label><div class="text-sm"><a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a></div></div><div class="mt-2"><input${ssrRenderAttr("value", unref(form).password)} id="password" name="password" type="password" autocomplete="current-password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">`);
      if (unref(form).errors.password) {
        _push(`<div class="text-red-700">${ssrInterpolate(unref(form).errors.password)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div><button class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>Login</button></div></form><p class="mt-10 text-center text-sm text-gray-500"> Not a member? ${ssrInterpolate(" ")} <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a></p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Login.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  name: "Create"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(` hello `);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Site/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/About.vue": __vite_glob_0_0, "./Pages/Home.vue": __vite_glob_0_1, "./Pages/Login.vue": __vite_glob_0_2, "./Pages/Site/Create.vue": __vite_glob_0_3 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
