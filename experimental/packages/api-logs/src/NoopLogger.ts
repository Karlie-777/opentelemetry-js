/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { EventRecord } from './types/EventRecord';
import { Logger } from './types/Logger';
import { LogRecord } from './types/LogRecord';

export class NoopLogger implements Logger {
  emit(_logRecord: LogRecord): void {}

  emitEvent(_eventRecord: EventRecord): void {}
}

export const NOOP_LOGGER = new NoopLogger();
