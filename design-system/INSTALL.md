# Design system

Tokens y componentes agregados a este proyecto por SuperDSAI Generator, en `design-system/`.
Estos archivos ya son parte de tu proyecto — podés editarlos libremente, no dependen del
generador ni se van a sobreescribir salvo que vuelvas a exportar sobre el mismo repo.

## Setup — una sola línea a mano

Agregá el preset de Tailwind a tu `tailwind.config.js` (no lo hacemos automáticamente: no
conocemos el formato ni el contenido actual de tu config, y una edición automática mal hecha
puede romper tu build):

```js
module.exports = {
  presets: [require('./design-system/tailwind-preset')],
  // ...el resto de tu config sin cambios
}
```

## Uso

```jsx
import { Button } from './design-system/components/Button'
import { Input } from './design-system/components/Input'
import { Textarea } from './design-system/components/Textarea'
import { Alert } from './design-system/components/Alert'
import { Badge } from './design-system/components/Badge'
```

Los tokens en bruto (colores, tipografía, escalas) están en `design-system/tokens/` si los
necesitás fuera de Tailwind.
