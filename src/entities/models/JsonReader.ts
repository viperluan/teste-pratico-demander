interface ITreemapData {
  name: string;
  value: number;
}

interface ITreemapExecuteData {
  jsonReadData: ITreemapData[];
  errorMessage: string;
}

export class JsonReader {
  reader: FileReader;
  jsonFile: Blob;
  jsonReadData: ITreemapData[];

  constructor(jsonFile: Blob, reader: FileReader) {
    this.reader = reader;
    this.jsonFile = jsonFile;
    this.jsonReadData = [];
  }

  readFile(): Promise<ITreemapData[]> {
    return new Promise((resolve, reject) => {
      this.reader.onload = () => {
        try {
          const result = this.reader.result as string;

          const json: ITreemapData[] = JSON.parse(result);

          resolve(json);
        } catch (error) {
          reject(new Error("Erro ao fazer o parse do arquivo."));
        }
      };

      this.reader.onerror = () => {
        reject(new Error("Erro na leitura do arquivo."));
      };

      this.reader.readAsText(this.jsonFile);
    });
  }

  validateFile(): boolean {
    if (this.jsonFile && this.jsonFile.type === "application/json") {
      return true;
    } else {
      return false;
    }
  }

  async execute(): Promise<ITreemapExecuteData> {
    const isValidatedFile = this.validateFile();

    if (!isValidatedFile) {
      return {
        jsonReadData: [],
        errorMessage: "Arquivo inválido",
      };
    }

    try {
      const result = await this.readFile();

      return {
        jsonReadData: result,
        errorMessage: "",
      };
    } catch (error) {
      return {
        jsonReadData: [],
        errorMessage: (error as Error).message,
      };
    }
  }
}
