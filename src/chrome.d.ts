// Chrome Extension API type declarations
declare namespace chrome {
  namespace storage {
    interface StorageArea {
      get(keys: string | string[], callback: (items: { [key: string]: any }) => void): void;
      set(items: { [key: string]: any }, callback?: () => void): void;
    }

    const local: StorageArea;
  }

  namespace tabs {
    interface Tab {
      id?: number;
      url?: string;
      title?: string;
    }

    interface QueryInfo {
      active?: boolean;
      currentWindow?: boolean;
    }

    function query(queryInfo: QueryInfo, callback: (tabs: Tab[]) => void): void;
  }
}

