const { AutoLanguageClient } =
  require("@savetheclocktower/atom-languageclient");

const g_packageName = require("../package.json").name ?? "pulsar-ide-zig";
const g_childProcess = require("child_process");

function openConfig() {
  atom.workspace.open(`atom://config/packages/${g_packageName}`);
}

class ZigLanguageClient extends AutoLanguageClient {
  constructor () {
    atom.config.set("core.debugLSP", true);
    super();
  }

  getGrammarScopes() {
    return ["source.zig"];
  }

  getLanguageName() {
    return "Zig";
  }

  getPackageName() {
    return g_packageName;
  }

  getServerName() {
    return "zls";
  }

  startServerProcess(p_projectPath) {
    const l_childProcess = g_childProcess.spawn(
      atom.config.get(`${g_packageName}.p_zlsLocation`),
      [],
      {
        cwd: p_projectPath
      }
    )

    l_childProcess.on("error", p_error => {
      console.error(p_error);
      atom.notifications.addError(
        "Unable to start the ZLS!",
        {
          dismissable: true,
          buttons: [
            {
              text: "Open package settings.",
              onDidClick: openConfig
            }
          ],
          description: "This may occur if you don't have `ZLS` installed or if it is not in your PATH.\n\nYou may find helpful information in the package README."
        }
      )
    })

    return l_childProcess;
  }
}

module.exports = new ZigLanguageClient();

module.exports.config = {
  p_zlsLocation: {
    type: "string",
    title: "Path to the ZLS",
    description: "Specify the location to ZLS if it isn't in your path, make sure to include the full path to the zls binary.  If it is in your path, no change is needed.",
    default: "zls",
    order: 1
  }
}
