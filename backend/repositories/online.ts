const onlineIds: Map<string, number> = new Map();

function setOnline(id: string) {
  onlineIds.set(id, new Date().getTime());
}

function isOnline(id: string): boolean {
  return (onlineIds.get(id) ?? 0) > new Date().getTime() - 6000;
}

export { isOnline, setOnline };
