const SAMPLE_DATA = [
  {
    "id": "1",
    "name": "Root",
    "type": "folder",
    "children": [
      {
        "id": "2",
        "name": "Folder1",
        "type": "folder",
        "children": [
          {
            "id": "3",
            "name": "Subfolder1",
            "type": "folder",
            "children": [
              {
                "id": "4",
                "name": "file1.txt",
                "type": "file"
              },
              {
                "id": "5",
                "name": "file2.txt",
                "type": "file"
              }
            ]
          },
          {
            "id": "6",
            "name": "file3.txt",
            "type": "file"
          }
        ]
      },
      {
        "id": "7",
        "name": "Folder2",
        "type": "folder",
        "children": [
          {
            "id": "8",
            "name": "Subfolder2",
            "type": "folder",
            "children": [
              {
                "id": "9",
                "name": "file4.txt",
                "type": "file"
              }
            ]
          },
          {
            "id": "10",
            "name": "file5.txt",
            "type": "file"
          }
        ]
      },
      {
        "id": "11",
        "name": "file6.txt",
        "type": "file"
      }
    ]
  }
];

export default function Home() {
  return (
    <div>
      
    </div>
  );
}