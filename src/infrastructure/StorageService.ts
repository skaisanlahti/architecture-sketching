export class StorageService<TData> {
  public constructor(private readonly storageKey: string) {}

  public save(data: TData) {
    try {
      const json = JSON.stringify(data);
      localStorage.setItem(this.storageKey, json);
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  }

  public load() {
    try {
      const json = localStorage.getItem(this.storageKey);
      if (json === null) return undefined;
      const data: TData = JSON.parse(json);
      return data;
    } catch (error) {
      console.error("Failed to load data:", error);
    }
  }
}
