function swapKeysAndValues<K extends PropertyKey, V extends PropertyKey>(obj: Record<K, V>): Record<V, K> {
  const entries = Object.entries(obj);
  const swappedEntries = entries.map(([key, value]) => [value, key]);

  return Object.fromEntries(swappedEntries);
}
