# /bin/bash
ls -1 $(grep -slR 'message Msg' ./cosmos-sdk/proto | egrep '\.proto$') \
    $(grep -slR 'message Msg' ./ibc-go/proto | egrep '\.proto$') \
    $(grep -slR 'message Msg' ./osmosis/proto | egrep '\.proto$') \
    $(find ./wasmd/proto -type f -name '*.proto') \
    | sort | uniq
