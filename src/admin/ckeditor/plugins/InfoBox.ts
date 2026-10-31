import {
  ButtonView,
  Command,
  ModelSelection,
  Plugin,
  toWidget,
} from "ckeditor5";
import blockIcon from "./info-box.svg?raw";

type BlockContent = {
  name: string;
  pageSize: number;
  api: string;
};

const BLOCK_ICON_PATH = "/block-outline.svg";
const BLOCK_ICON_SIZE = "24";

class InsertBlockContentCommand extends Command {
  execute(block: BlockContent, selection?: ModelSelection) {
    const { model } = this.editor;

    model.change((writer) => {
      const blockContent = writer.createElement("blockContent", {
        blockName: block.name,
        blockPageSize: String(block.pageSize),
        blockApi: block.api,
      });
      model.insertObject(
        blockContent,
        selection ?? model.document.selection,
        null,
        { findOptimalPosition: "auto" }
      );
      const positionAfterBlock = writer.createPositionAfter(blockContent);
      const paragraph = writer.createElement("paragraph");
      writer.insert(paragraph, positionAfterBlock);
      writer.setSelection(paragraph, "in");
    });
  }
}

export default class InfoBox extends Plugin {
  static get pluginName() {
    return "InfoBox";
  }

  init() {
    const editor = this.editor;

    editor.model.schema.register("blockContent", {
      inheritAllFrom: "$blockObject",
      allowAttributes: ["blockName", "blockPageSize", "blockApi"],
    });
    editor.conversion.for("upcast").elementToElement({
      view: { name: "div", classes: "block-content-id" },
      model: (viewElement, { writer }) =>
        writer.createElement("blockContent", {
          blockName: viewElement.getAttribute("data-block-name") ?? "",
          blockPageSize: viewElement.getAttribute("data-block-page-size") ?? "",
          blockApi: viewElement.getAttribute("data-block-api") ?? "",
        }),
    });
    editor.conversion.for("dataDowncast").elementToElement({
      model: "blockContent",
      view: (modelElement, { writer }) => {
        const viewElement = writer.createContainerElement("div", {
          class: "block-content-id",
          "data-block-name": modelElement.getAttribute("blockName") ?? "",
          "data-block-page-size": modelElement.getAttribute("blockPageSize") ?? "",
          "data-block-api": modelElement.getAttribute("blockApi") ?? "",
        });
        writer.insert(
          writer.createPositionAt(viewElement, "end"),
          writer.createEmptyElement("img", {
            src: BLOCK_ICON_PATH,
            alt: modelElement.getAttribute("blockName") ?? "Block content",
            width: BLOCK_ICON_SIZE,
            height: BLOCK_ICON_SIZE,
            style: "width: 24px; height: 24px; object-fit: contain; vertical-align: middle;",
          })
        );
        return viewElement;
      },
    });
    editor.conversion.for("editingDowncast").elementToElement({
      model: "blockContent",
      view: (modelElement, { writer }) => {
        const viewElement = writer.createContainerElement("div", {
          class: "block-content-id",
          "data-block-name": modelElement.getAttribute("blockName") ?? "",
          "data-block-page-size": modelElement.getAttribute("blockPageSize") ?? "",
          "data-block-api": modelElement.getAttribute("blockApi") ?? "",
          title: `${modelElement.getAttribute("blockName") ?? ""}, ${modelElement.getAttribute("blockPageSize") ?? ""}, ${modelElement.getAttribute("blockApi") ?? ""}`,
        });
        writer.insert(
          writer.createPositionAt(viewElement, "end"),
          writer.createEmptyElement("img", {
            src: BLOCK_ICON_PATH,
            alt: modelElement.getAttribute("blockName") ?? "Block content",
            width: BLOCK_ICON_SIZE,
            height: BLOCK_ICON_SIZE,
            style: "width: 24px; height: 24px; object-fit: contain; vertical-align: middle;",
          })
        );
        return toWidget(viewElement, writer, {
          label: "Block content",
        });
      },
    });

    editor.commands.add(
      "insertBlockContent",
      new InsertBlockContentCommand(editor)
    );

    editor.ui.componentFactory.add("infoBox", (locale) => {
      const button = new ButtonView(locale);
      let savedSelection: ModelSelection | undefined;

      button.label = "Block content";
      button.tooltip = "Nhập: name, pageSize, api";
      button.isToggleable = false;
      button.icon = blockIcon;

      this.listenTo(button, "mousedown", () => {
        savedSelection = editor.model.createSelection(
          editor.model.document.selection
        );
      });

      this.listenTo(button, "execute", () => {
        const input = window.prompt(
          "Nhập theo định dạng: name, pageSize, api",
          "content, 10, /api/content"
        );
        if (input === null) return;

        const [name, pageSizeText, api] = input
          .split(",")
          .map((part) => part.trim());
        const pageSize = Number(pageSizeText);

        if (!name || !pageSizeText || !api || !Number.isInteger(pageSize) || pageSize <= 0) {
          window.alert("Dữ liệu không hợp lệ. Ví dụ: content, 10, /api/content");
          return;
        }

        editor.execute(
          "insertBlockContent",
          { name, pageSize, api },
          savedSelection ?? editor.model.document.selection
        );
        savedSelection = undefined;
        editor.editing.view.focus();
      });

      return button;
    });
  }
}
