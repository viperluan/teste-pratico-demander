import { ITreemapData } from "../../interfaces/ITreemapData";
import { JsonReaderFile } from "./JsonReaderFile";
import { JsonValidatorFile } from "./JsonValidatorFile";

interface ITreemapExecuteData {
  jsonReadData: ITreemapData[];
  errorMessage: string;
}

export class JsonToText {
  file: Blob;
  jsonReaderFile: JsonReaderFile;
  jsonValidatorFile: JsonValidatorFile;

  constructor(file: Blob) {
    this.file = file;
    this.jsonReaderFile = new JsonReaderFile();
    this.jsonValidatorFile = new JsonValidatorFile();
  }

  async execute(): Promise<ITreemapExecuteData> {
    const isValidatedFile = this.jsonValidatorFile.execute(this.file);

    if (!isValidatedFile) {
      return {
        jsonReadData: [],
        errorMessage: "Arquivo inválido",
      };
    }

    try {
      const result = await this.jsonReaderFile.execute(this.file);

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
