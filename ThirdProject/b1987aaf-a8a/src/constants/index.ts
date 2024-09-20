interface KeyboardShortcuts {
  [key: string]: {
    win: {
      shortcut: string | string[];
      hint: string;
    };
    mac: {
      shortcut: string | string[];
      hint: string;
    };
  };
}

export const keyboardShortcuts: KeyboardShortcuts = {
  altEnter: {
    win: {
      shortcut: 'Alt + Enter',
      hint: 'Alt + Enter ↵',
    },
    mac: {
      shortcut: 'Option + Enter',
      hint: 'Option + Enter ↵',
    },
  },
};
