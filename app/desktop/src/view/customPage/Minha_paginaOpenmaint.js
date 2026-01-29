(function () {
  var style = document.createElement("style");
  style.textContent = `
      .custom-grid .x-column-header-inner {
        background-color: #9bc2e6 !important;
        font-weight: bold;
        color: #222;
        text-align: center;
        border-right: 1px solid #000;
      }

      .custom-grid .x-column-header-group {
         border-right: 1px solid #000 !important;
          border-top: 1px solid #000 !important;
          border-bottom: 1px solid #000 !important;
            color: #ffff;
            font: 400 14px / 20px "Poppins", sans-serif;
            outline: 0;
            background-color: #37507c;
      }
      
      .custom-grid  .x-grid-cell-inner {
          color: #222 !important;
          background-color: #ffff !important;
          border-width: 0px 0px 1px 1px !important;
          border-style: solid !important;
      }
      
      
      .custom-grid .x-grid-item {
          border-style: solid  !important;
          border-width: 1px 0 0 !important;
          border-color: #222 !important;
      }
      .custom-grid .x-grid-item:nth-child(odd) .x-grid-cell {
          background-color: #ffffff !important;
      }
      .custom-grid .x-grid-item:nth-child(even) .x-grid-cell {
          background-color: #ffffff !important;
      }
      
      
      .status-expired { color: #d9534f; font-weight: bold; }
      .status-current { color: #f0ad4e; font-weight: bold; }
      .status-future { color: #5cb85c; font-weight: bold; }

      .x-grid-group-hd {
          border-width: 0 0 0px 0;
          padding: 8px 10px;
          background: #fff;
          cursor: pointer;
    }
      
      .custom-grid .x-grid-group-hd {
        background-color: #d9d9d9 !important;
        padding: 10px !important;
        border-bottom: 2px solid #000 !important;
        text-align: center !important;
      }
      .custom-grid .x-grid-group-title {
        color: #333 !important;
        font-weight: bold !important;
        font-size: 14px !important;
        text-transform: uppercase !important;
      }
      
      
      .custom-zona-input .x-form-text {
        background-color: transparent !important;
        border: none !important;
        border-bottom: 1px solid white !important;
        color: white !important;
      }
      .custom-zona-input .x-form-trigger {
        border-bottom: 1px solid white !important;
      }
      .custom-grid .x-grid-body{
        background: #ffff !important;
      }

      .custom-grid .x-grid-with-col-lines .x-grid-cell{
          border-style: solid;
          border-color: #000;
          border-width: 0 1px 1px 0;
      }
      .custom-grid  .x-grid-group-hd-collapsed .x-grid-group-title:before {
          display: none !important;
      }
      .x-grid-group-hd-collapsible .x-grid-group-title:before{
          display: none !important;
      }

  `;
  document.head.appendChild(style);
})();

Ext.define("CMDBuildUI.view.custompages.pagina.Pagina", {
  extend: "Ext.panel.Panel",
  alias: "widget.custompages-pagina",
  //mixins: ["CMDBuildUI.mixins.CustomPage"],

  title: "PLANTILLA FICHAS INSPECCIÓN",
  layout: { type: "vbox", align: "stretch" },
  bodyStyle: "background: #fff;",

  items: [
    {
      xtype: "container",
      layout: { type: "vbox", align: "stretch" },
      bodyPadding: 5,
      scrollable: true,
      flex: 1,
      items: [
        // ================= HEADER AZUL =================
        {
          xtype: "container",
          height: 70,
          style: {
            backgroundColor: "#2f75b5",
            color: "white",
          },
          layout: { type: "hbox", align: "middle" },
          padding: "10 15",
          items: [
            {
              xtype: "container",
              flex: 1,
              layout: { type: "hbox", align: "middle" },
              defaults: {
                xtype: "combo",
                editable: false,
                width: 130,
                margin: "0 10 0 0",
              },
              items: [
                {
                  emptyText: "Zona",
                  store: {
                    fields: ["id", "name"],
                    data: [
                      { id: "ZONA_A", name: "Zona A" },
                      { id: "ZONA_B", name: "Zona B" },
                      { id: "ZONA_C", name: "Zona C" },
                    ],
                  },
                  displayField: "name",
                  valueField: "id",
                },
                {
                  emptyText: "Subzona",
                  margin: 0,
                  store: {
                    fields: ["id", "name"],
                    data: [
                      { id: "SUB_1", name: "Subárea 1" },
                      { id: "SUB_2", name: "Subárea 2" },
                    ],
                  },
                  displayField: "name",
                  valueField: "id",
                },
                {
                  emptyText: "Área",
                  store: {
                    fields: ["id", "name"],
                    data: [
                      { id: "AREA_1", name: "Área 1" },
                      { id: "AREA_2", name: "Área 2" },
                    ],
                  },
                  displayField: "name",
                  valueField: "id",
                },
              ],
            },
            {
              xtype: "component",
              flex: 1,
              html: "PLANTILLA FICHAS INSPECCIÓN PLAN DE MANTENIMIENTO",
              style: {
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "16px",
                fontFamily: "Arial, sans-serif",
              },
            },
            {
              xtype: "container",
              flex: 1,
              layout: { type: "hbox", pack: "end" },
              items: [
                {
                  xtype: "component",
                  html:
                    '<img src="' +
                    Ext.getResourcePath("images/porteria.png") +
                    '" height="40" style="margin-right:10px;">',
                },
              ],
            },
          ],
        },

        // ================= GRID =================
        {
          xtype: "grid",
          flex: 1,
          cls: "custom-grid",
          margin: "0 0 0 0",
          columnLines: true,

          // // Plugin para edição nas células (Data, Combo, Obs)
          // plugins: {
          //   ptype: "cellediting",
          //   clicksToEdit: 1,
          // },

          // Feature para agrupar por Categoria (Fontaneria, etc)
          features: [
            {
              ftype: "grouping",
              groupHeaderTpl: "{name}",
              hideGroupedHeader: true,
              startCollapsed: false,
            },
          ],

          store: {
            fields: [
              "categoria", // Campo usado para agrupar
              "periodicidad",
              "fecha_planificada",
              "descripcion",
              "fecha_inspección",
              "inspeccionado_por",
              "conforme_si",
              "conforme_no",
              "observaciones",
            ],
            groupField: "categoria", // Importante: define quem agrupa
            data: [
              // FONTANERIA
              {
                categoria: "FONTANERIA",
                periodicidad: "TRIMESTRAL",
                fecha_planificada: "27/10/2025",
                descripcion:
                  "Se comprobará toda la línea para detectar pérdidas",
                conforme_si: false,
                conforme_no: false,
              },
              {
                categoria: "FONTANERIA",
                periodicidad: "TRIMESTRAL",
                fecha_planificada: "27/10/2025",
                descripcion:
                  "Se abrirán arquetas para limpiar e inspeccionar sus elementos, abriendo y cerrando válvulas",
                conforme_si: false,
                conforme_no: false,
              },
              {
                categoria: "FONTANERIA",
                periodicidad: "TRIMESTRAL",
                fecha_planificada: "15/10/2025",
                descripcion:
                  "Se comprobará estado del firme, grietas y recubrimientos",
                conforme_si: true,
                conforme_no: false,
              },

              // ZONA DE MANIOBRA
              {
                categoria: "ZONA DE MANIOBRA",
                periodicidad: "TRIMESTRAL",
                fecha_planificada: "11/11/2025",
                descripcion:
                  "Se revisará el estado de las barandillas y escaleras, elementos fijación, recubrimientos y estado oxidación",
                conforme_si: true,
                conforme_no: false,
              },
              {
                categoria: "ZONA DE MANIOBRA",
                periodicidad: "BIMENSUAL",
                fecha_planificada: "01/01/2026",
                descripcion:
                  "Se revisará el estado de la señalización marítima del dique (balizas)",
                conforme_si: false,
                conforme_no: true,
                observaciones: "Falta pintura",
              },

              // CANTIL
              {
                categoria: "CANTIL",
                periodicidad: "SEMESTRAL",
                fecha_planificada: "11/11/2025",
                descripcion:
                  "Se inspeccionará estado del firme, grietas y recubrimientos",
                conforme_si: false,
                conforme_no: false,
              },
              {
                categoria: "SEMESTRAL",
                periodicidad: "SEMESTRAL",
                fecha_planificada: "12/12/2025",
                descripcion:
                  "Se revisará estado general de la defensas ( cadenas, grilletes, orejeras y eje)",
                conforme_si: false,
                conforme_no: false,
              },
            ],
          },

          columns: [
            {
              text: "Periodicidad",
              dataIndex: "periodicidad",
              width: 100,
              align: "center",
            },
            {
              text: "Fecha<br>Planificada",
              dataIndex: "fecha_planificada",
              width: 100,
              align: "center",
              renderer: function (value) {
                if (!value) return "";

                // Lógica simples de parse de data (dd/mm/yyyy)
                var parts = value.split("/");
                var planDate = new Date(parts[2], parts[1] - 1, parts[0]);
                var today = new Date();

                // Diferença em dias
                var diffTime = planDate - today;
                var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                // Lógica de cores conforme anotação
                if (diffDays < -14) {
                  // Vencido há mais de 2 semanas -> Vermelho
                  return '<span class="status-expired">' + value + "</span>";
                } else if (
                  planDate.getMonth() === today.getMonth() &&
                  planDate.getFullYear() === today.getFullYear()
                ) {
                  // Mês em curso -> Laranja
                  return '<span class="status-current">' + value + "</span>";
                } else {
                  // Futuro -> Verde (simplificado)
                  return '<span class="status-future">' + value + "</span>";
                }
              },
            },
            {
              text: "Fecha de<br>Inspección",
              dataIndex: "fecha_inspección",
              width: 110,
              align: "center",
              renderer: Ext.util.Format.dateRenderer("d/m/Y"),
              editor: {
                xtype: "datefield",
                format: "d/m/Y",
              },
            },
            {
              text: "Inspeccionado por:",
              dataIndex: "inspeccionado_por",
              width: 150,
              editor: {
                xtype: "combo",
                store: ["Técnico A", "Técnico B", "Ingeniero Jefe"],
                editable: false,
              },
            },
            {
              text: "Descripción de la Inspección", // Coluna principal adicionada
              dataIndex: "descripcion",
              flex: 1, // Ocupa o espaço restante
              cellWrap: true, // Permite quebra de linha
            },
            {
              text: "CONFORME",
              columns: [
                {
                  text: "SI",
                  dataIndex: "conforme_si",
                  xtype: "checkcolumn",
                  width: 50,
                  listeners: {
                    checkchange: function (column, rowIndex, checked) {
                      // Se marcar SI, desmarca NO
                      if (checked) {
                        var rec = column.up("grid").getStore().getAt(rowIndex);
                        rec.set("conforme_no", false);
                      }
                    },
                  },
                },
                {
                  text: "NO",
                  dataIndex: "conforme_no",
                  xtype: "checkcolumn",
                  width: 50,
                  listeners: {
                    checkchange: function (column, rowIndex, checked) {
                      // Se marcar NO, desmarca SI
                      if (checked) {
                        var rec = column.up("grid").getStore().getAt(rowIndex);
                        rec.set("conforme_si", false);
                      }
                    },
                  },
                },
              ],
            },
            {
              text: "Observaciones",
              dataIndex: "observaciones",
              flex: 1,
              editor: {
                xtype: "textfield",
              },
              renderer: function (value, metaData, record) {
                // Se NO estiver marcado e não houver obs, destacar em vermelho
                if (record.get("conforme_no") && !value) {
                  metaData.style = "background-color: #ffcccc;";
                  return "Obrigatório preencher";
                }
                return value;
              },
            },
          ],
        },
      ],
    },
  ],
});

Ext.Ajax.request({
  url: "http://82.223.33.114/cmdbuild/services/rest/v3/classes/Building/cards?_dc=1769544048769&onlyGridAttrs=true&page=1&start=0&limit=50&sort=%5B%7B%22property%22%3A%22Code%22%2C%22direction%22%3A%22ASC%22%7D%5D",
  method: "GET",

  success: function (response) {
    var json = Ext.decode(response.responseText);
    console.log("API OK:", json);
    Ext.Msg.alert("Sucesso", "API respondeu corretamente!");
  },

  failure: function (response) {
    console.error("Erro API", response);
    Ext.Msg.alert("Erro", "Falha ao acessar API");
  },
});