import React, {
  useCallback,
  useMemo,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SheetContents from "./SheetContents";

const BottomSheet = forwardRef((props, ref) => {
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ["25%", "80%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const handleSheetChanges = useCallback(
    (index) => {
      console.log("handleSheetChanges", index);
      if (props.onChange) {
        props.onChange(index);
      }
    },
    [props.onChange]
  );

  useImperativeHandle(ref, () => ({
    present: handlePresentModalPress,
    dismiss: handleCloseModalPress,
  }));

  return (
    <GestureHandlerRootView style={styles.container} pointerEvents='box-none'>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          style={styles.modal}
        >
          <BottomSheetView style={styles.contentContainer}>
            <SheetContents />
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 90,
    zIndex: 1,
  },
  contentContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,

    // justifyContent: "center",
  },
});
