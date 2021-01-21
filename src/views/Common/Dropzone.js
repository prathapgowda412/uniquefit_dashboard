import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';

const useStyles = makeStyles((theme) =>
  createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 210,
    },
  })
);

const DropZone = ({ setFiles }) => {
  const classes = useStyles();

  return (
    <DropzoneArea
      onChange={(files) => setFiles(files)}
      // acceptedFiles={['application/pdf']}
      filesLimit={50}
      showPreviews={true}
      showPreviewsInDropzone={false}
      useChipsForPreview
      previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
      previewChipProps={{ classes: { root: classes.previewChip } }}
      previewText='Selected files'
    />
  );
};

export default DropZone;
