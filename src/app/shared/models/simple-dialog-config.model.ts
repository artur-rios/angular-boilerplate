export class SimpleDialogConfig {
  public Buttons: string[];
  public Message: string;
  public Title: string;

  constructor(buttons: string[], message: string, title: string) {
    this.Buttons = buttons;
    this.Message = message;
    this.Title = title;
  }
}
