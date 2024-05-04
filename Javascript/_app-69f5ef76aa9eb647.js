(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1118: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return t(8725);
        },
      ]);
    },
    8725: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return d;
          },
        });
      var r = t(5893);
      t(9166);
      var o = t(7294),
        a = t(5697),
        u = t.n(a);
      let c = o.createContext(null);
      function i(e, n) {
        switch (n.type) {
          case "OPEN_SIDENAV":
            return {
              ...e,
              openSidenav: n.value,
            };
          case "SIDENAV_TYPE":
            return {
              ...e,
              sidenavType: n.value,
            };
          case "SIDENAV_COLOR":
            return {
              ...e,
              sidenavColor: n.value,
            };
          case "TRANSPARENT_NAVBAR":
            return {
              ...e,
              transparentNavbar: n.value,
            };
          case "FIXED_NAVBAR":
            return {
              ...e,
              fixedNavbar: n.value,
            };
          case "OPEN_CONFIGURATOR":
            return {
              ...e,
              openConfigurator: n.value,
            };
          default:
            throw Error("Unhandled action type: ".concat(n.type));
        }
      }
      function s(e) {
        let { children: n } = e,
          [t, a] = o.useReducer(i, {
            openSidenav: !1,
            sidenavColor: "blue",
            sidenavType: "white",
            transparentNavbar: !0,
            fixedNavbar: !1,
            openConfigurator: !1,
          }),
          u = o.useMemo(() => [t, a], [t, a]);
        return (0, r.jsx)(c.Provider, {
          value: u,
          children: n,
        });
      }
      (c.displayName = "MaterialTailwindContext"),
        (s.displayName = "/src/context/index.jsx"),
        (s.propTypes = {
          children: u().node.isRequired,
        });
      let l = (0, o.createContext)(null);
      function p({
        clientId: e,
        nonce: n,
        onScriptLoadSuccess: t,
        onScriptLoadError: r,
        children: a,
      }) {
        let u = (function (e = {}) {
            let { nonce: n, onScriptLoadSuccess: t, onScriptLoadError: r } = e,
              [a, u] = (0, o.useState)(!1),
              c = (0, o.useRef)(t);
            c.current = t;
            let i = (0, o.useRef)(r);
            return (
              (i.current = r),
              (0, o.useEffect)(() => {
                let e = document.createElement("script");
                return (
                  (e.src = "https://accounts.google.com/gsi/client"),
                  (e.async = !0),
                  (e.defer = !0),
                  (e.nonce = n),
                  (e.onload = () => {
                    var e;
                    u(!0),
                      null === (e = c.current) || void 0 === e || e.call(c);
                  }),
                  (e.onerror = () => {
                    var e;
                    u(!1),
                      null === (e = i.current) || void 0 === e || e.call(i);
                  }),
                  document.body.appendChild(e),
                  () => {
                    document.body.removeChild(e);
                  }
                );
              }, [n]),
              a
            );
          })({
            nonce: n,
            onScriptLoadSuccess: t,
            onScriptLoadError: r,
          }),
          c = (0, o.useMemo)(
            () => ({
              clientId: e,
              scriptLoadedSuccessfully: u,
            }),
            [e, u]
          );
        return o.createElement(
          l.Provider,
          {
            value: c,
          },
          a
        );
      }
      function d(e) {
        let { Component: n, pageProps: t } = e;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(p, {
            clientId:
              "853175965207-e3m1nhk65gqf0ffnt5a88t0ntk3np19u.apps.googleusercontent.com",
            children: (0, r.jsx)(s, {
              children: (0, r.jsx)(n, {
                ...t,
              }),
            }),
          }),
        });
      }
    },
    9166: function () {},
    2703: function (e, n, t) {
      "use strict";
      var r = t(414);
      function o() {}
      function a() {}
      (a.resetWarningCache = o),
        (e.exports = function () {
          function e(e, n, t, o, a, u) {
            if (u !== r) {
              var c = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((c.name = "Invariant Violation"), c);
            }
          }
          function n() {
            return e;
          }
          e.isRequired = e;
          var t = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: n,
            element: e,
            elementType: e,
            instanceOf: n,
            node: e,
            objectOf: n,
            oneOf: n,
            oneOfType: n,
            shape: n,
            exact: n,
            checkPropTypes: a,
            resetWarningCache: o,
          };
          return (t.PropTypes = t), t;
        });
    },
    5697: function (e, n, t) {
      e.exports = t(2703)();
    },
    414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
  },
  function (e) {
    var n = function (n) {
      return e((e.s = n));
    };
    e.O(0, [774, 179], function () {
      return n(1118), n(2937);
    }),
      (_N_E = e.O());
  },
]);
