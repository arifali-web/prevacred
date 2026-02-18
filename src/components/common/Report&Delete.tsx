import {Icon, Pressable, Text, View} from '@components';
import React from 'react';

export function ReportDelete({edit, onEdit, onDelete}: any) {
  return (
    <View gap>
      <Pressable onPress={() => onEdit()} row gap="s" align="center">
        <Icon name={edit ? 'EditGreen' : 'Copy'} size="s" />
        <Text
          style={{fontSize: 14}}
          font="Medium"
          text={edit ? 'Edit' : 'Copy Link'}
        />
      </Pressable>
      <Pressable onPress={() => onDelete()} row gap="s" align="center">
        <Icon name={edit ? 'Delete' : 'Report'} size="s" />
        <Text
          style={{fontSize: 14}}
          font="Medium"
          text={edit ? 'Delete' : 'Report'}
        />
      </Pressable>
    </View>
  );
}
