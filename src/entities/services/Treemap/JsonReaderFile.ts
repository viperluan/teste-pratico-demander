import { ITreemapData } from "../../interfaces/ITreemapData";

export class JsonReaderFile {
  #reader: FileReader;

  constructor() {
    this.#reader = new FileReader();
  }

  execute(file: Blob): Promise<ITreemapData[]> {
    return new Promise((resolve, reject) => {
      this.#reader.onload = () => {
        try {
          const result = this.#reader.result as string;

          const json: ITreemapData[] = JSON.parse(result);

          resolve(json);
        } catch (error) {
          reject(new Error("Erro ao fazer o parse do arquivo."));
        }
      };

      this.#reader.onerror = () => {
        reject(new Error("Erro na leitura do arquivo."));
      };

      this.#reader.readAsText(file);
    });
  }
}
