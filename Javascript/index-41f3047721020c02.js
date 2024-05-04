(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, a, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(7849);
        },
      ]);
    },
    7849: function (e, a, r) {
      "use strict";
      r.r(a),
        r.d(a, {
          default: function () {
            return j;
          },
        });
      var l = r(5893),
        s = r(7294),
        t = r(9335),
        o = r(1415),
        n = r(3407),
        c = r(5362);
      function i() {
        let [e, a] = s.useState(!1),
          [r, i] = s.useState(!1),
          [d, m] = s.useState(!1);
        return (
          s.useEffect(() => {
            window.addEventListener(
              "resize",
              () => window.innerWidth >= 960 && a(!1)
            );
          }, []),
          s.useEffect(() => {
            function e() {
              window.scrollY > 0 ? i(!0) : i(!1);
            }
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, l.jsxs)(t.Navbar, {
            fullWidth: !0,
            shadow: !1,
            blurred: !1,
            color: r ? "red" : "white",
            className: "fixed top-0 z-50 border-0",
            children: [
              (0, l.jsxs)("div", {
                className:
                  "container mx-auto flex items-center justify-between",
                children: [
                  (0, l.jsx)(t.Typography, {
                    as: "a",
                    href: "https://www.material-tailwind.com",
                    target: "_blank",
                    variant: "h6",
                    color: r ? " white" : "black",
                    children: "Comisariato Polita",
                  }),
                  (0, l.jsxs)("ul", {
                    className:
                      "ml-10 hidden items-center gap-6 lg:flex ".concat(
                        r ? "text-white" : "  text-gray-900"
                      ),
                    children: [
                      (0, l.jsx)(t.Typography, {
                        href: "#first-div",
                        as: "a",
                        variant: "small",
                        className: "font-medium",
                        children: "Qui\xe9nes Somos",
                      }),
                      (0, l.jsx)(t.Typography, {
                        href: "#features",
                        as: "a",
                        variant: "small",
                        className: "font-medium",
                        children: "Acerca de",
                      }),
                      (0, l.jsx)(t.Typography, {
                        href: "#documentos-electronicos",
                        as: "a",
                        variant: "small",
                        className: "font-medium",
                        children: "Facturaci\xf3n Electr\xf3nica",
                      }),
                      (0, l.jsx)(t.Typography, {
                        href: "#correo-electronico",
                        as: "a",
                        variant: "small",
                        className: "font-medium",
                        children: "Contacto",
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "hidden gap-2 lg:flex lg:items-center",
                  }),
                  (0, l.jsx)(t.IconButton, {
                    variant: "text",
                    color: r ? "white" : "gray",
                    onClick: function () {
                      a((e) => !e);
                    },
                    className: "ml-auto inline-block lg:hidden",
                    children: e
                      ? (0, l.jsx)(o.Z, {
                          strokeWidth: 2,
                          className: "h-6 w-6",
                        })
                      : (0, l.jsx)(n.Z, {
                          strokeWidth: 2,
                          className: "h-6 w-6",
                        }),
                  }),
                ],
              }),
              (0, l.jsx)(t.Collapse, {
                open: e,
                children: (0, l.jsx)("div", {
                  className:
                    "container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5",
                  children: (0, l.jsxs)("ul", {
                    className: "flex flex-col gap-4 text-blue-gray-900",
                    children: [
                      (0, l.jsx)(t.Typography, {
                        href: "#first-div",
                        as: "a",
                        variant: "small",
                        className: "font-medium",
                        children: "Qui\xe9nes Somos",
                      }),
                      (0, l.jsx)(t.Typography, {
                        href: "#features",
                        as: "a",
                        variant: "small",
                        className: "font-medium",
                        children: "Acerca de",
                      }),
                      (0, l.jsx)(t.Typography, {
                        href: "#documentos-electronicos",
                        as: "a",
                        variant: "small",
                        className: "font-medium",
                        children: "Facturaci\xf3n Electr\xf3nica",
                      }),
                      (0, l.jsx)(t.Typography, {
                        href: "#correo-electronico",
                        as: "a",
                        variant: "small",
                        className: "font-medium",
                        children: "Contacto",
                      }),
                    ],
                  }),
                }),
              }),
              (0, l.jsx)(t.IconButton, {
                size: "lg",
                color: "white",
                className:
                  "fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900 shadow-2xl border-x-4 border-y-4 p-8 \n         bg-blue-900",
                ripple: !1,
                href: "https://www.facebook.com/despensapolita.bf?mibextid=LQQJ4d",
                children: (0, l.jsx)("a", {
                  href: "https://www.facebook.com/despensapolita.bf?mibextid=LQQJ4d",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, l.jsx)("svg", {
                    class: "w-12 h-12 text-white text-4xl",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "40",
                    height: "40",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                      "fill-rule": "evenodd",
                      d: "M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z",
                      "clip-rule": "evenodd",
                    }),
                  }),
                }),
              }),
              (0, l.jsx)(t.IconButton, {
                size: "lg",
                color: "white",
                className:
                  "fixed bottom-28 right-8 z-40 rounded-full shadow-blue-gray-900 shadow-2xl border-x-4 border-y-4 p-8 \n         bg-green-600",
                ripple: !1,
                children: (0, l.jsx)("a", {
                  href: "https://wa.me/593980903968?text=Hola",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, l.jsxs)("svg", {
                    class: "w-12 h-12 text-white text-4xl",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "40",
                    height: "40",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: [
                      (0, l.jsx)("path", {
                        fill: "currentColor",
                        "fill-rule": "evenodd",
                        d: "M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z",
                        "clip-rule": "evenodd",
                      }),
                      (0, l.jsx)("path", {
                        fill: "currentColor",
                        d: "M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z",
                      }),
                    ],
                  }),
                }),
              }),
              d &&
                (0, l.jsx)(t.Card, {
                  className: "mt-6 w-96 fixed bottom-8 left-2 z-40",
                  color: "transparent",
                  children: (0, l.jsxs)(t.CardHeader, {
                    color: "blue-gray",
                    className: "",
                    children: [
                      (0, l.jsx)(t.IconButton, {
                        className:
                          "!absolute top-3 right-3 bg-yellow-600 shadow-none z-40",
                        onClick: () => m(!1),
                        children: (0, l.jsx)(c.Z, {
                          className: "w-11",
                          color: "orange",
                        }),
                      }),
                      (0, l.jsxs)(t.Carousel, {
                        loop: !0,
                        autoplay: !0,
                        className: "rounded-xl",
                        children: [
                          (0, l.jsx)("img", {
                            src: "/Carrusel/1.jpg",
                            alt: "image 1",
                            className:
                              "h-full w-full object-cover object-center",
                          }),
                          (0, l.jsx)("img", {
                            src: "/Carrusel/2.jpg",
                            alt: "image 2",
                            className:
                              "h-full w-full object-cover object-center",
                          }),
                          (0, l.jsx)("img", {
                            src: "/Carrusel/3.jpg",
                            alt: "image 3",
                            className:
                              "h-full w-full object-cover object-center",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          })
        );
      }
      var d = r(5675),
        m = r.n(d);
      function h() {
        return (0, l.jsxs)("div", {
          className: "relative min-h-screen w-full",
          children: [
            (0, l.jsx)("header", {
              className: "grid !min-h-[30rem] ",
              style: {
                backgroundImage:
                  "linear-gradient(to right, rgba(150,0,0,0.8), rgba(150,0,0,0.8)), url('./image/fondo.jpg')",
              },
              children: (0, l.jsxs)("div", {
                className:
                  "container mx-auto mt-14 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2",
                children: [
                  (0, l.jsxs)("div", {
                    className: "col-span-1",
                    children: [
                      (0, l.jsxs)(t.Typography, {
                        variant: "h1",
                        color: "white",
                        className: "mb-4",
                        children: [
                          "Bienvenido a ",
                          (0, l.jsx)("br", {}),
                          " Comisariato Polita",
                        ],
                      }),
                      (0, l.jsx)(t.Typography, {
                        variant: "lead",
                        className: "mb-7 !text-white md:pr-16 xl:pr-28",
                        children:
                          "Tu destino para productos frescos y de calidad.",
                      }),
                    ],
                  }),
                  (0, l.jsx)(m(), {
                    width: 900,
                    height: 200,
                    src: "./image/PolitaPNG5.png",
                    alt: "team work",
                    className:
                      "col-span-1 my-20 h-full max-h-[60rem] -translate-y-32 md:max-h-[350rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0",
                  }),
                ],
              }),
            }),
            (0, l.jsx)("div", {
              className:
                "mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-2xl",
              children: (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)(t.Typography, {
                    variant: "h3",
                    color: "blue-gray",
                    className: "mb-3",
                    children: "\xbfQui\xe9nes Somos?",
                  }),
                  (0, l.jsx)(t.Typography, {
                    variant: "paragraph",
                    className: "font-normal !text-gray-700 lg:w-5/12",
                    children:
                      "Somos una tienda comprometida con la satisfacci\xf3n de nuestros clientes. Ofrecemos una amplia variedad de productos frescos y de calidad.",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function u() {
        return (0, l.jsx)("section", {
          className: "py-14 ",
          children: (0, l.jsxs)("div", {
            className: "container mx-auto mb-20 text-center",
            children: [
              (0, l.jsx)(t.Typography, {
                variant: "h2",
                color: "blue-gray",
                children: "Acerca de",
              }),
              (0, l.jsx)(t.Typography, {
                variant: "lead",
                className:
                  "mx-auto w-full px-4 !text-gray-700 lg:w-11/12 lg:px-8 ",
                children:
                  "En Comisariato Polita, nos esforzamos por brindar una experiencia de compra excepcional. Nuestro equipo est\xe1 comprometido con la excelencia en el servicio al cliente y la calidad de nuestros productos.",
              }),
            ],
          }),
        });
      }
      var x = r(9633);
      function p() {
        let [e, a] = (0, s.useState)(""),
          [r, o] = (0, s.useState)("001-010-000000000");
        return (0, l.jsx)("section", {
          className: "py-14 ",
          children: (0, l.jsxs)("div", {
            className: "container mx-auto mb-20 text-center px-9",
            children: [
              (0, l.jsx)(t.Typography, {
                variant: "h2",
                color: "blue-gray",
                className: "",
                children: "Buscar y Descargar Comprobantes Electr\xf3nicos",
              }),
              (0, l.jsxs)("div", {
                className: "w-full mt-5 flex",
                children: [
                  (0, l.jsx)(t.Input, {
                    label: "N\xfamero de documento:",
                    value: e,
                    onChange: (e) => {
                      let { value: r } = e.target,
                        l = r.padStart(9, "0");
                      a(r);
                      let s = "001-010-".concat(l.slice(-9));
                      o(s), console.log(s);
                    },
                  }),
                  (0, l.jsx)(t.Tooltip, {
                    content: "Buscar Documento",
                    children: (0, l.jsx)("a", {
                      href: "https://superdespensapolita.com/DocumentosElectronicos/Facturas/".concat(
                        r,
                        ".pdf"
                      ),
                      target: "_blank",
                      children: (0, l.jsx)(t.Button, {
                        color: "blue",
                        className: "ml-4",
                        children: (0, l.jsx)(x.Z, {
                          className: "h-4 w-4 cursor-pointer ",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function g() {
        return (0, l.jsxs)(t.Card, {
          color: "transparent",
          shadow: !1,
          className: "mx-auto container w-full items-center max-w-[50rem]",
          children: [
            (0, l.jsx)(t.Typography, {
              variant: "h2",
              color: "blue-gray",
              children: "Contacto",
            }),
            (0, l.jsxs)("form", {
              className: "mt-8 mb-2 w-full shadow-2xl p-5 ",
              children: [
                (0, l.jsxs)("div", {
                  className: "mb-1 flex flex-col gap-6 ",
                  children: [
                    (0, l.jsx)(t.Typography, {
                      variant: "h6",
                      color: "blue-gray",
                      className: "-mb-3",
                      children: "Nombre",
                    }),
                    (0, l.jsx)(t.Input, {
                      size: "lg",
                      placeholder: "",
                      className:
                        " !border-t-blue-gray-200 focus:!border-t-gray-900",
                      labelProps: {
                        className: "before:content-none after:content-none",
                      },
                    }),
                    (0, l.jsx)(t.Typography, {
                      variant: "h6",
                      color: "blue-gray",
                      className: "-mb-3",
                      children: "Correo electr\xf3nico:",
                    }),
                    (0, l.jsx)(t.Input, {
                      size: "lg",
                      placeholder: "name@mail.com",
                      className:
                        " !border-t-blue-gray-200 focus:!border-t-gray-900",
                      labelProps: {
                        className: "before:content-none after:content-none",
                      },
                    }),
                    (0, l.jsx)(t.Typography, {
                      variant: "h6",
                      color: "blue-gray",
                      className: "-mb-3",
                      children: "Mensaje:",
                    }),
                    (0, l.jsx)("textarea", {
                      type: "text",
                      size: "lg",
                      className: " border-2 border-blue-gray-100 rounded-lg",
                      labelProps: {
                        className: "before:content-none after:content-none",
                      },
                    }),
                  ],
                }),
                (0, l.jsx)(t.Button, {
                  className: "mt-6",
                  fullWidth: !0,
                  color: "red",
                  children: "Enviar",
                }),
              ],
            }),
          ],
        });
      }
      function f() {
        return (0, l.jsx)("footer", {
          className: "mt-10 bg-gray-900 pt-2",
          children: (0, l.jsx)("div", {
            className: "container mx-auto text-center  gap-8",
            children: (0, l.jsx)(t.Typography, {
              target: "_blank",
              variant: "paragraph",
              color: "white",
              children: "\xa9 2024 Comisariato Polita",
            }),
          }),
        });
      }
      function j() {
        return (0, l.jsxs)("div", {
          className: "min-h-screen bg-blue-gray-50/50",
          children: [
            (0, l.jsx)(i, {}),
            (0, l.jsx)("div", {
              id: "first-div",
              children: (0, l.jsx)(h, {}),
            }),
            (0, l.jsx)("div", {
              id: "features",
              children: (0, l.jsx)(u, {}),
            }),
            (0, l.jsx)("div", {
              id: "documentos-electronicos",
              children: (0, l.jsx)(p, {}),
            }),
            (0, l.jsx)("div", {
              id: "correo-electronico",
              children: (0, l.jsx)(g, {}),
            }),
            (0, l.jsx)(f, {}),
          ],
        });
      }
      new Date().getFullYear(), (j.displayName = "/src/layout/dashboard.jsx");
    },
  },
  function (e) {
    e.O(0, [434, 961, 774, 888, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O());
  },
]);
