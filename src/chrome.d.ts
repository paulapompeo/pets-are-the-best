// Chrome Extension API type declarations
declare namespace chrome {
  namespace storage {
    interface StorageArea {
      get(keys: string | string[], callback: (items: { [key: string]: any }) => void): void;
      set(items: { [key: string]: any }, callback?: () => void): void;
    }

    const local: StorageArea;
  }
}

