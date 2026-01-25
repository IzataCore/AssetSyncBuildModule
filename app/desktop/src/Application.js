Ext.define('y.Application', {
	extend: 'Ext.app.Application',
	name: 'y',
	requires: ['y.*'],
	defaultToken: 'homeview',

	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		this.removeSplash()
		var whichView = 'mainview'
		Ext.Viewport.add([{xtype: whichView}])
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});

// Ext.define('y.Application', {  // Ajusta 'MeuTeste' para o nome da tua app em app.json (ex: 'projecto_requerido')
//     extend: 'Ext.app.Application',
// 	name: 'y',
// 	requires: ['y.*'],
// 	defaultToken: 'homeview',
//     //alias: 'widget.main',  // Alias padrão para a view principal

//     title: 'Reporte de Mantenimiento y OPS - RR MACONDO',
//     layout: 'vbox',
//     bodyPadding: 10,
//     scrollable: true,

//     items: [
//         // Cabeçalhos iniciais (Remolcador, Datas, Tipo, OPS) - adaptado da imagem do PDF
//         {
//             xtype: 'container',
//             layout: 'hbox',
//             margin: '0 0 20 0',
//             items: [
//                 {
//                     xtype: 'displayfield',
//                     fieldLabel: 'Remolcador',
//                     value: 'RR MACONDO',
//                     labelWidth: 120,
//                     flex: 1
//                 },
//                 {
//                     xtype: 'displayfield',
//                     fieldLabel: 'Fecha de inicio',
//                     value: '2025-01-29',
//                     labelWidth: 120,
//                     flex: 1
//                 },
//                 {
//                     xtype: 'displayfield',
//                     fieldLabel: 'Fecha de finalización',
//                     value: '2025-02-04',
//                     labelWidth: 140,
//                     flex: 1
//                 }
//             ]
//         },
//         {
//             xtype: 'container',
//             layout: 'hbox',
//             margin: '0 0 20 0',
//             items: [
//                 {
//                     xtype: 'displayfield',
//                     fieldLabel: 'Tipo de Operación',
//                     value: 'Rutina: X | Ocasional: X',
//                     labelWidth: 140,
//                     flex: 1
//                 },
//                 {
//                     xtype: 'displayfield',
//                     fieldLabel: 'Mantenimiento programado',
//                     value: 'Ops: X - Número de Ops: EJE 1,3 - ENG 2,10,15',
//                     labelWidth: 180,
//                     flex: 1
//                 }
//             ]
//         },
//         // Título da tabela
//         {
//             xtype: 'label',
//             text: 'PROGRAMACIÓN',
//             style: 'font-weight: bold; font-size: 16px; margin-bottom: 10px;'
//         },
//         // Grid principal com os dados do PDF (copiei todos os itens da imagem)
//         {
//             xtype: 'grid',
//             flex: 1,
//             minHeight: 400,
//             store: {
//                 fields: ['item', 'equipo', 'descripcion', 'si', 'no', 'fecha_ejecucion', 'horometro', 'responsable', 'observaciones'],
//                 data: [
//                     { item: '1', equipo: 'MOTOR PRINCIPAL BÁBOR', descripcion: 'Semanal: Revisar válvulas reguladoras de aire de arranque', si: 'X', no: '', fecha_ejecucion: '', horometro: '', responsable: '', observaciones: '' },
//                     { item: '2', equipo: 'MOTOR PRINCIPAL ESTRIBOR', descripcion: 'Semanal: Revisar válvulas reguladoras de aire de arranque', si: 'X', no: '', fecha_ejecucion: '', horometro: '', responsable: '', observaciones: '' },
//                     { item: '3', equipo: 'Z DRIVE BÁBOR', descripcion: 'Semanal: Engranaje de gobierno: Verificar por daño, fugas, ruidos o vibraciones anormales...', si: 'X', no: '', fecha_ejecucion: '31/01/2025', horometro: '8844', responsable: 'LENIS JULIO ARIEL CARREAZO', observaciones: '' },
//                     { item: '', equipo: 'Z DRIVE BÁBOR EJE INTERMEDIO', descripcion: '400H: Engrase de los cojinetes del eje intermedio', si: 'X', no: '', fecha_ejecucion: '02/02/2025', horometro: '8850', responsable: 'LENIS JULIO ARIEL CARREAZO', observaciones: '' },
//                     { item: '4', equipo: 'Z DRIVE ESTRIBOR', descripcion: 'Semanal: Engranaje de gobierno: Verificar por daño, fugas, ruidos o vibraciones anormales...', si: 'X', no: '', fecha_ejecucion: '31/01/2025', horometro: '8830', responsable: 'LENIS JULIO ARIEL CARREAZO', observaciones: '' },
//                     { item: '', equipo: 'Z DRIVE ESTRIBOR EJE INTERMEDIO', descripcion: '400H: Engrase de los cojinetes del eje intermedio', si: 'X', no: '', fecha_ejecucion: '02/02/2025', horometro: '8836', responsable: 'LENIS JULIO ARIEL CARREAZO', observaciones: '' },
//                     { item: '5', equipo: 'COMPRESORES AA CENTRAL', descripcion: 'Semanal: Limpie el set compresor - motor, verifique que hay flujo libre de aire...', si: 'X', no: '', fecha_ejecucion: '02/02/2025', horometro: '', responsable: 'LENIS JULIO ARIEL CARREAZO', observaciones: '' },
//                     { item: '6', equipo: 'MANEJADORA AA CENTRAL', descripcion: 'Semanal: Cambio de filtros externos de guata', si: 'X', no: '', fecha_ejecucion: '02/02/2025', horometro: '', responsable: 'LENIS JULIO ARIEL CARREAZO', observaciones: '' },
//                     { item: '', equipo: '', descripcion: 'Semanal: Limpieza externa y drenajes', si: 'X', no: '', fecha_ejecucion: '02/02/2025', horometro: '', responsable: 'LENIS JULIO ARIEL CARREAZO', observaciones: '' },
//                     { item: '', equipo: '', descripcion: 'Quincenal: Cambio de filtros internos de guata', si: 'X', no: '', fecha_ejecucion: '02/02/2025', horometro: '', responsable: 'LENIS JULIO ARIEL CARREAZO', observaciones: '' },
//                     { item: '7', equipo: 'SISTEMA AA CONSOLA MÁQUINAS', descripcion: 'Mensual: Revisión de presiones del sistema, del ventilador, motor eléctrico...', si: 'X', no: '', fecha_ejecucion: '02/02/2025', horometro: '', responsable: 'LENIS JULIO ARIEL CARREAZO', observaciones: '' },
//                     { item: '8', equipo: 'GRÚA DE CUBIERTA (OPS ENG 15)', descripcion: 'Semanal: Engrase de rodamiento de columna, y cremallera de giro...', si: 'X', no: '', fecha_ejecucion: '02/02/2025', horometro: '', responsable: 'LENIS JULIO ARIEL CARREAZO', observaciones: '' },
//                     { item: '9', equipo: 'DAVIT (PESCANTE) (OPS ENG 15)', descripcion: 'Semanal: Inspección visual para disponibilidad de operación...', si: 'X', no: '', fecha_ejecucion: '02/02/2025', horometro: '', responsable: 'LENIS JULIO ARIEL CARREAZO', observaciones: '' },
//                     { item: '10', equipo: 'MOTOR FUERA DE BORDA BOTE', descripcion: 'Semanal: Lave el motor de bote en sitio. Lave el exterior del conjunto con agua dulce...', si: 'X', no: '', fecha_ejecucion: '', horometro: '', responsable: '', observaciones: '' },
//                     { item: '11', equipo: 'BOTE', descripcion: 'Semanal: Inspección visual general al bote de rescate - Chequee batería', si: 'X', no: '', fecha_ejecucion: '', horometro: '', responsable: '', observaciones: '' },
//                     { item: '', equipo: '', descripcion: 'Mensual: Checa y probar sin nadie abordo...', si: 'X', no: '', fecha_ejecucion: '', horometro: '', responsable: '', observaciones: '' },
//                     { item: '12', equipo: 'GANCHO DE REMOLQUE', descripcion: 'Mensual: Engrase los puntos de lubricación del gancho de remolque...', si: 'X', no: '', fecha_ejecucion: '', horometro: '', responsable: '', observaciones: '' }
//                 ]
//             },
//             columns: [
//                 { text: 'Item', dataIndex: 'item', width: 60 },
//                 { text: 'Equipo', dataIndex: 'equipo', width: 250 },
//                 { text: 'Descripción del mantenimiento u OPS a realizar', dataIndex: 'descripcion', flex: 2 },
//                 { text: 'Si', dataIndex: 'si', width: 60 },
//                 { text: 'No', dataIndex: 'no', width: 60 },
//                 { text: 'Fecha de ejecución', dataIndex: 'fecha_ejecucion', width: 150 },
//                 { text: 'Horometro (si aplica)', dataIndex: 'horometro', width: 150 },
//                 { text: 'Responsable de la ejecución', dataIndex: 'responsable', width: 200 },
//                 { text: 'Observaciones', dataIndex: 'observaciones', flex: 1 }
//             ]
//         }
//     ]
// });
