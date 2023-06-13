window.onload = function() {
    // This is a rendered version of swagger.html
    const ui = SwaggerUIBundle(
      Object.assign(
        {
          url: "/swagger_api/apispec.json",
          dom_id: '#swagger-ui',
          validatorUrl: null,
          displayOperationId: true,
          deepLinking: true,
          jsonEditor: true,
          apisSorter: "alpha",
          presets: [
              SwaggerUIBundle.presets.apis,
              SwaggerUIStandalonePreset
          ],
          plugins: [
              SwaggerUIBundle.plugins.DownloadUrl
          ],
          layout: "StandaloneLayout",
        },
        {}
      )
    )
    let auth_config = null;
    ui.initOAuth(auth_config);
    window.ui = ui
    $(".topbar-wrapper .link span").replaceWith("<span>Flasgger</span>");
}
