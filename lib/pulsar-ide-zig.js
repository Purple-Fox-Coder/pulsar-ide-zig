const { AutoLanguageClient } =
  require("@savetheclocktower/atom-languageclient");

const g_packageName = require("../package.json").name ?? "pulsar-ide-zig";

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
    return super.spawn(
      "zls",
      [],
      {
        cwd: p_projectPath
      }
    )
  }
}

module.exports = new ZigLanguageClient();
