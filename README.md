## _publicArrayContainer_byType_implementation(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;instance<br>): any 

A private function for use inside subclasses of PublicArrayContainer that  
have the method `.byType()` .  It's meant to be called inside the definition  
of `.byType()` inside each of those classes.

### Parameters
```
type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined' | 'null',
instance: {
    byTest: (testFunction: (item: any, index?: number, array?: any[]) => boolean) => any
}
```


### Installation
```bash
npm i  @writetome51/public-array-container-by-type-implementation
```

### Loading
```
// If using TypeScript:
import { _publicArrayContainer_byType_implementation } 
    from '@writetome51/public-array-container-by-type-implementation';
    
// If using ES5 JavaScript:
var _publicArrayContainer_byType_implementation = 
    require('@writetome51/public-array-container-by-type-implementation')
    ._publicArrayContainer_byType_implementation;
```
