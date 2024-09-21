import createReport from 'docx-templates';
import { getDateString } from './App';

export async function saveDoc(file, data, fileName) {
    if (data === undefined) {
        console.error('no data was passed into saveDoc()');
        return;
    }
    // Read template
    const binary = await fetch(file)
        .then(r => r.blob())
        .then(blobFile => new Blob([blobFile],
                { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }));
    const template = await readFileIntoArrayBuffer(binary);

    // Create report
    const report = await createReport({
        template,
        data: mapData(data)
    });

    // Save report
    saveDataToFile(
        report,
        `${fileName}.docx`,
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    );
}

// ==============================================
// Helpers
// ==============================================

const mapData = (data) => {
    data.toolbox.Groups.forEach(group => {
        group.Items = group.Items
            .map(value => value.Item)
            .join(', ');
    });
    data.experience.ExperienceList.forEach(value => {
        value.StartDate = getDateString(value.StartDate);
        value.EndDate = getDateString(value.EndDate);
    });
    data.education.Items.forEach(value => {
        value.CompletedDate = getDateString(value.CompletedDate);
    })
    return data;
}

const readFileIntoArrayBuffer = async fd =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsArrayBuffer(fd);
    });

const saveDataToFile = (data, fileName, mimeType) => {
    const blob = new Blob([data], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    downloadURL(url, fileName, mimeType);
    setTimeout(() => {
        window.URL.revokeObjectURL(url);
    }, 1000);
};

const downloadURL = (data, fileName) => {
    const a = document.createElement('a');
    a.href = data;
    a.download = fileName;
    document.body.appendChild(a);
    a.style = 'display: none';
    a.click();
    a.remove();
};