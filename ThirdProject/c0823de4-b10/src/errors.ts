type ErrorName = 'ApiError'; // при необходимости дополнять имена

export class CustomError extends Error {
  name: string;
  data?: {
    [index: string]: string | number;
  };

  constructor({
    name,
    message,
    data,
  }: {
    name: ErrorName;
    message: string;
    data?: {
      [index: string]: string | number;
    };
  }) {
    super(message);
    this.name = name;
    this.data = data;
  }
}
