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

import * as assert from 'assert';
import { SeverityNumber } from '../../../src/experimental';
import { NoopLogger } from '../../../src/experimental/NoopLogger';
import { NoopLoggerProvider } from '../../../src/experimental/NoopLoggerProvider';

describe('experimental NoopLogger', () => {
  it('constructor should not crash', () => {
    const logger = new NoopLoggerProvider().getLogger('test-noop');
    assert(logger instanceof NoopLogger);
  });

  it('calling emit should not crash', () => {
    const logger = new NoopLoggerProvider().getLogger('test-noop');
    logger.emit({
      severityNumber: SeverityNumber.TRACE,
      body: 'log body',
    });
  });

  it('calling emitEvent should not crash', () => {
    const logger = new NoopLoggerProvider().getLogger('test-noop');
    logger.emitEvent({
      severityNumber: SeverityNumber.TRACE,
      name: 'event name',
    });
  });
});