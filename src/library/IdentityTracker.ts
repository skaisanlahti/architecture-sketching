export class IdentityTracker {
  public genId() {
    const id = ++this.lastEventId;
    return id;
  }

  public isLatest(id: number) {
    return this.lastEventId === id;
  }

  private lastEventId = 0;
}
