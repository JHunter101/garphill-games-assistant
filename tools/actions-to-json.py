import pandas as pd
import json


def csvToJSON(csvFile, jsonFile):
    df = pd.read_csv(csvFile)
    df.fillna("", inplace=True)  # Replace NaN with empty string

    output = {}

    for _, row in df.iterrows():
        action = {}
        for c in ["e", "d", "c", "b", "a"]:
            if (
                row["icon-" + c + "-connect"] == ""
                and row["icon-" + c] == ""
                and row["icon-" + c + "-mod-1"] == ""
                and row["icon-" + c + "-mod-2"] == ""
            ):
                continue

            subaction = {
                "connect": row["icon-" + c + "-connect"],
                "main": row["icon-" + c],
                "mod-1": row["icon-" + c + "-mod-1"],
                "mod-2": row["icon-" + c + "-mod-2"],
            }
            action[c] = subaction

        game = row["game"]
        phase = row["phase"]
        if game not in output:
            output[game] = {}
        if phase not in output[game]:
            output[game][phase] = []

        output[game][phase].append(
            {
                "action": action,
                "weight": row["action-weight"],
            }
        )

    with open(jsonFile, "w") as f:
        json.dump(output, f, indent=4)


csvToJSON("res/action-data.csv", "res/action-data.json")
