namespace FactoryMethodPattern {

    export interface AbstractProduct {
        method(param?: any): void;
    }

    export class ProductA implements AbstractProduct {
        method = (param?: any) => {
            return "Method of ProductA";
        }
    }

    export class ProductB implements AbstractProduct {
        method = (param?: any) => {
            return "Method of ProductB";
        }
    }

    export namespace ProductFactory {
        export function createProduct(type: string): AbstractProduct {
            if (type === "A") {
                return new ProductA();
            } else if (type === "B") {
                return new ProductB();
            }

            return null;
        }
    }
}