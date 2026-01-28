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
        // 🔹 ZONA (esquerda)
        {
          xtype: "container",
          flex: 1,
          style: {
            fontSize: "14px",
          },
          html: "<b>ZONA:</b> ____________",
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
              src: "resources/images/logo1.png",
              height: 40,
              margin: "0 10 0 0",
            },
            {
              xtype: "image",
              src: "resources/images/logo2.png",
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
