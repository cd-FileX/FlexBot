import json
import sys

loadedf = {}

# TODO: Alle Channels.json in Arrays machen
def get_v(name: list, path: str, load: bool, execute="normal"):
    try:
        if load:
            _load(path)

        prev = loadedf
        for i in name:
            prev = prev[i]

        if execute == "normal":
            return prev
        elif execute == "colour":
            return int(prev, 16)

        else: raise ValueError(f'Der Exec Type {execute} existiert nicht')

    except Exception as exc:
        errline = __file__.split('/')[-1]
        raise ChildProcessError(
            f"**ERROR**: *{errline}, Line {sys.exc_info()[2].tb_lineno}*: \n**{sys.exc_info()[0].__name__}**: {exc}")


def edit_json(indexes: list, text, path: str, load: bool, execute: str):
    try:
        if load:
            _load(path)

        prev = "loadedf"
        for entry in indexes:
            if isinstance(entry, int):
                prev += f"[{entry}]"
            else:
                prev += f"[\"{entry}\"]"

        if execute == "add" or execute == "append":
            exec(prev + ".append(text)")
        elif execute == "remove":
            exec(prev + ".remove(text)")
        elif execute == "update":
            exec(prev + " = text")

        with open(path, "w+") as nfl:
            json.dump(loadedf, nfl)

    except Exception as exc:
        errline = __file__.split('/')[-1]
        raise ChildProcessError(
            f"**ERROR**: *{errline}, Line {sys.exc_info()[2].tb_lineno}*: \n**{sys.exc_info()[0].__name__}**: {exc}")


def _load(path: str):
    try:
        preloadf = open(path, 'r')
        global loadedf
        loadedf = json.load(preloadf)

    except Exception as exc:
        errline = __file__.split('/')[-1]
        raise ChildProcessError(
            f"**ERROR**: *{errline}, Line {sys.exc_info()[2].tb_lineno}*: \n**{sys.exc_info()[0].__name__}**: {exc}")
