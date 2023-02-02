# Nest swagger bug

to reproduce:

1. `npm i -g @nestjs/cli`
2. `nest new project-name`
3. In new project - `@nestjs/swagger`
4. Add shared lib with enum
5. Add swagger plugin to nest-cli.json

After that, you will be able to build project but project start will fail with message like

```
> @nest-swagger-bug/app@0.0.1 start
> nest start

Error: Cannot find module '/web/nest-swagger-bug/app/node_modules/@nest-swagger-bug/shared/dist/index.js'
    at createEsmNotFoundErr (node:internal/modules/cjs/loader:1016:15)
    at finalizeEsmResolution (node:internal/modules/cjs/loader:1009:15)
    at resolveExports (node:internal/modules/cjs/loader:529:14)
    at Function.Module._findPath (node:internal/modules/cjs/loader:569:31)
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:981:27)
    at Function.Module._load (node:internal/modules/cjs/loader:841:27)
    at Module.require (node:internal/modules/cjs/loader:1061:19)
    at require (node:internal/modules/cjs/helpers:103:18)
    at Object.<anonymous> (/web/nest-swagger-bug/app/src/app.controller.ts:3:1)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)

```
