export class JsonValidatorFile {
  execute(json: Blob): boolean {
    if (json && json.type === "application/json") {
      return true;
    } else {
      return false;
    }
  }
}
