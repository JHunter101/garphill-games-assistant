import pandas as pd
import json


def csvToJSON(csvFile, jsonFile):
    df = pd.read_csv(csvFile)
    df.fillna("", inplace=True)

    output = {}

    for _, row in df.iterrows():
        output[row["code"]] = {
            "code": row["code"],
            "type": row["type"],
            "name": row["name"],
            "desc": row["desc"],
            "draw": row["draw"],
            "end": row["end"],
            "stack": row["stack"],
            "attachType": row["attachType"],
            "attachWhere": row["attachWhere"],
            "color": row["color"],
            "class-parent": (
                row["class-parent"].split(",") if row["class-parent"] else []
            ),
            "class-self": row["class-self"].split(",") if row["class-self"] else [],
        }

    with open(jsonFile, "w") as f:
        json.dump(output, f, indent=4)


csvToJSON("res/icon-data.csv", "res/icon-data.json")
