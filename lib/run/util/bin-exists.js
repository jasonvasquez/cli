import { spawnSync } from 'child_process';
import which from 'which';

/**
 * Uses `which` in a child process to determin if a bin exists
 *
 * @param {String} bin - Executable bin name
 * @returns {Boolean} true when the bin exists
 */
export default function binExists(bin) {
  let path = which.sync(bin, { nothrow: true });
  return path !== null;
}
