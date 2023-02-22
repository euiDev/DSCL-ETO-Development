function getLocalStorageData<Type>(data: string): Type | null {
  if (!localStorage.getItem(data)) {
    return null;
  }

  return JSON.parse(localStorage.getItem(data) as string);
}

function setLocalStorageData<Type>(dataName: string, data: Type): void {
  localStorage.setItem(dataName, JSON.stringify({ ...data }));
}

export { getLocalStorageData, setLocalStorageData };
