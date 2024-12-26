document.getElementById('translate').addEventListener('click', () => { 
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: getTranslatedData
    }, (results) => {
      // Aquí se obtiene el resultado de content.js
      const translatedData = results[0].result;
      displayTranslatedData(translatedData);
    });
  });
});

function displayTranslatedData(data) {
  const contentDiv = document.getElementById('translatedContent');
  contentDiv.innerHTML = ''; // Limpiar el contenido anterior

  if (data && Object.keys(data).length > 0) {
    Object.keys(data).forEach(key => {
      const para = document.createElement('p');
      para.textContent = `${key}: ${data[key]}`;
      contentDiv.appendChild(para);
    });
  } else {
    contentDiv.textContent = 'No se encontraron datos traducidos.';
  }
}

function getTranslatedData() {
  const selectedRow = document.querySelector('.ag-row-selected');
  if (!selectedRow) {
    return null;
  }

  const columnMappings = {
    // (TBFVH213) columnas para FV_CommunicationHistory
    "VEH_REGISTR_NUM": "Número de Registro del Vehículo",
    "REQ_SND_DATETIME": "Fecha y Hora de Envío de la Solicitud",
    "REQ_COMD_NM": "Nombre del Comando de la Solicitud",
    "REQ_SEQ": "Secuencia de Solicitud",
    "REQ_RCV_DATETIME": "Fecha y Hora de Recepción de la Solicitud",
    "REQ_LOC_VALUE": "Valor de Ubicación de la Solicitud",
    "REQ_HEADER_VALUE": "Valor del Encabezado de la Solicitud",
    "EVENT_CREAT_DATETIME": "Fecha y Hora de Creación del Evento",
    "RECEIVE_PARAM_VALUE": "Valor del Parámetro Recibido",
    "RES_PARAM_VALUE": "Valor del Parámetro de Respuesta",
    "RES_RCV_DATETIME": "Fecha y Hora de Recepción de la Respuesta",
    "DELAY_SECOND": "Segundo de Retraso",
    "RES_ERROR_YN": "Respuesta de Error Sí o No",
    "IP_ADDR": "Dirección IP",
    "CREAT_USER_ID": "ID de Usuario Creador",
    "CREAT_DATETIME": "Fecha y Hora de Creación",
    "UPD_USER_ID": "ID de Usuario Actualizador",
    "UPD_DATETIME": "Fecha y Hora de Actualización",
    
    // (TBFVH208) columnas para FV_VehicleLocationEventHistory
    "EVENT_DATETIME": "Fecha y Hora del Evento",
    "LOC_TYPE_CD": "Código de Tipo de Ubicación",
    "COMM_STAT_TYPE_CD": "Código de Tipo de Estado de Comunicación",
    "VEH_LAT": "Latitud del Vehículo",
    "VEH_LON": "Longitud del Vehículo",
    "LINE_ID": "ID de Línea",
    "LINE_SERV_ID": "ID de servicio de línea",
    "VEH_SERV_ID": "ID de servicio del vehículo",
    "ROUTE_ID": "Identificación de Ruta",
    "ROUTE_OFFSET_VALUE": "Valor de Desplazamiento de Ruta",
    "SERV_TRIP_SEQ": "Secuencia del viaje de servicio",
    "DRIVER_SERV_ID": "ID de servicio del conductor",
    "DRIVER_REGISTR_NUM": "Número de Registro del Conductor",
    "SECTION_ID": "ID de Sección",
    "POLY_ID": "ID de Polígono",
    "SECTION_OFFSET_VALUE": "Valor de Desplazamiento de Sección",
    "TRAVEL_SPD": "Velocidad de Viaje",
    "VEH_HEAD_ANGLE": "Ángulo de la Cabeza del Vehículo",
    "NODE_ID": "ID de Nodo",
    "NEXT_NODE_ID": "ID del Siguiente Nodo",
    "SCHED_YN": "Programar Sí o No",
    "CREAT_USER_ID": "ID de Usuario Creador",
    "CREAT_DATETIME": "Fecha y hora de creación",
    "UPD_USER_ID": "ID de Usuario Actualizador",
    "UPD_DATETIME": "Fecha y hora de actualización",
    "APPLY_DATE": "Fecha de aplicación",

     //(TBFCH101) columnas para FC_RegulationHistory
     "APPLY_DATE": "Fecha de Aplicación",
     "ACT_SEQ": "Secuencia de Acción",
     "OPRTR_ID": "ID de Operador",
     "LINE_ID": "ID de Línea",
     "LINE_SERV_ID": "ID de Servicio de Línea",
     "VEH_REGISTR_NUM": "Número de Registro de Vehículo",
     "REGUL_TYPE_ID": "ID de Tipo de Regulación",
     "PARAM_VALUE": "Valor del Parámetro",
     "VEH_SERV_ID": "ID de Servicio del Vehículo",
     "REACT_YN": "Reacción Sí/No",
     "REACT_DATETIME": "Fecha y Hora de Reacción",
     "MOTIVE_ID": "ID de Motivo",
     "CREAT_USER_ID": "ID de Usuario Creador",
     "CREAT_DATETIME": "Fecha y Hora de Creación",
     "UPD_USER_ID": "ID de Usuario Actualizador",
     "UPD_DATETIME": "Fecha y Hora de Actualización",
     "TGT_UNDO_SEQ": "Secuencia de Deshacer Objetivo"
  };

  const translatedData = {};
  selectedRow.querySelectorAll('[col-id]').forEach(cell => {
    const colId = cell.getAttribute('col-id');
    const translatedColName = columnMappings[colId];
    if (translatedColName) {
      translatedData[translatedColName] = cell.textContent.trim();
    }
  });

  return translatedData;
}
