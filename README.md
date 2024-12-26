# Extensión de Traducción de Tablas para Google Chrome

Esta extensión para Google Chrome permite traducir y visualizar datos de tablas seleccionadas en una página web. Está diseñada para facilitar el entendimiento de columnas y valores, asignándoles nombres descriptivos y legibles en español. Actualmente, soporta tablas como `FV_VehicleLocationEventHistory` y `FC_RegulationHistory`.

---

## Funcionalidades

- Traducción automática de nombres de columnas en tablas seleccionadas.
- Visualización clara y organizada de los datos traducidos.
- Soporte para múltiples tablas con diferentes estructuras de columnas.

---

## Instalación

1. Descarga el código fuente de esta extensión.
2. Abre Google Chrome y navega a `chrome://extensions/`.
3. Activa el modo de desarrollador en la esquina superior derecha.
4. Haz clic en el botón **"Cargar descomprimida"**.
5. Selecciona la carpeta donde descargaste el código fuente.
6. La extensión se instalará y estará lista para usarse.

---

## Uso

1. Navega a la página web que contiene la tabla que deseas traducir.
2. Selecciona la fila de la tabla que deseas procesar.
3. Haz clic en el ícono de la extensión en la barra de herramientas de Chrome.
4. Pulsa el botón **"Traducir"**.
5. Los datos traducidos aparecerán en el panel de la extensión.

---

## Tablas Soportadas

### 1. FV\_VehicleLocationEventHistory

- Traducción de columnas como:
  - `EVENT_DATETIME` → "Fecha y Hora del Evento"
  - `LOC_TYPE_CD` → "Código de Tipo de Ubicación"
  - `VEH_LAT` → "Latitud del Vehículo"

### 2. FC\_RegulationHistory

- Traducción de columnas como:
  - `APPLY_DATE` → "Fecha de Aplicación"
  - `ACT_SEQ` → "Secuencia de Acción"
  - `OPRTR_ID` → "ID de Operador"

---

## Configuración

Para agregar nuevas tablas o columnas:

1. Edita el objeto `columnMappings` en el archivo principal del script.
2. Agrega las columnas y sus descripciones correspondientes en el formato:
   ```javascript
   "NOMBRE_COLUMNA": "Descripción en Español"
   ```

---

## Requisitos

- Google Chrome versión 90 o superior.
- Permisos para ejecutar scripts en las páginas web que contienen las tablas.

---

## Contribución

Si deseas contribuir a esta extensión:

1. Haz un fork del repositorio.
2. Realiza tus cambios y pruébalos localmente.
3. Envía un pull request con una descripción detallada de tus cambios.

---

## Licencia

This project is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.

You are free to:

Share — copy and redistribute the material in any medium or format.

Adapt — remix, transform, and build upon the material.

Under the following terms:

Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

NonCommercial — You may not use the material for commercial purposes.

ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

Read more about this license at CC BY-NC-SA 4.0.

