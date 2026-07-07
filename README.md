# `@tanuden/rudolf`

TypeScript type definitions for the **Rudolf (Railway Unified Display Object Link Format)** wire schema.

## Install

```bash
npm install @tanuden/rudolf
```

## Usage

```ts
import type { OutputFrame, SimProfile, InputCommand } from '@tanuden/rudolf';
import { SCHEMA_VERSION, emptyPhysics, SignalPhase, DoorSide } from '@tanuden/rudolf';

const physics = emptyPhysics();
physics.speed = 78.4;

if (frame.signals.list[0]?.phase === SignalPhase.R) {
  // stop signal
}
```

This package contains **only** type definitions and small factory/constant helpers. No runtime validation, no transport, no business logic. It is environment-neutral (works in both browser and Node.js).

## Specification

See [Rudolf spec](https://github.com/haruyukitanuki/rudolf/blob/main/spec/rudolf-spec.md) for the full wire format.

## Open Source @ Tanuden

Rudolf is Open Source Software (OSS), licensed under Apache 2.0. You may freely distribute, use and modify code provided to you in repository in accordance with it.

A copy of the license can be found at the root of the repository [here](https://github.com/haruyukitanuki/rudolf/blob/main/LICENSE.md).

## Support

[Tanuden Discord Server](https://go.tanu.ch/tanuden-discord) | [Twitter](https://go.tanu.ch/twitter) | [YouTube](https://go.tanu.ch/tanutube)

**Tanukigawa Railway | Copyright (c) 2026 Haruyuki Tanukiji.**