
sync:
	rsync -av --exclude='.git' --exclude='.vscode' ./ /mnt/e/WORKSPACE/qn-2-app-android

copy-only:
	rsync -av --exclude='.git' --exclude='.vscode' --exclude='node_modules' ./ /mnt/e/WORKSPACE/qn-2-app-android
