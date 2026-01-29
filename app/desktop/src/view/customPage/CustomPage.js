Ext.define("y.view.customPage.CustomPage", {
  // Ajusta 'MeuTeste' para o nome da tua app em app.json (ex: 'projecto_requerido')
  extend: "Ext.Container",
  //alias: 'widget.main',  // Alias padrão para a view principal
  cls: "custompage",
  title: "",
  layout: "vbox",
  bodyPadding: 10,
  scrollable: true,
  xtype: "custompage",
  requires: ["Ext.Ajax", "Ext.Label", "Ext.field.Select"],
  initialize: function () {
    this.callParent(arguments);
    this.loadZonas();
  },

  loadZonas: function () {
    var zonaSelect = this.down("#zonaSelect");
    if (!zonaSelect) {
      return;
    }

    var baseUrl = "/cmdbuild/services/rest/v3";
    var url =
      baseUrl +
      "/classes/Building/cards?onlyGridAttrs=true&page=1&start=0&limit=50" +
      "&sort=%5B%7B%22property%22%3A%22Code%22%2C%22direction%22%3A%22ASC%22%7D%5D";

    Ext.Ajax.request({
      url: url,
      method: "GET",
      success: function (response) {
        var json = Ext.decode(response.responseText);
        var rows = (json && (json.data || json.rows)) || [];
        var options = rows.map(function (item) {
          var value = item._id || item.Id || item.id || item.Code || item.code;
          var text =
            item.Description ||
            item.description ||
            item.Code ||
            item.code ||
            value;
          return { value: value, text: text };
        });

        zonaSelect.setOptions(options);
      },
      failure: function (response) {
        // Logar para diagnostico local; no OpenMaint pode existir CORS/auth.
        console.error("Falha ao carregar zonas:", response);
      },
    });
  },

  loadAreas: function (zonaId) {
    var areaSelect = this.down("#areaSelect");
    if (!areaSelect) {
      return;
    }

    if (!zonaId) {
      areaSelect.setValue(null);
      areaSelect.setOptions([]);
      return;
    }

    var filter = {
      relation: [
        {
          domain: "BuildingFloor",
          source: "Building",
          destination: "Floor",
          direction: "_2",
          type: "oneof",
          cards: [{ className: "Building", id: zonaId }],
        },
      ],
    };

    var baseUrl = "/cmdbuild/services/rest/v3";
    var url =
      baseUrl +
      "/classes/Floor/cards?onlyGridAttrs=true&filter=" +
      encodeURIComponent(JSON.stringify(filter)) +
      "&page=1&start=0&limit=50" +
      "&sort=%5B%7B%22property%22%3A%22Code%22%2C%22direction%22%3A%22ASC%22%7D%5D";

    Ext.Ajax.request({
      url: url,
      method: "GET",
      success: function (response) {
        var json = Ext.decode(response.responseText);
        var rows = (json && (json.data || json.rows)) || [];
        var options = rows.map(function (item) {
          var value = item._id || item.Id || item.id || item.Code || item.code;
          var text =
            item.Description ||
            item.description ||
            item.Code ||
            item.code ||
            value;
          return { value: value, text: text };
        });

        areaSelect.setOptions(options);
      },
      failure: function (response) {
        console.error("Falha ao carregar areas:", response);
      },
    });
  },

  loadSubzonas: function (areaId) {
    var subzonaSelect = this.down("#subzonaSelect");
    if (!subzonaSelect) {
      return;
    }

    if (!areaId) {
      subzonaSelect.setValue(null);
      subzonaSelect.setOptions([]);
      return;
    }

    var filter = {
      relation: [
        {
          domain: "FloorUnit",
          source: "Floor",
          destination: "Unit",
          direction: "_2",
          type: "oneof",
          cards: [{ className: "Floor", id: areaId }],
        },
      ],
    };

    var baseUrl = "/cmdbuild/services/rest/v3";
    var url =
      baseUrl +
      "/classes/Unit/cards?onlyGridAttrs=true&filter=" +
      encodeURIComponent(JSON.stringify(filter)) +
      "&page=1&start=0&limit=50" +
      "&sort=%5B%7B%22property%22%3A%22Code%22%2C%22direction%22%3A%22ASC%22%7D%5D";

    Ext.Ajax.request({
      url: url,
      method: "GET",
      success: function (response) {
        var json = Ext.decode(response.responseText);
        var rows = (json && (json.data || json.rows)) || [];
        var options = rows.map(function (item) {
          var value = item._id || item.Id || item.id || item.Code || item.code;
          var text =
            item.Description ||
            item.description ||
            item.Code ||
            item.code ||
            value;
          return { value: value, text: text };
        });

        subzonaSelect.setOptions(options);
      },
      failure: function (response) {
        console.error("Falha ao carregar subzonas:", response);
      },
    });
  },
  requires: ["Ext.Label", "Ext.field.Select"],

  items: [
    {
      xtype: "container",
      layout: {
        type: "hbox",
        align: "middle",
      },
      width: "100%",
      height: 60,
      style: {
        backgroundColor: "#2f6fa7",
        color: "white",
      },
      padding: "10 15",

      items: [
        // 🔹 ZONAS (esquerda)
        {
          xtype: "container",
          flex: 1,
          layout: { type: "hbox", align: "middle" },
          defaults: {
            xtype: "selectfield",
            width: 130,
            margin: "0 10 0 0",
          },
          items: [
            {
              itemId: "zonaSelect",
              placeholder: "Zona",
              listeners: {
                change: function (field, newValue) {
                  var view = field.up("custompage");
                  if (view && view.loadAreas) {
                    view.loadAreas(newValue);
                  }
                },
              },
              options: [
                { value: "ZONA_A", text: "Zona A" },
                { value: "ZONA_B", text: "Zona B" },
                { value: "ZONA_C", text: "Zona C" },
              ],
            },
            {
              itemId: "areaSelect",
              placeholder: "Área",
              listeners: {
                change: function (field, newValue) {
                  var view = field.up("custompage");
                  if (view && view.loadSubzonas) {
                    view.loadSubzonas(newValue);
                  }
                },
              },
              options: [
                { value: "AREA_1", text: "Área 1" },
                { value: "AREA_2", text: "Área 2" },
              ],
            },
            {
              itemId: "subzonaSelect",
              placeholder: "Subzona",
              margin: 0,
              options: [
                { value: "SUB_1", text: "Subárea 1" },
                { value: "SUB_2", text: "Subárea 2" },
              ],
            },
          ],
        },

        // 🔹 TÍTULO (centro)
        {
          xtype: "component",
          flex: 2,
          style: {
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "16px",
          },
          html: "PLANTILLA FICHAS INSPECCIÓN PLAN DE MANTENIMIENTO",
        },

        // 🔹 LOGOS (direita)
        {
          xtype: "container",
          flex: 1,
          layout: "hbox",
          pack: "end",
          items: [
            {
              xtype: "image",
              // Trocar pelo logo real quando disponível em /resources/images
              src: Ext.getResourcePath("desktop/5.jpg"),
              height: 40,
              margin: "0 10 0 0",
            },
            {
              xtype: "image",
              // Trocar pelo logo real quando disponível em /resources/images
              src: Ext.getResourcePath("desktop/5.jpg"),
              height: 40,
            },
          ],
        },
      ],
    },
    // Título da tabela
    {
      xtype: "label",
      text: "PROGRAMACIÓN",
      style: "font-weight: bold; font-size: 16px; ",
    },
    // Grid principal com os dados do PDF (copiei todos os itens da imagem)
    {
      xtype: "grid",
      flex: 1,
      cls: "custom_header",

      minHeight: 400,
      store: {
        fields: [
          "periodicidad",
          "fecha_planificada",
          "fecha_inspección",
          "inspección_Por",
          "si",
          "no",
          "observaciones",
        ],
        data: [
          {
            periodicidad: "TRIMESTRAL",
            fecha_planificada: "27/10/2025",
            fecha_inspección: "",
            inspección_Por: "",
            si: "X",
            no: "",
            observaciones: "",
          },
          {
            periodicidad: "TRIMESTRAL",
            fecha_planificada: "27/10/2025",
            fecha_inspección: "",
            inspección_Por: "",
            si: "X",
            no: "",
            observaciones: "",
          },
        ],
      },
      columns: [
        {
          text: "Periodicidad",
          dataIndex: "periodicidad",
          width: 90,
          borderWidth: 2,
        },
        {
          text: "Fecha_Planificada",
          dataIndex: "fecha_planificada",
          width: 250,
          tdCls: 'player'
        },
        {
          text: "Fecha Inspección",
          dataIndex: "fecha_inspección",
          flex: 2,
        },
        {
          text: "Inspección Por:",
          dataIndex: "inspección_Por",
          width: 150,
        },
        {
          text: "Si",
          dataIndex: "si",
          width: 60,
          align: "center",
          xtype: "checkcolumn",
          editor: {
            xtype: "checkbox",
            cls: "x-grid-checkheader-editor",
          },
        },
        {
          text: "No",
          dataIndex: "no",
          width: 60,
          xtype: "checkcolumn",
          editor: {
            xtype: "checkbox",
            cls: "x-grid-checkheader-editor",
          },
        },
        { text: "Observaciones", dataIndex: "observaciones", flex: 1 },
      ],
    },
  ],
});
