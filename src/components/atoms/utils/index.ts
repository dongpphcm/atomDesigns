
/**
 * checkKeyExists check key has in object
 */
export function checkKeyExists<T extends Object>(key: string | number | undefined = "", objectValue: T): boolean {
    return key in objectValue;
}
