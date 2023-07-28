import type { ExtensionContext } from "vscode";
import FindAndReplaceInFilesCommands from "./FindAndReplaceInFilesCommand";

export function activate (context: ExtensionContext) {
	FindAndReplaceInFilesCommands.register(context);
}

export function deactivate () { }
